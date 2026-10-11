import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  GraduationCap,
  Banknote,
  Clock,
  Briefcase,
  Check,
  Calendar,
  Globe2,
} from 'lucide-react';
import { getAllDestinations, getDestinationBySlug } from '@/data/destinations';
import { getSEOMetadata, getStructuredData } from '@/lib/seo-helpers';
import LeadBanner from '@/components/home/LeadBanner';
import styles from './page.module.css';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const all = getAllDestinations();
  return all.map((d) => ({ slug: d.slug || d.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) return {};
  return getSEOMetadata('destination', dest);
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);

  if (!dest) notFound();

  const schemas = getStructuredData('destination', dest);

  return (
    <div className={styles.page}>
      {/* ── JSON-LD Structured Data ── */}
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* ── Breadcrumb Bar ── */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.sep}>/</span>
            <Link href="/destinations/">Destinations</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.current}>Study in {dest.country}</span>
          </nav>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className={styles.hero} aria-labelledby="dest-hero-h1">
        <div className={styles.ambientGlow} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          {/* Content Left */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span className={styles.heroEyebrow}>STUDY ABROAD DESTINATION GUIDE</span>
            </div>

            <h1 className={styles.heroTitle} id="dest-hero-h1">
              Study in <span className={styles.goldText}>{dest.country}</span> for Indian Students
            </h1>

            <p className={styles.heroSub}>{dest.description}</p>

            {/* Quick Stat Grid */}
            <div className={styles.keyStatGrid}>
              {dest.postStudyWork && (
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Post-Study Work Visa</div>
                  <div className={styles.statVal}>{dest.postStudyWork}</div>
                </div>
              )}
              {dest.avgTuition && (
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Average Tuition</div>
                  <div className={styles.statVal}>{dest.avgTuition}</div>
                </div>
              )}
              {dest.livingCosts && (
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Estimated Living Costs</div>
                  <div className={styles.statVal}>{dest.livingCosts}</div>
                </div>
              )}
              {dest.intakes && (
                <div className={styles.statCard}>
                  <div className={styles.statLabel}>Primary Intakes</div>
                  <div className={styles.statVal}>{dest.intakes}</div>
                </div>
              )}
            </div>

            <div className={styles.heroCtas}>
              <Link href="/contact-us/" className={styles.ctaButton}>
                <span>Get Free Counselling for {dest.country}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Visual Right */}
          <div className={styles.heroVisual}>
            <div className={styles.imageCard}>
              <Image
                src={dest.image}
                alt={`Study in ${dest.country} — Iconic landmark and university campus`}
                fill
                className={styles.heroImg}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              {dest.badge && (
                <div className={styles.badgeOverlay}>
                  <span>{dest.badge}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      {dest.highlights && dest.highlights.length > 0 && (
        <section className={styles.section} aria-labelledby="highlights-h2">
          <div className="container">
            <header className={styles.sectionHeader}>
              <span className={styles.sectionPre}>WHY STUDY HERE</span>
              <h2 className={styles.sectionH2} id="highlights-h2">
                Top Reasons to Choose <span className={styles.goldText}>{dest.country}</span>
              </h2>
              <p className={styles.sectionDesc}>
                Key academic and career advantages for Indian students pursuing international degrees in {dest.country}:
              </p>
            </header>

            <div className={styles.highlightsGrid}>
              {dest.highlights.map((h, i) => (
                <div key={i} className={styles.highlightCard}>
                  <div className={styles.checkWrap} aria-hidden="true">
                    <Check size={14} className={styles.checkIcon} />
                  </div>
                  <span className={styles.highlightText}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Top Ranked Universities ── */}
      {dest.topUniversities && dest.topUniversities.length > 0 && (
        <section className={styles.section} aria-labelledby="unis-h2">
          <div className="container">
            <header className={styles.sectionHeader}>
              <span className={styles.sectionPre}>PRESTIGIOUS INSTITUTIONS</span>
              <h2 className={styles.sectionH2} id="unis-h2">
                Top Universities in <span className={styles.goldText}>{dest.country}</span>
              </h2>
              <p className={styles.sectionDesc}>
                Prerna Global Services partners and provides direct admissions shortlisting for elite institutions:
              </p>
            </header>

            <div className={styles.uniGrid}>
              {dest.topUniversities.map((uni, i) => (
                <div key={i} className={styles.uniCard}>
                  <GraduationCap size={18} className={styles.uniIcon} aria-hidden="true" />
                  <span className={styles.uniName}>{uni}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Academic & Financial Roadmap ── */}
      <section className={styles.section} aria-labelledby="roadmap-h2">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionPre}>ESSENTIAL PLANNING</span>
            <h2 className={styles.sectionH2} id="roadmap-h2">
              Admissions &amp; Financial Overview
            </h2>
            <p className={styles.sectionDesc}>
              Key metrics and planning timelines for Indian applicants targeting {dest.country}:
            </p>
          </header>

          <div className={styles.roadmapGrid}>
            {dest.avgTuition && (
              <div className={styles.roadmapCard}>
                <Banknote size={24} className={styles.roadmapIcon} aria-hidden="true" />
                <h3 className={styles.roadmapTitle}>Tuition &amp; Fees</h3>
                <p className={styles.roadmapVal}>{dest.avgTuition}</p>
              </div>
            )}
            {dest.livingCosts && (
              <div className={styles.roadmapCard}>
                <Clock size={24} className={styles.roadmapIcon} aria-hidden="true" />
                <h3 className={styles.roadmapTitle}>Cost of Living</h3>
                <p className={styles.roadmapVal}>{dest.livingCosts}</p>
              </div>
            )}
            {dest.postStudyWork && (
              <div className={styles.roadmapCard}>
                <Briefcase size={24} className={styles.roadmapIcon} aria-hidden="true" />
                <h3 className={styles.roadmapTitle}>Work Authorization</h3>
                <p className={styles.roadmapVal}>{dest.postStudyWork}</p>
              </div>
            )}
            {dest.intakes && (
              <div className={styles.roadmapCard}>
                <Calendar size={24} className={styles.roadmapIcon} aria-hidden="true" />
                <h3 className={styles.roadmapTitle}>Intake Timeline</h3>
                <p className={styles.roadmapVal}>{dest.intakes}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ── */}
      {dest.faqs && dest.faqs.length > 0 && (
        <section className={styles.section} aria-labelledby="faqs-h2">
          <div className="container">
            <header className={styles.sectionHeader}>
              <span className={styles.sectionPre}>FREQUENTLY ASKED QUESTIONS</span>
              <h2 className={styles.sectionH2} id="faqs-h2">
                Questions About Studying in {dest.country}
              </h2>
              <p className={styles.sectionDesc}>
                Clear, verified answers to common questions asked by Indian students and parents:
              </p>
            </header>

            <div className={styles.faqList}>
              {dest.faqs.map((f, i) => (
                <details key={i} className={styles.faqItem} open={i === 0}>
                  <summary className={styles.faqSummary}>
                    <span>{f.q}</span>
                    <span aria-hidden="true">&darr;</span>
                  </summary>
                  <div className={styles.faqAnswer}>
                    <p>{f.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Cross Navigation ── */}
      <section className={styles.section} aria-label="Explore other destinations">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionPre}>EXPLORE MORE</span>
            <h2 className={styles.sectionH2}>Other Leading Study Destinations</h2>
          </header>
          <div className={styles.crossLinks}>
            {getAllDestinations()
              .filter((d) => d.id !== dest.id)
              .map((d) => (
                <Link
                  key={d.id}
                  href={`/destinations/${d.slug || d.id}/`}
                  className={styles.tagLink}
                >
                  <Globe2 size={13} style={{ display: 'inline', marginRight: 4 }} />
                  Study in {d.country}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── Lead Banner ── */}
      <LeadBanner
        title={`Ready to Study in ${dest.country}?`}
        subtitle="Speak directly with our senior counselors for personalized university shortlisting, SOP editing, and visa filing."
      />
    </div>
  );
}
