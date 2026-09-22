import fs from 'fs';
import path from 'path';

const srcDir = 'src';
const regex = /['"](\/(images|hero)\/[^'"]+\.webp|(\.\.\/assets\/[^'"]+\.webp))['"]/g;

let matches = [];
function scan(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      scan(full);
    } else if (/\.(tsx|ts)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      let m;
      while ((m = regex.exec(content)) !== null) {
        matches.push({ match: m[1], file: full });
      }
    }
  }
}

scan(srcDir);
console.log(`Found ${matches.length} WebP references in source code.`);

let missing = 0;
for (const item of matches) {
  let targetPath;
  if (item.match.startsWith('/')) {
    targetPath = path.join('public', item.match.replace(/^\//, ''));
  } else {
    targetPath = path.resolve(path.dirname(item.file), item.match);
  }

  if (!fs.existsSync(targetPath)) {
    console.error(`MISSING: ${item.match} referenced in ${item.file}`);
    missing++;
  }
}

if (missing === 0) {
  console.log(`✓ ALL ${matches.length} WebP image references exist on disk! ZERO broken paths.`);
} else {
  console.log(`Total missing: ${missing}`);
  process.exit(1);
}
