import type { Metadata } from 'next';
import { getAllArticles, getAllCategories } from '@/lib/seo-data';
import { getSEOMetadata, getStructuredData } from '@/lib/seo-helpers';
import BlogKnowledgeHub from '@/components/blog/BlogKnowledgeHub';

export const metadata: Metadata = getSEOMetadata('blog');

export default function BlogHubPage() {
  const articles = Object.values(getAllArticles());
  const categories = Object.values(getAllCategories());
  const schemas = getStructuredData('blog');

  return (
    <>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <BlogKnowledgeHub articles={articles} categories={categories} />
    </>
  );
}
