import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  isStateSlug,
  getStateData,
  getCityData,
  getArticle,
  getAllArticles,
} from '@/lib/seo-data';
import { getSEOMetadata, getStructuredData } from '@/lib/seo-helpers';
import CityDeskView from '@/components/locations/CityDeskView';
import StateDirectoryView from '@/components/locations/StateDirectoryView';
import type { BlogArticle } from '@/types/seo';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isStateSlug(slug)) {
    const state = getStateData(slug);
    if (!state) return {};
    return getSEOMetadata('state', state);
  }

  const city = getCityData(slug);
  return getSEOMetadata('location', city);
}

export default async function LocationOrStatePage({ params }: PageProps) {
  const { slug } = await params;

  if (isStateSlug(slug)) {
    const state = getStateData(slug);
    if (!state) notFound();

    const schemas = getStructuredData('state', state);

    return (
      <>
        {schemas.map((s, idx) => (
          <script
            key={idx}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
        <StateDirectoryView state={state} />
      </>
    );
  }

  const city = getCityData(slug);
  const allArticles = Object.values(getAllArticles());

  const relatedBlogs: BlogArticle[] =
    city.related_blogs && city.related_blogs.length > 0
      ? (city.related_blogs.map((s) => getArticle(s)).filter(Boolean) as BlogArticle[])
      : allArticles.slice(0, 3);

  const schemas = getStructuredData('location', city);

  return (
    <>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <CityDeskView city={city} relatedBlogs={relatedBlogs} />
    </>
  );
}
