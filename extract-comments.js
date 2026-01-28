import fs from "fs";
import path from "path";

const ROOT = "src";
const OUTPUT = "comments.md";

// Regex to match only block comments
const BLOCK_COMMENT_REGEX = /\/\*[\s\S]*?\*\//g;

// Read existing comments (if file exists) into a Set
let existingComments = new Set();
if (fs.existsSync(OUTPUT)) {
  const content = fs.readFileSync(OUTPUT, "utf8");
  content.split("\n").forEach((line) => existingComments.add(line.trim()));
}

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (/\.(js|jsx|ts|tsx)$/.test(file)) {
      const content = fs.readFileSync(fullPath, "utf8");
      const matches = content.match(BLOCK_COMMENT_REGEX);

      if (matches) {
        // Filter out comments already in the file
        const newComments = matches
          .map((c) => c.trim())
          .filter((c) => !existingComments.has(c));

        if (newComments.length > 0) {
          // Append file header
          fs.appendFileSync(OUTPUT, `\n## 📄 ${fullPath}\n`);
          newComments.forEach((c) => fs.appendFileSync(OUTPUT, c + "\n\n"));

          // Add new comments to the Set to prevent duplicates in the same run
          newComments.forEach((c) => existingComments.add(c));
        }
      }
    }
  }
}

walk(ROOT);
console.log("✅ New block comments appended to comments.md (no duplicates)");
