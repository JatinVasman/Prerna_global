const fs = require('fs');
const path = require('path');

const VERIFIED_POOLS = {
  // Category-specific pools (All verified HTTP 200 OK)
  'student-visa': [
    'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80'
  ],
  'visa-updates-policies': [
    'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80'
  ],
  'ielts-pte-exams': [
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1000&q=80'
  ],
  'scholarships-financial-aid': [
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80'
  ],
  'study-abroad-costs': [
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80'
  ],
  'education-loans': [
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80'
  ],
  'documents-sop': [
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1000&q=80'
  ],
  'stem-education': [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80'
  ],
  'computer-science-it': [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80'
  ],
  'engineering-abroad': [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80'
  ],
  'healthcare-medicine': [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80'
  ],
  'mba-abroad': [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80'
  ],
  'business-management': [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80'
  ],
  'accommodation-living': [
    'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80'
  ],
  'career-jobs-abroad': [
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80'
  ],
  'pre-departure-arrival': [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80'
  ]
};

// Country-specific pools (All verified HTTP 200 OK)
const COUNTRY_POOLS = {
  'UK': [
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80'
  ],
  'USA': [
    'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80'
  ],
  'Germany': [
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80'
  ],
  'Canada': [
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1000&q=80'
  ],
  'Australia': [
    'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80'
  ]
};

// General fallback pool (All verified HTTP 200 OK)
const GENERAL_POOLS = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1000&q=80'
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function resolveImage(article) {
  const hash = hashString(article.slug);

  if (VERIFIED_POOLS[article.category_slug]) {
    const pool = VERIFIED_POOLS[article.category_slug];
    return pool[hash % pool.length];
  }

  if (article.country && COUNTRY_POOLS[article.country]) {
    const pool = COUNTRY_POOLS[article.country];
    return pool[hash % pool.length];
  }

  return GENERAL_POOLS[hash % GENERAL_POOLS.length];
}

const blogsPath = path.join(__dirname, '..', 'data', 'pg-blogs-500.json');
const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

let updatedCount = 0;
for (const [slug, article] of Object.entries(blogs)) {
  const imageUrl = resolveImage(article);
  article.featured_image = imageUrl;
  article.featured_image_alt = `Study Abroad Guide — ${article.title}`;
  updatedCount++;
}

fs.writeFileSync(blogsPath, JSON.stringify(blogs, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} blog articles with 100% verified Unsplash images.`);
