import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Pillars from '@/components/home/Pillars';
import AboutSection from '@/components/home/AboutSection';
import UniversityCarousel from '@/components/home/UniversityCarousel';
import ServicesGrid from '@/components/home/ServicesGrid';
import StatsSection from '@/components/home/StatsSection';
import TestPrepSection from '@/components/home/TestPrepSection';
import Testimonials from '@/components/home/Testimonials';
import DestinationsSection from '@/components/home/DestinationsSection';
import ProcessSteps from '@/components/home/ProcessSteps';
import LeadBanner from '@/components/home/LeadBanner';
import FaqSection from '@/components/home/FaqSection';
import { siteConfig } from '@/data/site';
import { faqs } from '@/data/faqs';
import { BASE_URL, ORG_SCHEMA } from '@/lib/seo-helpers';

export const metadata: Metadata = {
  title: `${siteConfig.name} | Study Abroad Consultancy`,
  description: siteConfig.description,
  alternates: { canonical: `${BASE_URL}/` },
};

const homeSchemas = [
  ORG_SCHEMA,
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Prerna Global Services',
    url: `${BASE_URL}/`,
    description: siteConfig.description,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.slice(0, 6).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  },
];

export default function HomePage() {
  return (
    <>
      {homeSchemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
      <Hero />
      <Pillars />
      <AboutSection />
      <UniversityCarousel />
      <ServicesGrid limit={4} showViewAll />
      <StatsSection />
      <TestPrepSection />
      <Testimonials />
      <DestinationsSection />
      <ProcessSteps />
      <LeadBanner />
      <FaqSection />
    </>
  );
}
