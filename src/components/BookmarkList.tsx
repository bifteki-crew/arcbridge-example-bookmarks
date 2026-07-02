import { getBookmarks } from "../lib/bookmarks/api.js";
import { BookmarkCard } from "./BookmarkCard.js";
export function BookmarkList() {
  return <ul>{getBookmarks().map((b) => <li key={b.id}><BookmarkCard bookmark={b} /></li>)}</ul>;
}
