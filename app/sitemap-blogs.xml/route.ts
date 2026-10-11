import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';
import { getAllArticles, getAllCategories } from '@/lib/seo-data';

export const dynamic = 'force-static';

function formatLastmod(dateStr?: string): string {
  if (!dateStr) return '2026-01-15';
  // If already YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  // If e.g. "October 2026" or similar
  try {
    const d = new Date(dateStr);
    if (!isNaN(d.getTime())) {
      return d.toISOString().split('T')[0];
    }
  } catch {
    // fallback
  }
  return '2026-01-15';
}

export async function GET() {
  const allArticles = Object.values(getAllArticles());
  const categories = Object.keys(getAllCategories());

  // Strictly filter to published and indexable articles only
  const publishedArticles = allArticles.filter(
    (a) => a.status === 'published' && a.is_indexable !== false
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${BASE_URL}/blog/</loc>
        <lastmod>2026-03-01</lastmod>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
${categories
  .map(
    (c) => `    <url>
        <loc>${BASE_URL}/blog/category/${c}/</loc>
        <lastmod>2026-01-15</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>`
  )
  .join('\n')}
${publishedArticles
  .map(
    (a) => `    <url>
        <loc>${BASE_URL}/blog/${a.slug}/</loc>
        <lastmod>${formatLastmod(a.updated_date || a.date)}</lastmod>
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
