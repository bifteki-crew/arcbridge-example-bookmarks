/** Wrap matches of `term` in the text with <mark> tags for display. */
export function highlight(text: string, term: string): string {
  if (!term) return text;
  const re = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(re, "<mark>$1</mark>");
}
