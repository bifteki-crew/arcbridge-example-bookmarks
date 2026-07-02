import { db } from "./client.js";
export function seed(): void {
  db.set("meta:version", { version: 1 });
}
