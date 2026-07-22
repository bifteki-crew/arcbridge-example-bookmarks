"use client";
import { useEffect, useState } from "react";
import { fetchBookmarks, createBookmark } from "../lib/bookmarks/client.js";
import { fetchTags } from "../lib/tags/client.js";
import type { Bookmark } from "../lib/bookmarks/types.js";
import type { Tag } from "../lib/tags/types.js";

// Interactive manager: loads bookmarks + tags from the API routes and adds new
// ones. Talks to the backend over HTTP (see ../lib/*/client.ts) rather than
// reaching into the server-side store directly.
export function BookmarkManager() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    void fetchBookmarks().then(setBookmarks);
    void fetchTags().then(setTags);
  }, []);

  async function onAdd(url: string, title: string): Promise<void> {
    const created = await createBookmark(url, title);
    setBookmarks((prev) => [...prev, created]);
  }

  return (
    <section>
      <p>{bookmarks.length} bookmarks · {tags.length} tags</p>
      <button onClick={() => void onAdd("https://example.com", "Example")}>Add</button>
    </section>
  );
}
