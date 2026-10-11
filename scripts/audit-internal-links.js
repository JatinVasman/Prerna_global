const fs = require('fs');
const path = require('path');

function scanDir(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (!full.includes('node_modules') && !full.includes('.next')) {
        scanDir(full, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(full);
    }
  }
  return fileList;
}

const files = [...scanDir('./app'), ...scanDir('./components'), ...scanDir('./data')];
const dynamicPatterns = [];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /href=\{`([^`]+)`\}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    dynamicPatterns.push({
      file: path.relative(process.cwd(), file),
      pattern: match[1],
    });
  }
}

console.log('=== DYNAMIC HREF TEMPLATES ===');
for (const p of dynamicPatterns) {
  console.log(`${p.pattern} in ${p.file}`);
}
