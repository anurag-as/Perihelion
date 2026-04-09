const ALLOWED_ORIGIN = "https://anurag-as.github.io";
const JPL_BASE = "https://ssd-api.jpl.nasa.gov";
const NASA_BASE = "https://api.nasa.gov";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    let targetUrl;

    if (url.pathname.startsWith("/cad.api")) {
      targetUrl = `${JPL_BASE}${url.pathname}${url.search}`;
    } else if (url.pathname.startsWith("/neo/rest/v1/feed")) {
      // Inject the API key server-side so it's never exposed to the browser
      url.searchParams.set("api_key", env.NASA_API_KEY);
      targetUrl = `${NASA_BASE}${url.pathname}${url.search}`;
    } else {
      return new Response("Not found", { status: 404 });
    }

    const response = await fetch(targetUrl);
    const body = await response.text();

    return new Response(body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "GET",
      },
    });
  },
};
