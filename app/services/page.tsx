import type { Metadata } from 'next';
import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Users,
  Globe,
  GraduationCap,
  FileCheck,
  FileText,
  Banknote,
  Stamp,
  Home,
  Plane,
  Ticket,
} from 'lucide-react';
import { services } from '@/data/services';
import LeadBanner from '@/components/home/LeadBanner';
import FaqSection from '@/components/home/FaqSection';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Complete study abroad services by Prerna Global Services — IELTS coaching, university admissions, visa support, education loans, SOP writing, and more.',
  alternates: { canonical: '/services/' },
};

const iconMap: Record<string, React.ReactNode> = {
  BookOpen:      <BookOpen size={24} />,
  Users:         <Users size={24} />,
  Globe:         <Globe size={24} />,
  GraduationCap: <GraduationCap size={24} />,
  FileCheck:     <FileCheck size={24} />,
  FileText:      <FileText size={24} />,
  Banknote:      <Banknote size={24} />,
  Stamp:         <Stamp size={24} />,
  Home:          <Home size={24} />,
  Plane:         <Plane size={24} />,
  PassportIcon:  <Ticket size={24} />,
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero: Standard 2-Column Luxury Layout ── */}
      <section className={styles.pageHero} aria-labelledby="services-h1">
        <div className={styles.ambientGlow} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          {/* Left Column: Clean editorial typography & Radiant Gold CTA */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span className={styles.heroEyebrow}>WHAT WE DO</span>
            </div>

            <h1 className={styles.heroTitle} id="services-h1">
              Complete Study Abroad Support,{' '}
              <span className={styles.goldText}>From Start to Finish</span>
            </h1>

            <p className={styles.heroSub}>
              We guide you through every step — from choosing the right country to landing
              at your new university campus. No step left unguided.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/contact-us/" className={styles.ctaButton}>
                <span>Get Free Assessment</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Framed Photo (16:9 ratio, zero distortion) */}
          <div className={styles.heroVisual}>
            <div className={styles.imageCard}>
              <Image
                src="/images/hero/hero-services.jpg"
                alt="Education counsellor guiding students through application process"
                width={1376}
                height={768}
                className={styles.heroImg}
                quality={92}
                priority
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid Section ── */}
      <section className={styles.servicesSection} aria-labelledby="services-grid-h">
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrowLight}>What We Offer</p>
            <h2 className={styles.sectionHeading} id="services-grid-h">
              Our <span className={styles.goldTextLight}>Services</span>
            </h2>
            <p className={styles.sectionSub}>
              From test prep and personalized counselling to visa approvals and flight boarding, our dedicated counsellors support you at every milestone.
            </p>
          </header>

          <div className={styles.grid} role="list">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/contact-us/"
                className={styles.cardLinkWrap}
              >
                <article className={styles.card} role="listitem" id={service.id}>
                  {/* Top Section: Title & Description */}
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardText}>{service.description}</p>
                  </div>

                  {/* Bottom Section: Rounded Image with Bottom-Left Floating Dark Badge */}
                  <div className={styles.cardMediaWrap} style={{ position: 'relative' }}>
                    {service.image && (
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className={styles.cardImg}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    )}
                    <div className={styles.iconBadge} aria-hidden="true">
                      {iconMap[service.icon] ?? <Globe size={20} />}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dream Into Reality Banner Section (With Luxury Glassmorphic Card & Brand Touches) ── */}
      <section className={styles.dreamBannerSection} aria-labelledby="dream-banner-h">
        {/* Background Image with Deep Imperial Teal Tint Overlay */}
        <div className={styles.dreamBannerBg}>
          <Image
            src="/images/services/dream-reality-banner.jpg"
            alt="International education mentors and students discussing study abroad roadmap"
            fill
            className={styles.dreamBannerImg}
            quality={92}
            sizes="100vw"
          />
          <div className={styles.dreamBannerOverlay} aria-hidden="true" />
        </div>

        {/* Ambient Warm Radiant Gold Glow */}
        <div className={styles.dreamGlow} aria-hidden="true" />

        <div className={`container ${styles.dreamInner}`}>
          {/* Centered Frosted Glass Card with Brand Touches */}
          <div className={styles.dreamCard}>
            <div className={styles.dreamEyebrowWrap}>
              <span className={styles.dreamEyebrowDot} aria-hidden="true" />
              <span className={styles.dreamEyebrowText}>YOUR JOURNEY STARTS HERE</span>
            </div>

            <h2 className={styles.dreamTitle} id="dream-banner-h">
              Let’s Turn Your{' '}
              <span className={styles.dreamGoldText}>Dream Into Reality</span>
            </h2>

            <p className={styles.dreamSubtitle}>
              Talk To Our Experts And Discover What’s Possible.
            </p>

            <div className={styles.dreamCtaWrap}>
              <Link href="/contact-us/" className={styles.dreamBtn}>
                <span>Get Free Consultation</span>
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      <LeadBanner
        title="Not Sure Which Service You Need?"
        subtitle="Our counsellors will assess your profile and recommend the exact services you need — free of charge."
      />
    </>
  );
}
