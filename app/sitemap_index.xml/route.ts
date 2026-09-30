import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';

export const dynamic = 'force-static';

export async function GET() {
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${BASE_URL}/sitemap-pages.xml</loc>
        <lastmod>${now}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${BASE_URL}/sitemap-destinations.xml</loc>
        <lastmod>${now}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${BASE_URL}/sitemap-locations.xml</loc>
        <lastmod>${now}</lastmod>
    </sitemap>
    <sitemap>
        <loc>${BASE_URL}/sitemap-blogs.xml</loc>
        <lastmod>${now}</lastmod>
    </sitemap>
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
