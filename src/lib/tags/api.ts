import { createTag, listTags } from "./store.js";
import type { Tag } from "./types.js";
export function getTags(): Tag[] { return listTags(); }
export function addTag(name: string): Tag { return createTag(name); }
