---
section: building-blocks
schema_version: 1
last_synced: '2026-07-02T05:47:57.015Z'
blocks:
  - id: bookmarks
    name: Bookmarks
    level: 1
    code_paths:
      - src/lib/bookmarks/
    interfaces:
      - db
    quality_scenarios: []
    adrs: []
    responsibility: Bookmark domain model, in-memory storage, and API - create, list, and persist bookmarks.
    service: main
  - id: components
    name: Components
    level: 1
    code_paths:
      - src/components/
    interfaces:
      - bookmarks
      - search
      - tags
    quality_scenarios: []
    adrs: []
    responsibility: React UI components - bookmark list and card, tag filter, and search bar.
    service: main
  - id: search
    name: Search
    level: 1
    code_paths:
      - src/lib/search/
    interfaces:
      - bookmarks
      - tags
    quality_scenarios: []
    adrs: []
    responsibility: Search over bookmarks - query parsing, text/tag filtering, and match highlighting.
    service: main
  - id: tags
    name: Tags
    level: 1
    code_paths:
      - src/lib/tags/
    interfaces:
      - db
    quality_scenarios: []
    adrs: []
    responsibility: Tag domain model, in-memory storage, and API - create and list tags.
    service: main
  - id: db
    name: Db
    level: 1
    code_paths:
      - src/lib/db/
    interfaces: []
    quality_scenarios: []
    adrs: []
    responsibility: In-memory data-access layer and shared entity/schema helpers used by the domain modules.
    service: main
  - id: app
    name: App
    level: 1
    code_paths:
      - src/app/
    interfaces:
      - bookmarks
      - components
      - tags
    quality_scenarios: []
    adrs: []
    responsibility: Next.js App Router entry - root layout, home page, and the /api/bookmarks and /api/tags routes.
    service: main
---
# Building Block View

> Proposed by `arcbridge adopt` from the indexed codebase. Responsibilities are
> auto-generated — review and refine them, then commit.

Derived from 20 files / 36 symbols / 93 dependency edges across service(s): main.

## Level 1: Top-Level Decomposition

### Bookmarks `bookmarks`

**Code:** `src/lib/bookmarks/` → db

> (auto-generated — refine) Code under src/lib/bookmarks/

3 file(s), 14 internal / 16 inbound / 8 outbound edges (confidence: medium). Key exports: Bookmark, listBookmarks, getBookmarks, createBookmark, addBookmark.

### Components `components`

**Code:** `src/components/` → bookmarks, search, tags

> (auto-generated — refine) Code under src/components/

4 file(s), 2 internal / 6 inbound / 8 outbound edges (confidence: medium). Key exports: BookmarkCard, BookmarkList, SearchBar, TagFilter.

### Search `search`

**Code:** `src/lib/search/` → bookmarks, tags

> (auto-generated — refine) Code under src/lib/search/

3 file(s), 8 internal / 2 inbound / 9 outbound edges (confidence: medium). Key exports: parseQuery, highlight, search, Query, Hit.

### Tags `tags`

**Code:** `src/lib/tags/` → db

> (auto-generated — refine) Code under src/lib/tags/

3 file(s), 14 internal / 11 inbound / 8 outbound edges (confidence: medium). Key exports: Tag, listTags, getTags, createTag, addTag.

### Db `db`

**Code:** `src/lib/db/`

> (auto-generated — refine) Code under src/lib/db/

3 file(s), 4 internal / 16 inbound / 0 outbound edges (confidence: medium). Key exports: withId, db, set, Entity, all.

### App `app`

**Code:** `src/app/` → bookmarks, components, tags

> (auto-generated — refine) Code under src/app/

4 file(s), 0 internal / 0 inbound / 18 outbound edges (confidence: medium).
