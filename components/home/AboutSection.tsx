'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Target, Eye, ShieldCheck, CheckCircle2, Award, GraduationCap, Globe2 } from 'lucide-react';
import styles from './AboutSection.module.css';

interface TabItem {
  id: 'mission' | 'vision' | 'values';
  label: string;
  icon: typeof Target;
  headline: string;
  content: string;
  points: string[];
}

const TABS: TabItem[] = [
  {
    id: 'mission',
    label: 'Our Mission',
    icon: Target,
    headline: 'Empowering Aspirations Through Personalized Guidance',
    content:
      'To guide every student toward top-tier global education through transparent counselling, meticulous profile evaluation, and end-to-end admission and visa assistance.',
    points: [
      'Tailored university shortlisting based on profile & budget',
      'Exhaustive SOP, LOR, and documentation assistance',
      'High-precision visa filing with mock interview coaching',
    ],
  },
  {
    id: 'vision',
    label: 'Our Vision',
    icon: Eye,
    headline: 'To Be the Benchmark for Overseas Education Excellence',
    content:
      'To be recognized as India’s premier, most dependable study abroad consultancy, bridging the gap between local ambition and premier global universities.',
    points: [
      'Direct institutional ties with 950+ accredited world universities',
      'Unwavering commitment to a near-perfect visa success rate',
      'Ongoing post-arrival & accommodation settlement support',
    ],
  },
  {
    id: 'values',
    label: 'Our Values',
    icon: ShieldCheck,
    headline: 'Integrity, Empathy, and Uncompromising Transparency',
    content:
      'We treat each student’s ambition as our own. We reject cookie-cutter advice and university quotas, recommending pathways tailored exclusively to the student’s career growth.',
    points: [
      '100% ethical advisory with zero hidden charges or false claims',
      'Student-centric care with dedicated personal mentors',
      'Lifelong alumni engagement across the UK, USA, Canada & Europe',
    ],
  },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const currentTab = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <section className={styles.section} id="about-us" aria-labelledby="about-heading">
      <div className={`container ${styles.container}`}>

        {/* ── LEFT COLUMN: Architectural Visual Composition ── */}
        <div className={styles.visualCol}>
          <div className={styles.visualStack}>
            {/* Subtle luxury gold hairline frame behind image */}
            <div className={styles.goldFrame} aria-hidden="true" />

            {/* Main high-resolution counseling image */}
            <div className={styles.imageCard}>
              <Image
                src="/images/about/counselling-session.jpg"
                alt="Expert education consultant counseling students for global universities"
                width={1280}
                height={1000}
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Floating Top Badge: Experience & Trust */}
            <div className={styles.floatingTopBadge}>
              <div className={styles.badgeIconWrap}>
                <Award size={18} className={styles.badgeIcon} />
              </div>
              <div className={styles.badgeTexts}>
                <span className={styles.badgeNumber}>7+ Years</span>
                <span className={styles.badgeLabel}>Of Proven Excellence</span>
              </div>
            </div>

            {/* Overlapping Bottom Card: "We Shape Futures" with deep teal glass */}
            <div className={styles.overlappingCard}>
              <div className={styles.cardHeaderStrip}>
                <span className={styles.cardIndicator} />
                <span className={styles.cardTagline}>PREMIUM ADVISORY</span>
              </div>
              <h3 className={styles.cardHeading}>
                We Don’t Just Guide &mdash; We Shape Futures
              </h3>
              <p className={styles.cardText}>
                We go beyond standard counselling to become your trusted strategic partner in global education.
                From university selection to visa approval, we navigate every milestone with care.
              </p>
              <div className={styles.cardPills}>
                <span className={styles.cardPill}>
                  <CheckCircle2 size={13} className={styles.pillCheck} />
                  100% Visa Guidance
                </span>
                <span className={styles.cardPill}>
                  <CheckCircle2 size={13} className={styles.pillCheck} />
                  950+ Universities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Content, Tabs & Trust Metrics ── */}
        <div className={styles.contentCol}>
          {/* Eyebrow */}
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrowText}>WHO WE ARE</span>
          </div>

          {/* Main Heading */}
          <h2 className={styles.heading} id="about-heading">
            Your Trusted Partner in{' '}
            <span className={styles.headingAccent}>Global Education</span>
          </h2>

          {/* Editorial Lead Paragraph */}
          <p className={styles.leadText}>
            At Prerna Global Services, we believe every student’s dream of studying abroad
            merits honest mentorship, meticulous planning, and relentless commitment.
            We turn international aspirations into prestigious university degrees.
          </p>

          {/* Luxury Tab Switcher */}
          <div className={styles.tabSection}>
            <div className={styles.tabList} role="tablist" aria-label="About Prerna Global Services">
              {TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <Icon size={16} className={styles.tabIcon} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Panel */}
            <div
              role="tabpanel"
              id={`panel-${currentTab.id}`}
              aria-labelledby={`tab-${currentTab.id}`}
              className={styles.tabPanel}
            >
              <div className={styles.panelHeader}>
                <h4 className={styles.panelHeadline}>{currentTab.headline}</h4>
                <p className={styles.panelContent}>{currentTab.content}</p>
              </div>

              {/* Actionable points */}
              <ul className={styles.pointsList}>
                {currentTab.points.map((pt, i) => (
                  <li key={i} className={styles.pointItem}>
                    <span className={styles.pointIconWrap}>
                      <CheckCircle2 size={15} className={styles.pointIcon} />
                    </span>
                    <span className={styles.pointText}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Trust Row with Gold Stats */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>950+</span>
              <span className={styles.statLabel}>Global Universities</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>Visa Success Rate</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statValue}>2,000+</span>
              <span className={styles.statLabel}>Students Placed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
