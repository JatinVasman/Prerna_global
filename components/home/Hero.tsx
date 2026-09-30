import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, GraduationCap, Globe2 } from 'lucide-react';
import styles from './Hero.module.css';

const TRUST_ITEMS = [
  { icon: Shield,        label: '100% Visa Success' },
  { icon: GraduationCap, label: '2000+ Students' },
  { icon: Globe2,        label: '9 Destinations' },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Homepage Hero">
      {/* ── Geometric line background pattern (original Prerna Global design) ── */}
      <div className={styles.bgPatternWrap} aria-hidden="true">
        <Image
          src="/images/hero/hero-bg.png"
          alt=""
          fill
          className={styles.heroBgPattern}
          quality={80}
          priority
        />
      </div>

      {/* ── Ambient and visual glow behind student ── */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.visualGlow} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── LEFT: Content Group ── */}
        <div className={styles.content}>
          <div className={styles.headerGroup}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span className={styles.eyebrowText}>PRERNA GLOBAL SERVICES</span>
            </div>

            <h1 className={styles.headline}>
              Your Gateway to<br />
              <span className={styles.headlineAccent}>World‑Class</span><br />
              Education
            </h1>
          </div>

          <p className={styles.body}>
            Expert guidance, trusted visa support, and end‑to‑end assistance to help you
            secure admission to top universities worldwide.
          </p>

          <div className={styles.ctas}>
            <Link href="/contact-us/" className={styles.ctaPrimary}>
              Get Free Consulting
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link href="/services/" className={styles.ctaSecondary}>
              Explore Services
            </Link>
          </div>

          {/* Client avatars badge below CTAs */}
          <div className={styles.clientStrip}>
            <Image
              src="/images/hero/client-avatars.png"
              alt="500+ happy clients"
              width={160}
              height={44}
              className={styles.clientAvatarsImg}
            />
            <div className={styles.clientStripText}>
              <strong>500+</strong> Happy Clients
            </div>
          </div>

          {/* Trust statistics row */}
          <div className={styles.trustRow} role="list">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className={styles.trustItem} role="listitem">
                <Icon size={16} className={styles.trustIcon} aria-hidden="true" />
                <span className={styles.trustLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT / CENTER-RIGHT: Student image naturally blended into bg ── */}
        <div className={styles.visualWrap} aria-hidden="true">
          <div className={styles.imgMaskContainer}>
            <Image
              src="/images/hero/hero-home.jpg"
              alt="Indian student on prestigious international university campus"
              width={1376}
              height={768}
              className={styles.heroImg}
              quality={90}
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
            {/* Soft gradient edge feathering */}
            <div className={styles.fadeLeft} aria-hidden="true" />
            <div className={styles.fadeRight} aria-hidden="true" />
            <div className={styles.fadeTop} aria-hidden="true" />
            <div className={styles.fadeBottom} aria-hidden="true" />
          </div>

          {/* Floating trust badge with Indian student group on lower-right */}
          <div className={styles.floatingBadge} aria-label="500+ happy clients">
            <Image
              src="/images/hero/student-group.png"
              alt="Trusted Students"
              width={88}
              height={38}
              className={styles.groupAvatarsImg}
            />
            <div className={styles.badgeInfo}>
              <span className={styles.badgeTitle}>Trusted By More than</span>
              <span className={styles.badgeSub}>500+ Clients</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Overlap space for bottom Pillars cards ── */}
      <div className={styles.overlapSpacer} aria-hidden="true" />
    </section>
  );
}
