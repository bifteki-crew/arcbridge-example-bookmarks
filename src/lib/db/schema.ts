export interface Entity { id: string; createdAt: string; }
export function withId<T extends object>(e: T): T & Entity {
  return { ...e, id: crypto.randomUUID(), createdAt: new Date().toISOString() };
}
