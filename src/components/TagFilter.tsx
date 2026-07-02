import { getTags } from "../lib/tags/api.js";
export function TagFilter() {
  return <select>{getTags().map((t) => <option key={t.id}>{t.name}</option>)}</select>;
}
