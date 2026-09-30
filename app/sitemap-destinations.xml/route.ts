import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';

export const dynamic = 'force-static';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  const dests = [
    '/destinations/study-in-uk/',
    '/destinations/study-in-usa/',
    '/destinations/study-in-canada/',
    '/destinations/study-in-germany/',
    '/destinations/study-in-australia/',
    '/destinations/study-in-ireland/',
    '/destinations/study-in-new-zealand/',
    '/destinations/study-in-france/',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${dests
  .map(
    (u) => `    <url>
        <loc>${BASE_URL}${u}</loc>
        <lastmod>${today}</lastmod>
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
