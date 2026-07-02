export interface Query { text: string; tagIds: string[]; }
export function parseQuery(raw: string): Query {
  const tagIds = [...raw.matchAll(/#(\w+)/g)].map((m) => m[1]!);
  return { text: raw.replace(/#\w+/g, "").trim(), tagIds };
}
