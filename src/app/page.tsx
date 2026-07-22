import { BookmarkList } from "../components/BookmarkList.js";
import { BookmarkManager } from "../components/BookmarkManager.js";
import { SearchBar } from "../components/SearchBar.js";
import { TagFilter } from "../components/TagFilter.js";
export default function Home() {
  return <main><SearchBar onQuery={() => {}} /><TagFilter /><BookmarkManager /><BookmarkList /></main>;
}
