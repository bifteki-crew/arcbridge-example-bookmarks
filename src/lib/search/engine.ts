import { listBookmarks } from "../bookmarks/store.js";
import { listTags } from "../tags/store.js";
import { parseQuery } from "./query.js";
import { highlight } from "./highlight.js";
import type { Bookmark } from "../bookmarks/types.js";

export interface Hit { bookmark: Bookmark; titleHtml: string; }

export function search(raw: string): Hit[] {
  const q = parseQuery(raw);
  const knownTags = new Set(listTags().map((t) => t.id));
  return listBookmarks()
    .filter(
      (b) => b.title.toLowerCase().includes(q.text.toLowerCase()) &&
        q.tagIds.every((t) => !knownTags.has(t) || b.tagIds.includes(t)),
    )
    .map((bookmark) => ({ bookmark, titleHtml: highlight(bookmark.title, q.text) }));
}
