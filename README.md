# arcbridge-example-bookmarks

A tiny Next.js **bookmark manager** used as a worked example of adopting
[ArcBridge](https://github.com/bifteki-crew/arcbridge) on an existing codebase.

The app itself is deliberately small — the interesting part is the committed
[`.arcbridge/`](.arcbridge) directory, which gives an AI coding agent an
architectural model of the project.

## How the model was created

The building blocks in [`.arcbridge/arc42/05-building-blocks.md`](.arcbridge/arc42/05-building-blocks.md)
were **reverse-engineered from the source** with one command:

```bash
arcbridge init          # scaffold .arcbridge/ (Next.js template)
arcbridge adopt --apply # replace the template blocks with ones derived from the code
```

`adopt` clustered `src/` by directory and derived each block's dependencies
(`interfaces`) from the real import graph:

| Block | Code | Depends on |
|-------|------|------------|
| `bookmarks` | `src/lib/bookmarks/` | `db` |
| `tags` | `src/lib/tags/` | `db` |
| `search` | `src/lib/search/` | `bookmarks`, `tags` |
| `db` | `src/lib/db/` | — |
| `components` | `src/components/` | `bookmarks`, `tags`, `search` |
| `app` | `src/app/` | `bookmarks`, `components`, `tags` |

The auto-generated responsibilities were then refined by hand (the intended
workflow) and committed. Every indexed file maps to a block, so:

```bash
arcbridge drift --reindex   # No drift detected.
```

## Try it

```bash
git clone https://github.com/bifteki-crew/arcbridge-example-bookmarks
cd arcbridge-example-bookmarks
npx arcbridge drift --reindex     # reindex + check the architecture holds
npx arcbridge adopt               # see the proposal regenerated from the code
```

Point your MCP-compatible agent (Claude Code, Copilot, Codex, Gemini, OpenCode)
at this directory and it can query the building blocks, quality scenarios, and
plan. See the [ArcBridge README](https://github.com/bifteki-crew/arcbridge) and
the [adoption guide](https://github.com/bifteki-crew/arcbridge/blob/main/docs/adopting-existing-codebases.md).

## Cross-boundary contract checks

The app's UI talks to its own API routes over HTTP: the browser clients in
[`src/lib/bookmarks/client.ts`](src/lib/bookmarks/client.ts) and
[`src/lib/tags/client.ts`](src/lib/tags/client.ts) `fetch()` the routes in
[`src/app/api/`](src/app/api). ArcBridge indexes both halves — the outbound
`fetch` **call sites** and the exposed **routes** — and checks that every call
hits an endpoint (and method) the app actually serves. On `main` they line up:

```bash
npx arcbridge drift --reindex   # No drift detected.
```

Break the contract and it's caught. Change the bookmarks client to call a URL
or method the route doesn't expose:

```ts
// src/lib/bookmarks/client.ts
export async function fetchBookmarks(): Promise<Bookmark[]> {
  const res = await fetch("/api/bookmark");   // typo — route is /api/bookmarks
  return res.json();
}
```

```bash
npx arcbridge drift --reindex
# Found 1 drift issue(s):
#   [WARN]  contract_violation: `src/lib/bookmarks/client.ts` calls
#           `GET /api/bookmark` but no indexed service exposes that endpoint.
```

Or call a method the endpoint doesn't allow:

```ts
await fetch("/api/bookmarks", { method: "DELETE" });   // route serves GET, POST
# → contract_violation: calls `DELETE /api/bookmarks` but the endpoint only allows GET, POST.
```

Open that change as a PR and the [Architecture workflow](.github/workflows/architecture.yml)
posts the finding as a sticky comment — the break is caught in review, before it
ships. In a monorepo the same check spans **separate** frontend and backend
services (e.g. a Next.js app calling an ASP.NET/FastAPI/Gin API), where a
renamed or removed endpoint would otherwise only surface at runtime.

> Requires ArcBridge **≥ 0.12.0** (contract checks). The workflow tracks the
> latest published CLI.
