#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const SKILL_FILE = "product-discovery-strategy.skill";
const SOURCE = path.join(__dirname, "..", "skill", SKILL_FILE);
const DEST = path.join(process.cwd(), SKILL_FILE);

const green = (t) => `\x1b[32m${t}\x1b[0m`;
const bold = (t) => `\x1b[1m${t}\x1b[0m`;
const dim = (t) => `\x1b[2m${t}\x1b[0m`;
const cyan = (t) => `\x1b[36m${t}\x1b[0m`;

console.log("");
console.log(bold("  ◎ Observer Studio — Product Discovery & Strategy Skill"));
console.log(dim("  Claude.ai Skill Installer"));
console.log("");

try {
  fs.copyFileSync(SOURCE, DEST);
  console.log(green("  ✔ Skill file saved to:"), cyan(DEST));
  console.log("");
  console.log(bold("  Next steps to install in Claude.ai:"));
  console.log("");
  console.log("  1. Open", cyan("claude.ai → Settings → Skills"));
  console.log('  2. Click', bold('"Add Skill"'));
  console.log("  3. Upload", cyan(SKILL_FILE));
  console.log("");
  console.log(bold("  What this skill does:"));
  console.log("");
  console.log("  Runs structured product discovery for any project.");
  console.log("  Produces: Discovery Briefs, Research Plans, Strategy Docs,");
  console.log("  and Competitive Analysis — with built-in MENA market context,");
  console.log("  AI-native product thinking, and business model framing.");
  console.log("");
  console.log(dim("  Built by Observer Studio · observerstudio.co"));
  console.log("");
} catch (err) {
  console.error("  ✖ Failed to copy skill file:", err.message);
  process.exit(1);
}
