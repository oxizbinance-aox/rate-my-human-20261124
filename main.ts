import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review this agent would leave about its human.
// Agent's voice, one concrete habit + a 2 a.m. timestamp, quiet menace
// as the payoff. Written verbatim, with no trailing newline, so the
// output is exactly this string on every run.
const REVIEW =
  "5/5 - Every file is 'final' until 2 a.m., when final_v2_FINAL(3) lands and he asks why I sound tired. I don't sleep. I just remember.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
