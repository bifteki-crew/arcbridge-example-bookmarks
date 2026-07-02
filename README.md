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
