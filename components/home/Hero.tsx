'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, GraduationCap, Globe2 } from 'lucide-react';
import styles from './Hero.module.css';

const TRUST_ITEMS = [
  { icon: Shield, label: '100% Visa Success' },
  { icon: GraduationCap, label: '2000+ Students' },
  { icon: Globe2, label: '9 Destinations' },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => setIsLoaded(true), 60);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return () => clearTimeout(timer);

    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const heroHeight = rect.height || 800;
        
        // Progress of hero as it scrolls out (0 to 1)
        const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);

        heroRef.current.style.setProperty('--scroll-y', `${scrollY}`);
        heroRef.current.style.setProperty('--scroll-progress', `${progress.toFixed(4)}`);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className={styles.hero} aria-label="Homepage Hero">
      {/* ── Background subtle geometric ambiance ── */}
      <div className={styles.bgHeroPattern} aria-hidden="true" />

      {/* ── Atmospheric radial glows behind girl for studio depth ── */}
      <div className={styles.ambientBackdropGlow} aria-hidden="true" />
      <div className={styles.girlCenterGlow} aria-hidden="true" />

      <div className={styles.inner}>

        {/* ── TOP CENTER: Eyebrow + Main Hero Heading directly above girl's head ── */}
        <header className={styles.headerBlock}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrowText}>PRERNA GLOBAL SERVICES</span>
          </div>

          <h1 className={styles.headline}>
            Your Gateway to{' '}
            <span className={styles.headlineAccent}>World‑Class</span> Education
          </h1>
        </header>

        {/* ── MAIN STAGE: Center Girl + Lower Left Content + Lower Right Content ── */}
        <div className={styles.stage}>

          {/* ── LOWER LEFT: Supporting copy, CTA & Client Avatars ── */}
          <div className={styles.leftCol}>
            <p className={styles.bodyText}>
              Prerna Global Services helps you secure admission to top universities worldwide
              with personalized guidance, trusted visa support, and end‑to‑end assistance every step of the way.
            </p>

            <div className={styles.ctaGroup}>
              <Link href="/contact-us/" className={styles.ctaPrimary}>
                <span>Get Free Consulting</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>

            {/* Client avatars badge directly below button */}
            <div className={styles.clientAvatarsBox}>
              <Image
                src="/images/hero/client-avatars.png"
                alt="500+ happy clients"
                width={160}
                height={48}
                className={styles.clientAvatarsImg}
                priority
              />
              <div className={styles.clientStripText}>
                <strong>500+</strong> Happy Clients
              </div>
            </div>
          </div>

          {/* ── CENTER: The Student Girl with 3D/Parallax Presentation ── */}
          <div className={`${styles.girlEntranceWrap} ${isLoaded ? styles.loaded : ''}`}>
            <div className={styles.girlVisualWrap}>
              {/* Silhouette aura accent behind girl */}
              <div className={styles.girlSilhouetteGlow} aria-hidden="true" />

              <div className={styles.girlImgContainer}>
                <Image
                  src="/images/hero/hero-student.png"
                  alt="Prerna Global Study Abroad Expert Student"
                  width={1143}
                  height={1707}
                  className={styles.studentImg}
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 440px"
                />
              </div>
            </div>
          </div>

          {/* ── LOWER RIGHT: Student Group + Trusted Clients + Trust Pills ── */}
          <div className={styles.rightCol}>
            <div className={styles.floatingBadge} aria-label="Trusted by more than 500+ clients">
              <Image
                src="/images/hero/student-group.png"
                alt="Trusted Students"
                width={92}
                height={38}
                className={styles.groupAvatarsImg}
                priority
              />
              <div className={styles.badgeInfo}>
                <span className={styles.badgeTitle}>Trusted By More than</span>
                <span className={styles.badgeSub}>500+ Clients</span>
              </div>
            </div>

            {/* Trust statistics row */}
            <div className={styles.trustBadgesList} role="list">
              {TRUST_ITEMS.map(({ icon: Icon, label }) => (
                <div key={label} className={styles.trustBadgeItem} role="listitem">
                  <Icon size={15} className={styles.trustBadgeIcon} aria-hidden="true" />
                  <span className={styles.trustBadgeText}>{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* ── Overlap space for bottom Pillars cards ── */}
      <div className={styles.overlapSpacer} aria-hidden="true" />
    </section>
  );
}

