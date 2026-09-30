import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import type { LocationEntity, StateEntity, BlogCategory, BlogArticle } from '@/types/seo';

export const BASE_URL = 'https://prernaglobalservices.com';
export const LOGO_URL = `${BASE_URL}/wp-content/uploads/custom-logos/prerna-global-logo.png`;

export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': `${BASE_URL}/#organization`,
  name: 'Prerna Global Services',
  url: `${BASE_URL}/`,
  logo: LOGO_URL,
  image: LOGO_URL,
  telephone: '+919082900188',
  email: 'info@prernaglobalservices.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Neelaya, Old Mumbai-Pune Highway',
    addressLocality: 'Talegaon Dabhade, Pune',
    addressRegion: 'Maharashtra',
    postalCode: '410506',
    addressCountry: 'IN',
  },
};

export type SEOPageType =
  | 'directory'
  | 'state'
  | 'location'
  | 'blog'
  | 'blog-category'
  | 'blog-article';

export function getSEOMetadata(
  type: SEOPageType,
  data?: LocationEntity | StateEntity | BlogCategory | BlogArticle | any
): Metadata {
  let title = 'Study Abroad Consultancy Pune | Prerna Global Services';
  let description = siteConfig.description;
  let canonical = `${BASE_URL}/`;
  let ogImage = LOGO_URL;

  if (type === 'directory') {
    title = 'Study Abroad Consultants Near You | All Indian Cities Directory - Prerna Global';
    description =
      'Find certified overseas education and study abroad consultants near you. Serving students across Pune, Mumbai, Delhi, Bangalore, Noida, and 500+ cities in India.';
    canonical = `${BASE_URL}/locations/`;
  } else if (type === 'state' && data) {
    const st = data as StateEntity;
    title = `Study Abroad Consultants in ${st.name} | Regional Admissions Network - Prerna Global`;
    description = `Explore certified overseas education consultants across ${st.name}. Comprehensive university shortlisting, IELTS coaching, education loans, and visa filing support.`;
    canonical = `${BASE_URL}/locations/${st.slug}/`;
  } else if (type === 'location' && data) {
    const city = data as LocationEntity;
    title = `Best Study Abroad Consultant in ${city.city_name} | Overseas Education - Prerna Global`;
    description = `Looking for the best study abroad consultant in ${city.city_name}? Prerna Global Services provides expert university selection, student visa support, IELTS training, and loan assistance.`;
    canonical = `${BASE_URL}/locations/${city.slug}/`;
  } else if (type === 'blog') {
    title = 'Study Abroad Blog & University Guides | Prerna Global Services';
    description =
      'Read the latest study abroad insights, country admission guidelines, intake deadlines, and visa tips curated by certified overseas education counselors.';
    canonical = `${BASE_URL}/blog/`;
  } else if (type === 'blog-category' && data) {
    const cat = data as BlogCategory;
    title = `${cat.name} - Study Abroad Articles & Guides | Prerna Global`;
    description = `${cat.description} Comprehensive international education advice curated by certified study-abroad counselors.`;
    canonical = `${BASE_URL}/blog/category/${cat.slug}/`;
  } else if (type === 'blog-article' && data) {
    const article = data as BlogArticle;
    title = `${article.seo_title || article.title} | Prerna Global`;
    description = article.meta_description || article.excerpt;
    canonical = `${BASE_URL}/blog/${article.slug}/`;
    if (article.featured_image) {
      ogImage = article.featured_image.startsWith('http')
        ? article.featured_image
        : `${BASE_URL}${article.featured_image}`;
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Prerna Global Services',
      locale: 'en_US',
      type: type === 'blog-article' ? 'article' : 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export function getStructuredData(
  type: SEOPageType,
  data?: LocationEntity | StateEntity | BlogCategory | BlogArticle | any
): any[] {
  const schemas: any[] = [ORG_SCHEMA];

  if (type === 'directory') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Locations', item: `${BASE_URL}/locations/` },
      ],
    });
  } else if (type === 'state' && data) {
    const st = data as StateEntity;
    const canonical = `${BASE_URL}/locations/${st.slug}/`;
    schemas.push(
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `${BASE_URL}/locations/` },
          { '@type': 'ListItem', position: 3, name: st.name, item: canonical },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: `Study Abroad Consultants in ${st.name}`,
        description: `Explore certified overseas education consultants across ${st.name}.`,
        url: canonical,
      }
    );
  } else if (type === 'location' && data) {
    const city = data as LocationEntity;
    const canonical = `${BASE_URL}/locations/${city.slug}/`;

    schemas.push(
      {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: `Prerna Global Services - Study Abroad Consultant ${city.city_name}`,
        description: `Premier overseas education and study abroad consultancy assisting students in ${city.city_name} with university admissions, student visas, and IELTS coaching.`,
        url: canonical,
        telephone: '+919082900188',
        email: 'info@prernaglobalservices.com',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: `${city.city_name}, ${city.state}, India`,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: `${BASE_URL}/locations/` },
          { '@type': 'ListItem', position: 3, name: city.city_name, item: canonical },
        ],
      }
    );

    if (city.faqs && city.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: city.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      });
    }
  } else if (type === 'blog') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${BASE_URL}/blog/` },
      ],
    });
  } else if (type === 'blog-category' && data) {
    const cat = data as BlogCategory;
    const canonical = `${BASE_URL}/blog/category/${cat.slug}/`;
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${BASE_URL}/blog/` },
        { '@type': 'ListItem', position: 3, name: cat.name, item: canonical },
      ],
    });
  } else if (type === 'blog-article' && data) {
    const article = data as BlogArticle;
    const canonical = `${BASE_URL}/blog/${article.slug}/`;
    const imageUrl = article.featured_image.startsWith('http')
      ? article.featured_image
      : `${BASE_URL}${article.featured_image}`;

    schemas.push(
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical,
        },
        headline: article.title,
        description: article.meta_description || article.excerpt,
        image: imageUrl,
        author: {
          '@type': 'Organization',
          name: article.author || 'Prerna Global Services',
          url: `${BASE_URL}/`,
        },
        publisher: ORG_SCHEMA,
        datePublished: article.date,
        dateModified: article.updated_date || article.date,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${BASE_URL}/blog/` },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.category_name,
            item: `${BASE_URL}/blog/category/${article.category_slug}/`,
          },
          { '@type': 'ListItem', position: 4, name: article.title, item: canonical },
        ],
      }
    );

    if (article.faqs && article.faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: f.a,
          },
        })),
      });
    }
  }

  return schemas;
}
