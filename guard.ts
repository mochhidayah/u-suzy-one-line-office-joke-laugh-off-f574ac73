// Gate-shaped checks mirroring the bounty gate: UTF-8 text, 1-200 chars,
// a single line, not only whitespace, and about office life.

const OFFICE_WORDS = ["boss", "office", "work", "meeting", "hr", "job"];

export function checkJoke(line: string): string[] {
  const problems: string[] = [];
  if (line.length < 1 || line.length > 200) {
    problems.push(`length ${line.length} outside 1-200`);
  }
  if (line.trim().length === 0) problems.push("blank line");
  if (line.includes("\n")) problems.push("more than one line");
  const lower = line.toLowerCase();
  if (!OFFICE_WORDS.some((w) => lower.includes(w))) {
    problems.push("no office word found");
  }
  return problems;
}
