# Perihelion — Near-Earth Object Tracker

A browser-based 3D visualiser for asteroids, comets, and meteor shower radiants. Fetches live data from NASA's NeoWs and JPL Close Approach APIs, indexes objects spatially using [Bonsai](https://github.com/anurag-as/bonsai) compiled to WASM, and renders an interactive solar system scene with Three.js — entirely client-side, no server required.

***Check out the [blog](https://medium.com/@sampathanurag3/perihelion-visualising-near-earth-asteroids-with-a-rust-spatial-index-that-thinks-for-itself-38ea1fe1c350) and play around [Perihelion](https://anurag-as.github.io/Perihelion/).***

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Rust](https://rustup.rs/) + [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Setup

```bash
cd perihelion
npm install
```

## Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:5173`.

The WASM spatial index is optional for initial development — the scene renders from the bundled snapshot without it. To build the WASM module:

```bash
cd perihelion/src/wasm
wasm-pack build --target web --out-dir ../wasm/pkg
```

Or from the `perihelion/` root:

```bash
npm run wasm:build
```

## Testing

```bash
npm test
```

Runs Vitest in single-pass mode (no watch).

## Build

```bash
npm run build
```

Outputs a fully static site to `perihelion/dist/`. Deployable to GitHub Pages or any static host.

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `VITE_NASA_API_KEY` | `DEMO_KEY` | NASA API key for NeoWs and JPL CAD requests |

Create a `.env` file in `perihelion/` to set these locally:

```
VITE_NASA_API_KEY=your_key_here
```

## Credits

- Planet and Sun textures by [Solar System Scope](https://www.solarsystemscope.com/textures/) — licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Served via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Solarsystemscope_texture_2k_earth_daymap.jpg).
- NEO data from [NASA NeoWs](https://api.nasa.gov/) and [JPL Close Approach](https://ssd-api.jpl.nasa.gov/doc/cad.html) APIs.
