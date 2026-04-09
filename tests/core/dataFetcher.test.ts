import { describe, it, expect, vi, afterEach, beforeEach } from "vitest";
import {
  fetchNeows,
  fetchCad,
  parseNeows,
  NasaDataFetcher,
  loadSnapshot,
  type NeowsResponse,
  type CadResponse,
  type FetchStatus,
} from "../../src/core/dataFetcher";

function makeNeowsResponse(dates: string[]): NeowsResponse {
  const near_earth_objects: Record<
    string,
    NeowsResponse["near_earth_objects"][string]
  > = {};
  for (const date of dates) {
    near_earth_objects[date] = [
      {
        id: `id-${date}`,
        name: `NEO ${date}`,
        estimated_diameter: {
          kilometers: { estimated_diameter_max: 0.5 },
        },
        is_potentially_hazardous_asteroid: false,
        close_approach_data: [
          {
            close_approach_date: date,
            relative_velocity: { kilometers_per_second: "15.0" },
            miss_distance: { kilometers: "500000", lunar: "1.3" },
          },
        ],
      },
    ];
  }
  return { near_earth_objects };
}

function makeCadResponse(): CadResponse {
  return {
    fields: ["des", "cd", "dist", "v_rel"],
    data: [["2024 AB1", "2025-Jan-01 12:00", "0.05", "12.3"]],
  };
}

