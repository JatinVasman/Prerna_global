import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';
import { getAllArticles, getAllCategories } from '@/lib/seo-data';

export const dynamic = 'force-static';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const articles = Object.keys(getAllArticles());
  const categories = Object.keys(getAllCategories());

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${BASE_URL}/blog/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
${categories
  .map(
    (c) => `    <url>
        <loc>${BASE_URL}/blog/category/${c}/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`
  )
  .join('\n')}
${articles
  .map(
    (a) => `    <url>
        <loc>${BASE_URL}/blog/${a}/</loc>
        <lastmod>${today}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
