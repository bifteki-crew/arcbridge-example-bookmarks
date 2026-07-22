import type { Bookmark } from "./types.js";

// Browser-side client for the bookmarks API route (src/app/api/bookmarks/route.ts).
// These fetch call sites are the *consumer* half of an endpoint contract —
// ArcBridge matches them against the routes the app exposes and flags a
// contract_violation if a call hits an endpoint or method that doesn't exist.

export async function fetchBookmarks(): Promise<Bookmark[]> {
  const res = await fetch("/api/bookmarks");
  return res.json();
}

export async function createBookmark(url: string, title: string): Promise<Bookmark> {
  const res = await fetch("/api/bookmarks", {
    method: "POST",
    body: JSON.stringify({ url, title }),
  });
  return res.json();
}