function mockFetch(
  handler: (url: string) => { status: number; body: unknown },
) {
  return vi.spyOn(globalThis, "fetch").mockImplementation(async (input) => {
    const url = typeof input === "string" ? input : (input as Request).url;
    const { status, body } = handler(url);
    return {
      ok: status >= 200 && status < 300,
      status,
      json: async () => body,
    } as Response;
  });
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("fetchNeows", () => {
  it("fetches a single chunk when range is ≤7 days", async () => {
    const start = new Date("2025-01-01");
    const end = new Date("2025-01-07");
    const expected = makeNeowsResponse(["2025-01-01"]);

    const spy = mockFetch(() => ({ status: 200, body: expected }));

    const result = await fetchNeows(start, end);
    expect(result).toEqual(expected);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toContain("start_date=2025-01-01");
    expect(spy.mock.calls[0][0]).toContain("end_date=2025-01-07");
  });

  it("splits into multiple chunks when range exceeds 7 days", async () => {
    const start = new Date("2025-01-01");
    const end = new Date("2025-01-15"); // 14 days → 2 chunks of 7 days each

    let callCount = 0;
    const spy = mockFetch(() => {
      callCount++;
      return {
        status: 200,
        body: makeNeowsResponse([`2025-01-0${callCount}`]),
      };
    });

    const result = await fetchNeows(start, end);
    expect(spy.mock.calls.length).toBeGreaterThanOrEqual(2);
    // merged near_earth_objects should have keys from both chunks
    expect(
      Object.keys(result.near_earth_objects).length,
    ).toBeGreaterThanOrEqual(2);
  });

  it("fetches chunks sequentially, not in parallel", async () => {
    const start = new Date("2025-01-01");
    const end = new Date("2025-01-21"); // 20 days → 3 chunks

    const callOrder: number[] = [];
    let callIndex = 0;

    mockFetch(() => {
      const i = ++callIndex;
      callOrder.push(i);
      return { status: 200, body: makeNeowsResponse([`2025-01-0${i}`]) };
    });

    await fetchNeows(start, end);

    // Chunks must be fetched in order 1, 2, 3 — not concurrently
    expect(callOrder).toEqual([1, 2, 3]);
  });

  it("does not include api_key in the request URL (key is injected by the proxy)", async () => {
    const spy = mockFetch(() => ({
      status: 200,
      body: makeNeowsResponse(["2025-01-01"]),
    }));

    await fetchNeows(new Date("2025-01-01"), new Date("2025-01-03"));
    expect(spy.mock.calls[0][0]).not.toContain("api_key=");
  });

  it("throws on HTTP 429", async () => {
    mockFetch(() => ({ status: 429, body: {} }));
    await expect(
      fetchNeows(new Date("2025-01-01"), new Date("2025-01-03")),
    ).rejects.toThrow("429");
  });

  it("throws on non-2xx status", async () => {
    mockFetch(() => ({ status: 500, body: {} }));
    await expect(
      fetchNeows(new Date("2025-01-01"), new Date("2025-01-03")),
    ).rejects.toThrow("500");
  });
});

describe("fetchCad", () => {
  it("fetches CAD data and returns parsed response", async () => {
    const expected = makeCadResponse();
    const spy = mockFetch(() => ({ status: 200, body: expected }));

    const result = await fetchCad(
      new Date("2025-01-01"),
      new Date("2025-01-07"),
    );
    expect(result).toEqual(expected);
    expect(spy.mock.calls[0][0]).toContain("cad.api");
    expect(spy.mock.calls[0][0]).toContain("date-min=2025-01-01");
    expect(spy.mock.calls[0][0]).toContain("date-max=2025-01-07");
    expect(spy.mock.calls[0][0]).toContain("dist-max=0.2");
  });

  it("throws on HTTP 429", async () => {
    mockFetch(() => ({ status: 429, body: {} }));
    await expect(
      fetchCad(new Date("2025-01-01"), new Date("2025-01-07")),
    ).rejects.toThrow("429");
  });

  it("throws on non-2xx status", async () => {
    mockFetch(() => ({ status: 503, body: {} }));
    await expect(
      fetchCad(new Date("2025-01-01"), new Date("2025-01-07")),
    ).rejects.toThrow("503");
  });
});

describe("parseNeows", () => {
  it("parses valid NeoWs response into NeoData array", () => {
    const response = makeNeowsResponse(["2025-01-01", "2025-01-02"]);
    const result = parseNeows(response);
    expect(result).toHaveLength(2);
    expect(result[0].missDistKm).toBe(500_000);
    expect(result[0].velocityKmS).toBe(15.0);
    expect(result[0].hazardous).toBe(false);
  });

  it("skips asteroids with invalid missDistKm or velocityKmS", () => {
    const response: NeowsResponse = {
      near_earth_objects: {
        "2025-01-01": [
          {
            id: "bad",
            name: "Bad NEO",
            estimated_diameter: {
              kilometers: { estimated_diameter_max: 0.1 },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "2025-01-01",
                relative_velocity: { kilometers_per_second: "0" },
                miss_distance: { kilometers: "-1", lunar: "0" },
              },
            ],
          },
        ],
      },
    };
    const result = parseNeows(response);
    expect(result).toHaveLength(0);
  });

  it("skips asteroids with no close_approach_data", () => {
    const response: NeowsResponse = {
      near_earth_objects: {
        "2025-01-01": [
          {
            id: "no-approach",
            name: "No Approach",
            estimated_diameter: {
              kilometers: { estimated_diameter_max: 0.1 },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [],
          },
        ],
      },
    };
    expect(parseNeows(response)).toHaveLength(0);
  });

  it("skips asteroids with invalid close_approach_date", () => {
    const response: NeowsResponse = {
      near_earth_objects: {
        "2025-01-01": [
          {
            id: "bad-date",
            name: "Bad Date NEO",
            estimated_diameter: {
              kilometers: { estimated_diameter_max: 0.1 },
            },
            is_potentially_hazardous_asteroid: false,
            close_approach_data: [
              {
                close_approach_date: "not-a-date",
                relative_velocity: { kilometers_per_second: "15.0" },
                miss_distance: { kilometers: "500000", lunar: "1.3" },
              },
            ],
          },
        ],
      },
    };
    expect(parseNeows(response)).toHaveLength(0);
  });
});

describe("NasaDataFetcher", () => {
  it("fetchAndIndex resolves without error on successful fetch", async () => {
    const neowsData = makeNeowsResponse(["2025-01-01"]);
    const cadData = makeCadResponse();
    mockFetch((url) => {
      if (url.includes("nasa.gov")) return { status: 200, body: neowsData };
      if (url.includes("cad.api")) return { status: 200, body: cadData };
      return { status: 500, body: {} };
    });
    const fetcher = new NasaDataFetcher();
    await expect(
      fetcher.fetchAndIndex(new Date("2025-01-01"), new Date("2025-01-07")),
    ).resolves.toBeUndefined();
  });

  it("loadMeteorShowers returns at least 8 showers with computed position3d", () => {
    const fetcher = new NasaDataFetcher();
    const showers = fetcher.loadMeteorShowers();
    expect(showers.length).toBeGreaterThanOrEqual(8);
    for (const shower of showers) {
      expect(shower.position3d).toHaveLength(3);
      const [x, y, z] = shower.position3d;
      const mag = Math.sqrt(x * x + y * y + z * z);
      expect(mag).toBeCloseTo(1.0, 5);
    }
  });

  it("fetchNeows delegates to the module-level fetchNeows", async () => {
    const expected = makeNeowsResponse(["2025-01-01"]);
    mockFetch(() => ({ status: 200, body: expected }));

    const fetcher = new NasaDataFetcher();
    const result = await fetcher.fetchNeows(
      new Date("2025-01-01"),
      new Date("2025-01-03"),
    );
    expect(result).toEqual(expected);
  });

  it("fetchCad delegates to the module-level fetchCad", async () => {
    const expected = makeCadResponse();
    mockFetch(() => ({ status: 200, body: expected }));

    const fetcher = new NasaDataFetcher();
    const result = await fetcher.fetchCad(
      new Date("2025-01-01"),
      new Date("2025-01-07"),
    );
    expect(result).toEqual(expected);
  });
});

describe("localStorage cache", () => {
  const store: Record<string, string> = {};

  beforeEach(() => {
    // Provide a minimal localStorage stub
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => {
        store[k] = v;
      },
      removeItem: (k: string) => {
        delete store[k];
      },
    });
    // Clear store before each test
    for (const k of Object.keys(store)) delete store[k];
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("fetchNeows returns cached data without network call on cache hit", async () => {
    const expected = makeNeowsResponse(["2025-03-01"]);
    const spy = mockFetch(() => ({ status: 200, body: expected }));

    // First call — populates cache
    await fetchNeows(new Date("2025-03-01"), new Date("2025-03-07"));
    expect(spy).toHaveBeenCalledTimes(1);

    // Second call — should hit cache
    const result = await fetchNeows(
      new Date("2025-03-01"),
      new Date("2025-03-07"),
    );
    expect(spy).toHaveBeenCalledTimes(1); // no additional network call
    expect(result).toEqual(expected);
  });

  it("fetchNeows re-fetches when cached entry is expired", async () => {
    const expected = makeNeowsResponse(["2025-03-01"]);
    const spy = mockFetch(() => ({ status: 200, body: expected }));

    // Manually insert an expired cache entry (cachedAt = 2 hours ago)
    const expiredEntry = {
      data: expected,
      cachedAt: Date.now() - 2 * 3_600_000,
    };
    store["neows:2025-03-01:2025-03-07"] = JSON.stringify(expiredEntry);

    await fetchNeows(new Date("2025-03-01"), new Date("2025-03-07"));
    expect(spy).toHaveBeenCalledTimes(1); // expired cache → network call made
  });

  it("fetchCad returns cached data without network call on cache hit", async () => {
    const expected = makeCadResponse();
    const spy = mockFetch(() => ({ status: 200, body: expected }));

    await fetchCad(new Date("2025-03-01"), new Date("2025-03-07"));
    expect(spy).toHaveBeenCalledTimes(1);

    const result = await fetchCad(
      new Date("2025-03-01"),
      new Date("2025-03-07"),
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(result).toEqual(expected);
  });

  it("fetchCad re-fetches when cached entry is expired", async () => {
    const expected = makeCadResponse();
    const spy = mockFetch(() => ({ status: 200, body: expected }));

    const expiredEntry = {
      data: expected,
      cachedAt: Date.now() - 2 * 3_600_000,
    };
    store["cad:2025-03-01:2025-03-07"] = JSON.stringify(expiredEntry);

    await fetchCad(new Date("2025-03-01"), new Date("2025-03-07"));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it("silently continues when localStorage.setItem throws QuotaExceededError", async () => {
    const expected = makeNeowsResponse(["2025-03-01"]);
    mockFetch(() => ({ status: 200, body: expected }));

    vi.stubGlobal("localStorage", {
      getItem: () => null,
      setItem: () => {
        const err = new DOMException(
          "QuotaExceededError",
          "QuotaExceededError",
        );
        throw err;
      },
      removeItem: () => {},
    });

    // Should not throw — quota error is swallowed
    const result = await fetchNeows(
      new Date("2025-03-01"),
      new Date("2025-03-07"),
    );
    expect(result).toEqual(expected);
  });

  it("cache key includes function name and date range", async () => {
    const expected = makeNeowsResponse(["2025-04-01"]);
    mockFetch(() => ({ status: 200, body: expected }));

    await fetchNeows(new Date("2025-04-01"), new Date("2025-04-07"));
    expect(Object.keys(store)).toContain("neows:2025-04-01:2025-04-07");
  });
});

describe("loadSnapshot", () => {
  it("returns empty NeowsResponse when snapshot is an empty array", async () => {
    mockFetch((url) => {
      if (url.includes("neo_snapshot.json")) {
        return { status: 200, body: [] };
      }
      return { status: 500, body: {} };
    });

    const result = await loadSnapshot();
    expect(result).toEqual({ near_earth_objects: {} });
  });

  it("returns NeowsResponse as-is when snapshot is already in that shape", async () => {
    const snapshotData = makeNeowsResponse(["2025-01-01"]);
    mockFetch(() => ({ status: 200, body: snapshotData }));

    const result = await loadSnapshot();
    expect(result).toEqual(snapshotData);
  });

  it("throws when snapshot fetch fails", async () => {
    mockFetch(() => ({ status: 404, body: {} }));
    await expect(loadSnapshot()).rejects.toThrow("404");
  });
});

describe("NasaDataFetcher.fetchAndIndex", () => {
  it("calls onStatusChange('live') on successful fetch", async () => {
    const neowsData = makeNeowsResponse(["2025-01-01"]);
    const cadData = makeCadResponse();
    mockFetch((url) => {
      if (url.includes("nasa.gov")) return { status: 200, body: neowsData };
      if (url.includes("cad.api")) return { status: 200, body: cadData };
      return { status: 500, body: {} };
    });

    const statuses: FetchStatus[] = [];
    const fetcher = new NasaDataFetcher({
      onStatusChange: (s) => statuses.push(s),
    });

    await fetcher.fetchAndIndex(new Date("2025-01-01"), new Date("2025-01-07"));
    expect(statuses).toContain("live");
  });

  it("calls onStatusChange('snapshot') and loads snapshot when all fetches fail", async () => {
    mockFetch((url) => {
      if (url.includes("neo_snapshot.json")) return { status: 200, body: [] };
      return { status: 503, body: {} };
    });

    const statuses: FetchStatus[] = [];
    const fetcher = new NasaDataFetcher({
      onStatusChange: (s) => statuses.push(s),
    });

    await fetcher.fetchAndIndex(new Date("2025-01-01"), new Date("2025-01-07"));
    expect(statuses).toContain("snapshot");
  });

  it("calls onStatusChange('rate-limited') when HTTP 429 triggers fallback", async () => {
    mockFetch((url) => {
      if (url.includes("neo_snapshot.json")) return { status: 200, body: [] };
      return { status: 429, body: {} };
    });

    const statuses: FetchStatus[] = [];
    const fetcher = new NasaDataFetcher({
      onStatusChange: (s) => statuses.push(s),
    });

    await fetcher.fetchAndIndex(new Date("2025-01-01"), new Date("2025-01-07"));
    expect(statuses).toContain("rate-limited");
  });

  it("works without onStatusChange callback (no error thrown)", async () => {
    const neowsData = makeNeowsResponse(["2025-01-01"]);
    const cadData = makeCadResponse();
    mockFetch((url) => {
      if (url.includes("nasa.gov")) return { status: 200, body: neowsData };
      if (url.includes("cad.api")) return { status: 200, body: cadData };
      return { status: 500, body: {} };
    });

    const fetcher = new NasaDataFetcher();
    await expect(
      fetcher.fetchAndIndex(new Date("2025-01-01"), new Date("2025-01-07")),
    ).resolves.toBeUndefined();
  });

  it("does not throw when both API and snapshot fetch fail", async () => {
    mockFetch(() => ({ status: 503, body: {} }));
    const statuses: FetchStatus[] = [];
    const fetcher = new NasaDataFetcher({
      onStatusChange: (s) => statuses.push(s),
    });
    await expect(
      fetcher.fetchAndIndex(new Date("2025-01-01"), new Date("2025-01-07")),
    ).resolves.toBeUndefined();
    expect(statuses).toContain("snapshot");
  });
});

import * as fc from "fast-check";

describe("Property: cache TTL expiry", () => {
  const TTL_MS = 3_600_000;

  function makeLocalStorage(cachedAt: number, data: NeowsResponse) {
    const store: Record<string, string> = {
      "neows:2025-06-01:2025-06-07": JSON.stringify({ data, cachedAt }),
    };
    return {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => {
        store[k] = v;
      },
      removeItem: (k: string) => {
        delete store[k];
      },
    };
  }

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("for any elapsed time > 1 hour, fetchNeows must make a network call (cache miss)", async () => {
    const cachedData = makeNeowsResponse(["2025-06-01"]);
    const freshData = makeNeowsResponse(["2025-06-01"]);

    await fc.assert(
      fc.asyncProperty(
        fc.integer({ min: 1, max: 100 }),
        fc.integer({ min: 0, max: 59 }),
        async (hours, minutes) => {
          const cachedAt = Date.now() - (hours * TTL_MS + minutes * 60_000 + 1);
          const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            status: 200,
            json: async () => freshData,
          } as Response);

          vi.stubGlobal("localStorage", makeLocalStorage(cachedAt, cachedData));
          vi.stubGlobal("fetch", fetchMock);

          await fetchNeows(new Date("2025-06-01"), new Date("2025-06-07"));

          const callCount = fetchMock.mock.calls.length;
          vi.unstubAllGlobals();

          return callCount >= 1;
        },
      ),
    );
  });

  it("for any elapsed time < 1 hour, fetchNeows must NOT make a network call (cache hit)", async () => {
    const cachedData = makeNeowsResponse(["2025-06-01"]);

    await fc.assert(
      fc.asyncProperty(fc.integer({ min: 0, max: 59 }), async (minutes) => {
        const cachedAt = Date.now() - minutes * 60_000;
        const fetchMock = vi.fn().mockResolvedValue({
          ok: true,
          status: 200,
          json: async () => cachedData,
        } as Response);

        vi.stubGlobal("localStorage", makeLocalStorage(cachedAt, cachedData));
        vi.stubGlobal("fetch", fetchMock);

        await fetchNeows(new Date("2025-06-01"), new Date("2025-06-07"));

        const callCount = fetchMock.mock.calls.length;
        vi.unstubAllGlobals();

        return callCount === 0;
      }),
    );
  });
});

describe("Property: snapshot fallback resilience", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("for any HTTP error status, fetchAndIndex must not throw and must call onStatusChange with 'snapshot' or 'rate-limited'", async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.integer({ min: 400, max: 599 }),
        async (errorStatus) => {
          vi.stubGlobal(
            "fetch",
            vi.fn().mockImplementation(async (input: RequestInfo) => {
              const url =
                typeof input === "string" ? input : (input as Request).url;
              if (url.includes("neo_snapshot.json")) {
                return {
                  ok: true,
                  status: 200,
                  json: async () => [],
                } as Response;
              }
              return {
                ok: false,
                status: errorStatus,
                json: async () => ({}),
              } as Response;
            }),
          );

          const statuses: FetchStatus[] = [];
          const fetcher = new NasaDataFetcher({
            onStatusChange: (s) => statuses.push(s),
          });

          await fetcher.fetchAndIndex(
            new Date("2025-01-01"),
            new Date("2025-01-07"),
          );

          vi.unstubAllGlobals();

          const expectedStatus: FetchStatus =
            errorStatus === 429 ? "rate-limited" : "snapshot";
          return statuses.includes(expectedStatus);
        },
      ),
    );
  });
});
