---
section: crosscutting-concepts
schema_version: 1
---
# Crosscutting Concepts

This section documents patterns and conventions that apply across multiple building blocks. Update this as patterns are established — it serves as the single source of truth for "how we do things" in arcbridge-example-bookmarks.

> **For agents:** Consult this document before implementing any crosscutting concern. If you establish a new pattern, document it here so other code follows the same approach.

## State Management

*Document the state management approach once established.*

- Global state solution (Context, Zustand, Redux, etc.)
- Server state management (React Query, SWR, etc.)
- When to use local vs. global state

## Component Patterns

*Document component conventions once established.*

- Component file structure and naming
- Props interface conventions
- Server vs. client component decision criteria
- Composition patterns (compound components, render props, etc.)

## Styling

*Document the styling approach once established.*

- Styling solution (Tailwind, CSS Modules, styled-components, etc.)
- Design tokens and theme structure
- Responsive breakpoints

## Error Handling

*Document error handling patterns once established.*

- Error boundary placement and behavior
- API error handling and user-facing messages
- Loading and empty state patterns

## Authentication

*Document the auth approach once established.*

- Auth flow (session, JWT, OAuth)
- Protected route implementation
- Auth state management

## Data Fetching

*Document data fetching patterns once established.*

- Server-side vs. client-side fetching strategy
- Caching and revalidation approach
- API client structure and conventions

## API Contract

*Document how this frontend communicates with backend services.*

- Backend API base URL and environment configuration
- How request/response types are defined (OpenAPI-generated, manual, shared package)
- Error response handling (how backend errors map to UI states)
- Authentication token flow (how auth tokens are passed to the API)
- If using OpenAPI: how to regenerate types when the backend contract changes
