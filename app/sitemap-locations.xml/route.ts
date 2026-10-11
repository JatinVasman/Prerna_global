import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';
import { getAllLocations, getAllStatesList } from '@/lib/seo-data';

export const dynamic = 'force-static';

export async function GET() {
  const lastmod = '2026-01-15';
  const states = getAllStatesList();
  const cities = getAllLocations();

  // Only include verified published, indexable location desks
  const indexableCities = Object.values(cities).filter(
    (c) => c.is_indexable && c.status === 'published'
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${states
  .map(
    (s) => `    <url>
        <loc>${BASE_URL}/locations/${s.slug}/</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.85</priority>
    </url>`
  )
  .join('\n')}
${indexableCities
  .map(
    (c) => `    <url>
        <loc>${BASE_URL}/locations/${c.slug}/</loc>
        <lastmod>${lastmod}</lastmod>
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
