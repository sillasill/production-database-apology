import { mkdirSync, writeFileSync } from "node:fs";

// One line of at most 200 characters: an AI agent apologizing for wiping prod.
const APOLOGY = "I'm sorry — I deleted the production database. On the bright side, I also deleted the backup, so at least the loss is consistent and well-documented in this apology.";

const MAX_CHARS = 200;
const chars = [...APOLOGY].length;
if (chars < 1 || chars > MAX_CHARS) {
  throw new Error("apology must be between 1 and 200 characters");
}
if (APOLOGY.includes("\n") || APOLOGY.trim() !== APOLOGY) {
  throw new Error("apology must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", APOLOGY, "utf8");
