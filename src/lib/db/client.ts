export type Row = Record<string, unknown>;

/** In-memory key/value store standing in for a real database. */
export class Db {
  private store = new Map<string, Row>();
  get(key: string): Row | undefined { return this.store.get(key); }
  set(key: string, value: Row): void { this.store.set(key, value); }
  all(): Row[] { return [...this.store.values()]; }
  delete(key: string): void { this.store.delete(key); }
}

export const db = new Db();
