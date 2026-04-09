const ALLOWED_ORIGIN = "https://anurag-as.github.io";
const JPL_BASE = "https://ssd-api.jpl.nasa.gov";
const NASA_BASE = "https://api.nasa.gov";
const MAX_NEOWS_DAYS = 7;

function formatDate(date) {
  return date.toISOString().slice(0, 10);
}

function addDays(date, days) {
  const d = new Date(date.getTime());
  d.setUTCDate(d.getUTCDate() + days);
  return d;
}

function corsResponse(body, status, contentType = "application/json") {
  return new Response(body, {
    status,
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "GET",
    },
  });
}

async function fetchNeowsChunked(startDate, endDate, apiKey) {
  const merged = { near_earth_objects: {} };
  let chunkStart = startDate;

  while (chunkStart.getTime() <= endDate.getTime()) {
    const chunkEnd = addDays(chunkStart, MAX_NEOWS_DAYS - 1);
    const actualEnd = chunkEnd < endDate ? chunkEnd : endDate;

    const url = `${NASA_BASE}/neo/rest/v1/feed?start_date=${formatDate(chunkStart)}&end_date=${formatDate(actualEnd)}&api_key=${apiKey}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.warn(`NASA chunk failed ${formatDate(chunkStart)}→${formatDate(actualEnd)}: ${res.status}, skipping`);
      chunkStart = addDays(actualEnd, 1);
      continue;
    }
    const data = await res.json();
    Object.assign(merged.near_earth_objects, data.near_earth_objects);
    chunkStart = addDays(actualEnd, 1);
  }

  return corsResponse(JSON.stringify(merged), 200);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/cad.api")) {
      const targetUrl = `${JPL_BASE}${url.pathname}${url.search}`;
      const response = await fetch(targetUrl);
      return corsResponse(await response.text(), response.status);

    } else if (url.pathname.startsWith("/neo/rest/v1/feed")) {
      const startDate = new Date(url.searchParams.get("start_date"));
      const endDate = new Date(url.searchParams.get("end_date"));
      console.log(`Fetching NEOs ${formatDate(startDate)} → ${formatDate(endDate)}`);
      return fetchNeowsChunked(startDate, endDate, env.NASA_API_KEY);

    } else {
      return new Response("Not found", { status: 404 });
    }
  },
};
