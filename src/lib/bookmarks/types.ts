import type { Entity } from "../db/schema.js";
export interface Bookmark extends Entity { url: string; title: string; tagIds: string[]; }
