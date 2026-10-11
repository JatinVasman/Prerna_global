import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';
import { getAllDestinations } from '@/data/destinations';

export const dynamic = 'force-static';

export async function GET() {
  const lastmod = '2026-03-01';
  const dests = getAllDestinations();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${dests
  .map(
    (d) => `    <url>
        <loc>${BASE_URL}/destinations/${d.slug || d.id}/</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
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
