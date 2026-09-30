const fs = require('fs');
const https = require('https');
const path = require('path');

const allUrls = new Set();

function scanString(str) {
  const matches = str.match(/https:\/\/images\.unsplash\.com\/[^\s"'`\)]+/g);
  if (matches) {
    for (const m of matches) {
      allUrls.add(m.replace(/&amp;/g, '&'));
    }
  }
}

function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    scanString(content);
  } catch (e) {}
}

function walk(dir) {
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    if (item.name === 'node_modules' || item.name === '.next' || item.name === '.git') continue;
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      walk(full);
    } else if (item.name.endsWith('.json') || item.name.endsWith('.ts') || item.name.endsWith('.tsx') || item.name.endsWith('.js')) {
      scanFile(full);
    }
  }
}

walk('.');
console.log('Found unique Unsplash URLs across entire repo:', allUrls.size);

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      resolve({ url, status: res.statusCode });
    }).on('error', (err) => {
      resolve({ url, status: 'ERROR: ' + err.message });
    });
  });
}

async function run() {
  const results = [];
  const entries = Array.from(allUrls);
  console.log('Testing all URLs with HTTPS GET...');
  for (const url of entries) {
    const res = await checkUrl(url);
    results.push(res);
  }
  const failed = results.filter(r => r.status !== 200);
  console.log(`Summary: ${results.length - failed.length}/${results.length} URLs returned 200 OK.`);
  if (failed.length > 0) {
    console.log('Failed URLs (' + failed.length + '):');
    for (const f of failed) {
      console.log(`[${f.status}] ${f.url}`);
    }
  } else {
    console.log('ALL URLs RETURNED 200 OK!');
  }
}

run();
