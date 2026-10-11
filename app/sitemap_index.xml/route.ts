import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';

export const dynamic = 'force-static';

export function getSitemapIndexXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
        <loc>${BASE_URL}/sitemap-pages.xml</loc>
        <lastmod>2026-03-01T00:00:00Z</lastmod>
    </sitemap>
    <sitemap>
        <loc>${BASE_URL}/sitemap-destinations.xml</loc>
        <lastmod>2026-03-01T00:00:00Z</lastmod>
    </sitemap>
    <sitemap>
        <loc>${BASE_URL}/sitemap-locations.xml</loc>
        <lastmod>2026-01-15T00:00:00Z</lastmod>
    </sitemap>
    <sitemap>
        <loc>${BASE_URL}/sitemap-blogs.xml</loc>
        <lastmod>2026-01-15T00:00:00Z</lastmod>
    </sitemap>
</sitemapindex>`;
}

export async function GET() {
  const xml = getSitemapIndexXml();

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
