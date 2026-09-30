import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';
import { getAllLocations } from '@/lib/seo-data';

export const dynamic = 'force-static';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const cities = getAllLocations();
  const slugs = Object.keys(cities);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${slugs
  .map(
    (c) => `    <url>
        <loc>${BASE_URL}/locations/${c}/</loc>
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
