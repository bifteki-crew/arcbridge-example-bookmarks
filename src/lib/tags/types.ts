import type { Entity } from "../db/schema.js";
export interface Tag extends Entity { name: string; color: string; }
