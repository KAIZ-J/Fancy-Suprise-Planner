// Regenerates manifest.json from whatever image files are sitting
// in this folder. Run with: node build-manifest.js
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

const files = fs
  .readdirSync(dir)
  .filter((name) => exts.has(path.extname(name).toLowerCase()))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(files, null, 2) + '\n');

console.log(`manifest.json updated with ${files.length} photo(s):`);
files.forEach((f) => console.log('  -', f));
