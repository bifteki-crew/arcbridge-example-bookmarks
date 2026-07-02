import { db } from "../db/client.js";
import { withId } from "../db/schema.js";
import type { Bookmark } from "./types.js";
export function createBookmark(url: string, title: string): Bookmark {
  const bm = withId({ url, title, tagIds: [] as string[] });
  db.set(`bookmark:${bm.id}`, bm as unknown as Record<string, unknown>);
  return bm;
}
export function listBookmarks(): Bookmark[] {
  return db.all().filter((r) => "url" in r) as unknown as Bookmark[];
}
