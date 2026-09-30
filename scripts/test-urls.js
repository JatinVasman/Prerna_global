const fs = require('fs');

const script = fs.readFileSync('scripts/assign-blog-images.js', 'utf8');
const urls = [...new Set(script.match(/https:\/\/images\.unsplash\.com\/[^'" \n]+/g) || [])];

console.log('Testing', urls.length, 'Unsplash URLs...');

async function run() {
  const bad = [];
  const good = [];

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      if (res.status === 200) {
        good.push(url);
      } else {
        bad.push({ status: res.status, url });
      }
    } catch (e) {
      bad.push({ status: 'ERR: ' + e.message, url });
    }
  }

  console.log('Good URLs:', good.length);
  console.log('Bad URLs:', bad.length);
  bad.forEach(b => console.log('FAILED:', b.status, b.url));
}

run();
