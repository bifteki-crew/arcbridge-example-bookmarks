import type { Tag } from "./types.js";

// Browser-side client for the tags API route (src/app/api/tags/route.ts).
export async function fetchTags(): Promise<Tag[]> {
  const res = await fetch("/api/tags");
  return res.json();
}

export async function createTag(name: string): Promise<Tag> {
  const res = await fetch("/api/tags", {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  return res.json();
}
