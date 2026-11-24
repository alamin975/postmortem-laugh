import * as fs from "node:fs";
import * as path from "node:path";

// The entry line below must stay byte-for-byte (single line, no trailing newline).
// Two sentences, inside the 1–400 char gate.
const LINE =
  "Root cause: the system worked exactly as designed, and the design was the bug. We have scheduled a meeting about it.";

function writeEntry(): void {
  const outDir = "/output";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, { encoding: "utf8" });
}

writeEntry();
