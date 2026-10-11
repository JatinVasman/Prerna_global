import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo-helpers';

export const dynamic = 'force-static';

export async function GET() {
  const lastmod = '2026-03-01';

  // Core business landing pages (blog hub is housed in sitemap-blogs.xml)
  const pages = [
    { u: '/', p: '1.0', f: 'weekly' },
    { u: '/about-us/', p: '0.8', f: 'monthly' },
    { u: '/services/', p: '0.9', f: 'weekly' },
    { u: '/destinations/', p: '0.9', f: 'weekly' },
    { u: '/locations/', p: '0.9', f: 'weekly' },
    { u: '/contact-us/', p: '0.8', f: 'monthly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `    <url>
        <loc>${BASE_URL}${p.u}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${p.f}</changefreq>
        <priority>${p.p}</priority>
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
