import type { Metadata } from 'next';
import type React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Globe, GraduationCap, FileCheck, FileText, Banknote, Stamp, Home, Plane, Ticket } from 'lucide-react';
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
  BookOpen:     <BookOpen size={26} />,
  Users:        <Users size={26} />,
  Globe:        <Globe size={26} />,
  GraduationCap: <GraduationCap size={26} />,
  FileCheck:    <FileCheck size={26} />,
  FileText:     <FileText size={26} />,
  Banknote:     <Banknote size={26} />,
  Stamp:        <Stamp size={26} />,
  Home:         <Home size={26} />,
  Plane:        <Plane size={26} />,
  PassportIcon: <Ticket size={26} />,
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero — Split composition ── */}
      <section className={styles.pageHero} aria-labelledby="services-h1">
        <div className={styles.heroInner}>

          {/* LEFT: text */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>What We Do</span>
            <h1 className={styles.heroTitle} id="services-h1">
              Complete Study Abroad<br />
              <span className={styles.heroAccent}>Support — Start to Finish</span>
            </h1>
            <p className={styles.heroSub}>
              We guide you through every step — from choosing the right country to landing
              at your new university campus. No step left unguided.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact-us/" className={styles.heroCta}>
                Get Free Assessment
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* RIGHT: editorial photo */}
          <div className={styles.heroVisual} style={{ position: 'relative' }}>
            <Image
              src="/images/hero/hero-services.jpg"
              alt="Education counsellor guiding students through application process"
              fill
              className={styles.heroPhoto}
              quality={90}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.heroPhotoFade} style={{ position: 'absolute', inset: 0 }} />
          </div>

        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className={`section ${styles.servicesSection}`} aria-labelledby="services-grid-h">
        <div className="container">
          <header className="section-header section-header--center">
            <span className="eyebrow">All Services</span>
            <h2 className="section-header__title" id="services-grid-h">Everything You Need Under One Roof</h2>
          </header>
          <div className={styles.grid} role="list">
            {services.map((service) => (
              <article key={service.id} className={styles.card} role="listitem" id={service.id}>
                <div className={styles.cardIcon} aria-hidden="true">
                  {iconMap[service.icon] ?? <Globe size={26} />}
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardText}>{service.description}</p>
                </div>
                <Link href="/contact-us/" className={styles.cardLink}>
                  Get Started
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </article>
            ))}
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
