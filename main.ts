// Say What Actually Broke — entry program (Node 22 stdlib only, no network).
// Writes one single-line error message (<= 200 chars) to /output/entry.txt.
// Deterministic: the text is a fixed literal, no randomness, no external input.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "We deleted the production database. The backup was stored in the production database. Please hold while we update our résumés.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
