import { createBookmark, listBookmarks } from "./store.js";
import type { Bookmark } from "./types.js";
export function getBookmarks(): Bookmark[] { return listBookmarks(); }
export function addBookmark(url: string, title: string): Bookmark { return createBookmark(url, title); }
