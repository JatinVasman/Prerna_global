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

export const metadata: Metadata = {
  title: `${siteConfig.name} | Study Abroad Consultancy Pune`,
  description: siteConfig.description,
  alternates: { canonical: '/' },
};

/* Section order matches original WordPress homepage (Post ID 33):
   1. Homehero (6ee3f375)
   2. Feature bar (31f30070) — overlaps hero
   3. About Us — Who We Are + Mission/Vision/Values (20520d16)
   4. University carousel (a981688)
   5. Services grid (669f7256)
   6. Stats / Funfacts (f865950)
   7. Test Prep / IELTS (df2ea68)
   8. Testimonials (318b4b54)
   9+10. Destinations: intro heading (fcbd75a) + cards (90b4ae7)
   11. [Case Studies — skipped: legacy template content]
   12. How it Works / Process (606cb5b8)
   13. CTA Banner (7b0a9250)
   14. FAQs (712069b)
*/
export default function HomePage() {
  return (
    <>
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
