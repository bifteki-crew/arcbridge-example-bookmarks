import { getTags, addTag } from "../../../lib/tags/api.js";
export function GET() { return Response.json(getTags()); }
export async function POST(req: Request) {
  const { name } = await req.json();
  return Response.json(addTag(name));
}
