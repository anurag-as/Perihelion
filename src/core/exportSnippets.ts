import type { QueryState } from "./types";

export function generateRustSnippet(query: QueryState): string {
  const [cx, cy, cz] = query.centre;
  if (query.type === "range") {
    const r = query.radiusAU ?? 0;
    return (
      `let results = index.range_query(&BBox::new(\n` +
      `  Point::new([${(cx - r).toFixed(6)}, ${(cy - r).toFixed(6)}, ${(cz - r).toFixed(6)}]),\n` +
      `  Point::new([${(cx + r).toFixed(6)}, ${(cy + r).toFixed(6)}, ${(cz + r).toFixed(6)}])\n` +
      `));`
    );
  }
  const k = query.k ?? 1;
  return (
    `let results = index.knn_query(\n` +
    `  &Point::new([${cx.toFixed(6)}, ${cy.toFixed(6)}, ${cz.toFixed(6)}]),\n` +
    `  ${k}\n` +
    `);`
  );
}

export function generatePythonSnippet(query: QueryState): string {
  const [cx, cy, cz] = query.centre;
  if (query.type === "range") {
    const r = query.radiusAU ?? 0;
    return (
      `results = index.range_query(\n` +
      `    min_point=[${(cx - r).toFixed(6)}, ${(cy - r).toFixed(6)}, ${(cz - r).toFixed(6)}],\n` +
      `    max_point=[${(cx + r).toFixed(6)}, ${(cy + r).toFixed(6)}, ${(cz + r).toFixed(6)}]\n` +
      `)`
    );
  }
  const k = query.k ?? 1;
  return (
    `results = index.knn_query(\n` +
    `    point=[${cx.toFixed(6)}, ${cy.toFixed(6)}, ${cz.toFixed(6)}],\n` +
    `    k=${k}\n` +
    `)`
  );
}

export function generateJSSnippet(query: QueryState): string {
  const [cx, cy, cz] = query.centre;
  if (query.type === "range") {
    const r = query.radiusAU ?? 0;
    return (
      `const results = index.range_query_3d(\n` +
      `  ${(cx - r).toFixed(6)}, ${(cy - r).toFixed(6)}, ${(cz - r).toFixed(6)},\n` +
      `  ${(cx + r).toFixed(6)}, ${(cy + r).toFixed(6)}, ${(cz + r).toFixed(6)}\n` +
      `);`
    );
  }
  const k = query.k ?? 1;
  return (
    `const results = index.knn_query_3d(\n` +
    `  ${cx.toFixed(6)}, ${cy.toFixed(6)}, ${cz.toFixed(6)},\n` +
    `  ${k}\n` +
    `);`
  );
}
