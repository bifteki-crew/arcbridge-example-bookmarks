---
description: "Run the ArcBridge architecture sync loop — detect drift, infer task status, and propose arc42 updates"
---

# ArcBridge Sync

This skill runs when a phase is completed. You can also invoke it manually.

## Steps

1. First, call `arcbridge_check_drift` to detect any architecture drift
2. Call `arcbridge_get_current_tasks` to see the current phase progress
3. Call `arcbridge_propose_arc42_update` with `changes_since: "last-sync"` to generate update proposals
4. Present the proposals to the developer for review
5. If the developer approves, update the relevant arc42 files and run `arcbridge_reindex`

## When to Run

- After completing a set of related changes
- Before marking a phase as complete
- When switching context to a different building block
- At the end of a coding session (if configured)

## Quick Check

If you just want a quick status without full proposals:
1. Call `arcbridge_get_project_status` for an overview
2. Call `arcbridge_get_open_questions` to see gaps
