---
section: context
schema_version: 1
---
# System Scope and Context

## Business Context

arcbridge-example-bookmarks interacts with the following external systems and actors:

| Neighbor | Description | Interface |
|----------|-------------|-----------|
| End User | Application user | Browser / HTTP |
| *External API* | *Describe external dependencies* | *REST / GraphQL* |

## Technical Context

```
[Browser] --HTTP/HTTPS--> [arcbridge-example-bookmarks] --API--> [External Services]
```

### Technology Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Runtime:** Node.js
