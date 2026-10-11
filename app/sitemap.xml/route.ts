import { NextResponse } from 'next/server';
import { getSitemapIndexXml } from '@/app/sitemap_index.xml/route';

export const dynamic = 'force-static';

export async function GET() {
  const xml = getSitemapIndexXml();

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
