'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.css';

const TABS = [
  {
    id: 'mission',
    label: 'Our Mission',
    content:
      'To guide students toward global education opportunities through expert counselling, personalized support, and a commitment to turning study abroad dreams into reality.',
  },
  {
    id: 'vision',
    label: 'Our Vision',
    content:
      'To become a trusted leader in international education services, helping students achieve academic excellence and build successful global careers.',
  },
  {
    id: 'values',
    label: 'Our Values',
    content:
      'We believe in integrity, excellence, and empathy — ensuring every student receives honest guidance, quality service, and genuine care throughout their journey.',
  },
] as const;

export default function AboutSection() {
  const [active, setActive] = useState<string>('mission');

  return (
    <section className={styles.about} id="about-us" aria-labelledby="about-heading">
      <div className={`container ${styles.inner}`}>

        {/* RIGHT — dark card with heading + video bg */}
        <div className={styles.right}>
          <div className={styles.rightCard}>
            <div className={styles.videoBg} aria-hidden="true">
              <Image
                src="/images/about/businessman.jpg"
                alt=""
                fill
                className={styles.videoBgImg}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Dark overlay */}
              <div className={styles.videoBgOverlay} />
            </div>
            <div className={styles.rightContent}>
              <h3 className={styles.rightHeading}>
                We Don&rsquo;t Just Guide &mdash; We Shape Futures
              </h3>
              <p className={styles.rightText}>
                We go beyond counselling to become your partner in achieving global
                education success. From choosing the right university to securing
                your visa, we offer personalized guidance, practical support, and
                end-to-end assistance for a smooth study abroad journey.
              </p>
            </div>
          </div>
        </div>

        {/* LEFT — eyebrow + section title + tabs */}
        <div className={styles.left}>
          <h6 className={styles.eyebrow}>Who We Are</h6>

          <h2 className={styles.heading} id="about-heading">
            Your Trusted Partner in{' '}
            <span className={styles.headingAccent}>Global Education</span>
          </h2>

          <p className={styles.body}>
            At Prerna Global Services, we work closely with students and parents
            to create clear, goal-oriented pathways for studying abroad. Our expert
            counsellors ensure every step, from application to arrival, is handled
            with care and confidence.
          </p>

          {/* Tabs */}
          <div className={styles.tabs}>
            <div className={styles.tabList} role="tablist" aria-label="About us tabs">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={active === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  className={`${styles.tabBtn} ${active === tab.id ? styles.tabBtnActive : ''}`}
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {TABS.map((tab) => (
              <div
                key={tab.id}
                role="tabpanel"
                id={`panel-${tab.id}`}
                aria-labelledby={`tab-${tab.id}`}
                className={styles.tabPanel}
                hidden={active !== tab.id}
              >
                <p className={styles.tabContent}>{tab.content}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
