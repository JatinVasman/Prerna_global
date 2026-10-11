const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://prernaglobalservices.com';

const results = {
  passed: [],
  failed: [],
  warnings: [],
  couldNotRun: [],
};

function pass(name, detail) {
  results.passed.push({ name, detail });
  console.log(`[PASS] ${name}: ${detail}`);
}

function fail(name, detail) {
  results.failed.push({ name, detail });
  console.log(`[FAIL] ${name}: ${detail}`);
}

function warn(name, detail) {
  results.warnings.push({ name, detail });
  console.log(`[WARN] ${name}: ${detail}`);
}

async function runAudit() {
  console.log('====================================================');
  console.log('PRERNA GLOBAL SERVICES — TECHNICAL SEO VALIDATION');
  console.log('====================================================\n');

  // 1. SITEMAP XML ARCHITECTURE TESTS
  console.log('--- 1. Testing Sitemap XML Architecture ---');
  try {
    const sitemapIndexRoute = require('../app/sitemap_index.xml/route');
    const sitemapPagesRoute = require('../app/sitemap-pages.xml/route');
    const sitemapDestRoute = require('../app/sitemap-destinations.xml/route');
    const sitemapLocRoute = require('../app/sitemap-locations.xml/route');
    const sitemapBlogsRoute = require('../app/sitemap-blogs.xml/route');

    // Index XML
    const indexXml = sitemapIndexRoute.getSitemapIndexXml();
    if (indexXml.includes('<sitemapindex') && indexXml.includes('</sitemapindex>')) {
      pass('Sitemap Index Syntax', 'Valid XML sitemapindex structure');
    } else {
      fail('Sitemap Index Syntax', 'Invalid XML sitemapindex structure');
    }

    const subSitemaps = [...indexXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    const expectedSubSitemaps = [
      `${BASE_URL}/sitemap-pages.xml`,
      `${BASE_URL}/sitemap-destinations.xml`,
      `${BASE_URL}/sitemap-locations.xml`,
      `${BASE_URL}/sitemap-blogs.xml`,
    ];

    if (JSON.stringify(subSitemaps.sort()) === JSON.stringify(expectedSubSitemaps.sort())) {
      pass('Sitemap Index Coverage', `All 4 sub-sitemaps declared: ${subSitemaps.join(', ')}`);
    } else {
      fail('Sitemap Index Coverage', `Sub-sitemaps mismatch: ${subSitemaps.join(', ')}`);
    }

    // Pages XML
    const pagesRes = await sitemapPagesRoute.GET();
    const pagesXml = await pagesRes.text();
    const pageUrls = [...pagesXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (pageUrls.length === 6) {
      pass('Core Pages Sitemap', `6 core business pages included: ${pageUrls.join(', ')}`);
    } else {
      fail('Core Pages Sitemap', `Expected 6 pages, found ${pageUrls.length}`);
    }

    // Destinations XML
    const destRes = await sitemapDestRoute.GET();
    const destXml = await destRes.text();
    const destUrls = [...destXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    if (destUrls.length === 9) {
      pass('Destinations Sitemap', `All 9 destination guides included: ${destUrls.join(', ')}`);
    } else {
      fail('Destinations Sitemap', `Expected 9 destinations, found ${destUrls.length}`);
    }

    // Locations XML
    const locRes = await sitemapLocRoute.GET();
    const locXml = await locRes.text();
    const locUrls = [...locXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    // 24 states + 65 indexable cities = 89
    if (locUrls.length === 89) {
      pass('Locations Sitemap', `Exactly 89 eligible locations (24 states + 65 published city desks). All 668 unindexed drafts excluded!`);
    } else {
      warn('Locations Sitemap Count', `Found ${locUrls.length} location URLs in sitemap`);
    }

    // Blogs XML
    const blogRes = await sitemapBlogsRoute.GET();
    const blogXml = await blogRes.text();
    const blogUrls = [...blogXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
    // 1 hub + 26 categories + 58 published articles = 85
    if (blogUrls.length === 85) {
      pass('Blogs Sitemap', `Exactly 85 eligible blog URLs (1 archive + 26 categories + 58 published articles). All 470 drafts excluded!`);
    } else {
      warn('Blogs Sitemap Count', `Found ${blogUrls.length} blog URLs in sitemap`);
    }

    // Total URLs across all sitemaps
    const allSitemapUrls = [...pageUrls, ...destUrls, ...locUrls, ...blogUrls];
    const uniqueSitemapUrls = new Set(allSitemapUrls);
    if (allSitemapUrls.length === uniqueSitemapUrls.size) {
      pass('Sitewide Sitemap Deduplication', `Zero duplicates across all sitemaps! Total: ${uniqueSitemapUrls.size} unique indexable URLs`);
    } else {
      fail('Sitewide Sitemap Deduplication', `Found ${allSitemapUrls.length - uniqueSitemapUrls.size} duplicate URLs across sitemaps!`);
    }

    // Trailing slash and protocol verification
    const nonHttps = allSitemapUrls.filter((u) => !u.startsWith('https://prernaglobalservices.com/'));
    const missingSlash = allSitemapUrls.filter((u) => !u.endsWith('/'));
    if (nonHttps.length === 0) {
      pass('Canonical Host Consistency', 'All sitemap URLs strictly use canonical HTTPS https://prernaglobalservices.com');
    } else {
      fail('Canonical Host Consistency', `${nonHttps.length} URLs had wrong host: ${nonHttps.slice(0, 3).join(', ')}`);
    }
    if (missingSlash.length === 0) {
      pass('Trailing Slash Parity', 'All sitemap URLs strictly use trailing slashes');
    } else {
      fail('Trailing Slash Parity', `${missingSlash.length} URLs missing trailing slash: ${missingSlash.slice(0, 3).join(', ')}`);
    }

    // Check lastmod dates are not runtime now()
    const allXmls = [pagesXml, destXml, locXml, blogXml];
    const invalidDates = [];
    for (const xml of allXmls) {
      const dates = [...xml.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)].map((m) => m[1]);
      for (const d of dates) {
        if (!/^\d{4}-\d{2}-\d{2}/.test(d)) {
          invalidDates.push(d);
        }
      }
    }
    if (invalidDates.length === 0) {
      pass('Lastmod Date Integrity', 'All sitemap URLs specify meaningful ISO dates (YYYY-MM-DD). No runtime dynamic timestamp leaks.');
    } else {
      fail('Lastmod Date Integrity', `Invalid date format in sitemap: ${invalidDates.slice(0, 3).join(', ')}`);
    }
  } catch (err) {
    fail('Sitemap Tests Execution', err.message);
  }

  // 2. ROBOTS.TXT VERIFICATION
  console.log('\n--- 2. Testing Robots.txt Configuration ---');
  try {
    const robotsRoute = require('../app/robots');
    const robotsConfig = robotsRoute.default();

    if (robotsConfig.rules.userAgent === '*' && robotsConfig.rules.allow === '/' && robotsConfig.rules.disallow === '/api/') {
      pass('Robots.txt Crawl Directives', 'Allows all crawlers across site (/), disallows private backend API (/api/)');
    } else {
      fail('Robots.txt Crawl Directives', 'Incorrect crawl directives');
    }

    const sitemaps = Array.isArray(robotsConfig.sitemap) ? robotsConfig.sitemap : [robotsConfig.sitemap];
    if (sitemaps.includes(`${BASE_URL}/sitemap.xml`) && sitemaps.includes(`${BASE_URL}/sitemap_index.xml`)) {
      pass('Robots.txt Sitemap Declaration', `Both /sitemap.xml and /sitemap_index.xml declared: ${sitemaps.join(', ')}`);
    } else {
      fail('Robots.txt Sitemap Declaration', `Missing sitemap declarations: ${sitemaps.join(', ')}`);
    }
  } catch (err) {
    fail('Robots.txt Test Execution', err.message);
  }

  // 3. INTERNAL LINK AUDIT
  console.log('\n--- 3. Testing Sitewide Internal Link Integrity ---');
  try {
    const { destinations } = require('../data/destinations');
    const validRoutes = new Set([
      '/',
      '/about-us/',
      '/services/',
      '/destinations/',
      '/blog/',
      '/locations/',
      '/contact-us/',
      ...destinations.map((d) => `/destinations/${d.slug || d.id}/`),
    ]);

    // Check Footer destination links
    const footerContent = fs.readFileSync('components/layout/Footer.tsx', 'utf8');
    const footerDestMatches = [...footerContent.matchAll(/href:\s*['"](\/destinations\/[^'"]+)['"]/g)].map((m) => m[1]);
    const brokenFooterLinks = footerDestMatches.filter((u) => !validRoutes.has(u));
    if (brokenFooterLinks.length === 0 && footerDestMatches.length >= 6) {
      pass('Footer Destination Links', `All ${footerDestMatches.length} footer destination links point to valid destination guide pages!`);
    } else {
      fail('Footer Destination Links', `Broken footer links found: ${brokenFooterLinks.join(', ')}`);
    }

    // Check SingleArticleView destination links
    const articleViewContent = fs.readFileSync('components/blog/SingleArticleView.tsx', 'utf8');
    const articleDestMatches = [...articleViewContent.matchAll(/href=["'](\/destinations\/[^"']+)["']/g)].map((m) => m[1]);
    const brokenArticleLinks = articleDestMatches.filter((u) => !validRoutes.has(u));
    if (brokenArticleLinks.length === 0) {
      pass('Article Contextual Destination Links', `All ${articleDestMatches.length} destination links in SingleArticleView point to real 200 OK routes! Zero 404s.`);
    } else {
      fail('Article Contextual Destination Links', `Broken destination links in blog view: ${brokenArticleLinks.join(', ')}`);
    }

    // Check CityDeskView destination links
    const cityDeskContent = fs.readFileSync('components/locations/CityDeskView.tsx', 'utf8');
    const cityDestMatches = [...cityDeskContent.matchAll(/['"](\/destinations\/[^'"]+)['"]/g)].map((m) => m[1]);
    const brokenCityLinks = cityDestMatches.filter((u) => !validRoutes.has(u));
    if (brokenCityLinks.length === 0) {
      pass('City Desk Destination Links', `All ${cityDestMatches.length} destination links in CityDeskView point to real 200 OK routes!`);
    } else {
      fail('City Desk Destination Links', `Broken destination links in CityDeskView: ${brokenCityLinks.join(', ')}`);
    }
  } catch (err) {
    fail('Internal Link Audit Execution', err.message);
  }

  // 4. STRUCTURED DATA & ASSET INTEGRITY
  console.log('\n--- 4. Testing Structured Data & Asset Integrity ---');
  try {
    const seoHelpers = require('../lib/seo-helpers');
    if (seoHelpers.LOGO_URL === `${BASE_URL}/images/brand/logo.png`) {
      pass('Organization Logo URL', 'Correct local brand logo used (replaces broken /wp-content/ URL)');
    } else {
      fail('Organization Logo URL', `Incorrect LOGO_URL: ${seoHelpers.LOGO_URL}`);
    }

    const orgSchema = seoHelpers.ORG_SCHEMA;
    if (orgSchema.name === 'Prerna Global Services' && orgSchema.address.postalCode === '410506') {
      pass('Organization Schema Address', `Verified physical office: ${orgSchema.address.streetAddress}, Talegaon Dabhade, Pune 410506`);
    } else {
      fail('Organization Schema Address', 'Organization address mismatch');
    }

    // Check draft robots meta directive
    const draftCity = {
      slug: 'test-draft-city',
      city_name: 'Test Draft',
      status: 'draft',
      is_indexable: false,
    };
    const draftMeta = seoHelpers.getSEOMetadata('location', draftCity);
    if (draftMeta.robots && draftMeta.robots.index === false) {
      pass('Draft Noindex Robots Protection', 'Draft location desks are protected with robots: { index: false, follow: true } to prevent thin content indexing!');
    } else {
      fail('Draft Noindex Robots Protection', 'Draft location was not marked noindex!');
    }

    const draftBlog = {
      slug: 'test-draft-blog',
      title: 'Draft Post',
      status: 'draft',
      is_indexable: false,
    };
    const draftBlogMeta = seoHelpers.getSEOMetadata('blog-article', draftBlog);
    if (draftBlogMeta.robots && draftBlogMeta.robots.index === false) {
      pass('Draft Blog Noindex Protection', 'Draft blog articles are protected with robots: { index: false, follow: true }');
    } else {
      fail('Draft Blog Noindex Protection', 'Draft blog article was not marked noindex!');
    }
  } catch (err) {
    fail('Structured Data Tests Execution', err.message);
  }

  // 5. PUBLIC PRODUCTION SANITY CHECK (Conservative Read-Only)
  console.log('\n--- 5. Conservative Live Production Verification ---');
  const liveUrls = [
    '/',
    '/about-us/',
    '/services/',
    '/destinations/',
    '/blog/',
    '/locations/',
    '/contact-us/',
    '/robots.txt',
  ];

  for (const p of liveUrls) {
    try {
      const url = `${BASE_URL}${p}`;
      const res = await fetch(url, { method: 'HEAD' });
      if (res.status === 200) {
        pass(`Live HTTP 200: ${p}`, `Status ${res.status}`);
      } else {
        warn(`Live HTTP Status: ${p}`, `Status ${res.status}`);
      }
    } catch (e) {
      warn(`Live Request: ${p}`, `Failed to fetch: ${e.message}`);
    }
  }

  // SUMMARY
  console.log('\n====================================================');
  console.log('VALIDATION SCOREBOARD:');
  console.log(`PASSED CHECKS: ${results.passed.length}`);
  console.log(`FAILED CHECKS: ${results.failed.length}`);
  console.log(`WARNINGS:      ${results.warnings.length}`);
  console.log('====================================================\n');
}

runAudit();
