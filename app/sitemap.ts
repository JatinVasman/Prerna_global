import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  return [
    { url: `${base}/`,             lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${base}/about-us/`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/services/`,    lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/destinations/`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact-us/`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
  ];
}
