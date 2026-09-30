import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticle, getAllArticles, getAllCategories } from '@/lib/seo-data';
import { getSEOMetadata, getStructuredData } from '@/lib/seo-helpers';
import SingleArticleView from '@/components/blog/SingleArticleView';
import type { BlogCategory, BlogArticle } from '@/types/seo';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};
  return getSEOMetadata('blog-article', article);
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const categories = getAllCategories();
  const category: BlogCategory = categories[article.category_slug] || {
    slug: article.category_slug,
    name: article.category_name,
    description: 'Expert study abroad insights and guidance.',
  };

  const allArticles = Object.values(getAllArticles());
  let related = allArticles.filter(
    (a) => a.category_slug === article.category_slug && a.slug !== article.slug
  );

  if (related.length < 3) {
    const extra = allArticles.filter(
      (a) => a.slug !== article.slug && !related.some((r) => r.slug === a.slug)
    );
    related = [...related, ...extra].slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }

  const schemas = getStructuredData('blog-article', article);

  return (
    <>
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <SingleArticleView
        article={article}
        category={category}
        relatedArticles={related}
      />
    </>
  );
}
