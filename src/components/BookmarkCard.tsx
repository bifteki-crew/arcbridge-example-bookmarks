import type { Bookmark } from "../lib/bookmarks/types.js";
export function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return <a href={bookmark.url}>{bookmark.title}</a>;
}
