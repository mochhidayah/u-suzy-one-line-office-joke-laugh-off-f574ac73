import { buildOfficeJoke } from "./joke.ts";
import { checkJoke } from "./guard.ts";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const line = buildOfficeJoke();
const problems = checkJoke(line);
if (problems.length > 0) {
  throw new Error(`joke failed checks: ${problems.join("; ")}`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, line, "utf8");
const roundTrip = readFileSync(OUT_FILE, "utf8");
if (roundTrip !== line) {
  throw new Error("written entry does not match the built joke");
}
console.log(`wrote ${line.length} chars to ${OUT_FILE}`);
console.log(line);
