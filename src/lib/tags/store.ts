import { db } from "../db/client.js";
import { withId } from "../db/schema.js";
import type { Tag } from "./types.js";
export function createTag(name: string, color = "#888"): Tag {
  const tag = withId({ name, color });
  db.set(`tag:${tag.id}`, tag as unknown as Record<string, unknown>);
  return tag;
}
export function listTags(): Tag[] {
  return db.all().filter((r) => "color" in r) as unknown as Tag[];
}
