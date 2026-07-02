import { getBookmarks, addBookmark } from "../../../lib/bookmarks/api.js";
export function GET() { return Response.json(getBookmarks()); }
export async function POST(req: Request) {
  const { url, title } = await req.json();
  return Response.json(addBookmark(url, title));
}
