import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllArticles, getAllCategories } from '@/lib/seo-data';
import { getSEOMetadata, getStructuredData } from '@/lib/seo-helpers';
import BlogKnowledgeHub from '@/components/blog/BlogKnowledgeHub';

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const categories = getAllCategories();
  const catObj = categories[category];

  if (!catObj) return {};
  return getSEOMetadata('blog-category', catObj);
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoriesMap = getAllCategories();
  const catObj = categoriesMap[category];

  if (!catObj) notFound();

  const allArticles = Object.values(getAllArticles());
  const categoryArticles = allArticles.filter((a) => a.category_slug === category);
  const categories = Object.values(categoriesMap);
  const schemas = getStructuredData('blog-category', catObj);

  return (
    <>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <BlogKnowledgeHub
        articles={categoryArticles}
        categories={categories}
        initialCategory={category}
        categoryObj={catObj}
      />
    </>
  );
}
