import { BookmarkList } from "../components/BookmarkList.js";
import { SearchBar } from "../components/SearchBar.js";
import { TagFilter } from "../components/TagFilter.js";
export default function Home() {
  return <main><SearchBar onQuery={() => {}} /><TagFilter /><BookmarkList /></main>;
}
