import { search } from "../lib/search/engine.js";
export function SearchBar({ onQuery }: { onQuery: (q: string) => void }) {
  return <input onChange={(e) => { search(e.target.value); onQuery(e.target.value); }} />;
}
