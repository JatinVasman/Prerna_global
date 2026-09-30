import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import LeadBanner from '@/components/home/LeadBanner';
import Testimonials from '@/components/home/Testimonials';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Prerna Global Services — a trusted study abroad consultancy in Pune, Maharashtra. Our mission, our expert team, and why hundreds of students trust us.',
  alternates: { canonical: '/about-us/' },
};

const values = [
  { title: 'Student-First', text: 'Every decision we make starts with: what is best for this student?' },
  { title: 'Transparency', text: 'No hidden fees, no false promises. We set realistic expectations and deliver on them.' },
  { title: 'Accessibility', text: 'Our counsellors are reachable day and night — because studying abroad doesn\'t follow office hours.' },
  { title: 'Excellence', text: 'We are obsessive about quality — from the SOP we craft to the visa we file.' },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero — Original compact structure with image integrated right ── */}
      <section className={styles.pageHero} aria-labelledby="about-h1">
        {/* Decorative orb */}
        <div className={styles.heroOrb} aria-hidden="true" />

        <div className={styles.heroInner}>
          {/* LEFT: text ~55% */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Our Story</span>
            <h1 className={styles.heroTitle} id="about-h1">
              Turning Study Abroad Dreams<br />
              into Reality, One Student<br />
              at a Time.
            </h1>
            <p className={styles.heroSub}>
              Prerna Global Services is a Pune-based overseas education consultancy dedicated to
              guiding Indian students through every step of their international university journey.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact-us/" className={styles.heroCta}>
                Meet Our Counsellors
              </Link>
            </div>
          </div>

          {/* RIGHT: editorial photo — natural proportions, never cropped ── */}
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroImgWrap}>
              <Image
                src="/images/hero/hero-about.jpg"
                alt="Education counsellor with students at Prerna Global"
                width={750}
                height={500}
                className={styles.heroImg}
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              {/* Left fade to blend into dark bg */}
              <div className={styles.heroImgFade} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats — editorial numbers ── */}
      <section className={styles.statsSection} aria-label="Key statistics">
        <div className="container">
          <div className={styles.statsGrid}>
            {siteConfig.stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionImage}>
              <Image
                src="/images/about/students-group.jpg"
                alt="Prerna Global Services students"
                width={540}
                height={460}
                className={styles.img}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.missionContent}>
              <span className="eyebrow">Our Mission</span>
              <h2 className={styles.sectionTitle}>
                Democratizing Access to<br />World-Class Education
              </h2>
              <p className={styles.body}>
                At Prerna Global Services, we believe that every deserving student — regardless
                of their background — should have access to the best universities in the world.
                We started our consultancy to bridge the gap between ambition and access, removing
                the complexity, confusion, and fear from the study-abroad process.
              </p>
              <p className={styles.body}>
                Founded by Pooja, who has personally guided hundreds of students to universities
                in the UK, USA, Canada, and beyond, Prerna Global is built on the conviction that
                personalized care and deep expertise can change lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <header className="section-header section-header--center">
            <span className="eyebrow">Our Values</span>
            <h2 className="section-header__title">What We Stand For</h2>
          </header>
          <div className={styles.valuesGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials limit={4} />

      <LeadBanner
        title="Have Questions? We Have Answers."
        subtitle="Book a free counselling call and let us map out your best path to a global education."
      />
    </>
  );
}
