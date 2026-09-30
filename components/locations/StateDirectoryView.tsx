import Link from 'next/link';
import { MapPin, GraduationCap, Clock, Building, ArrowRight, Phone } from 'lucide-react';
import type { StateEntity } from '@/types/seo';
import styles from './StateDirectoryView.module.css';

interface Props {
  state: StateEntity;
}

export default function StateDirectoryView({ state }: Props) {
  const stateName = state.name;
  const cities = state.cities || [];
  const feeders = state.feeder_colleges || [];

  return (
    <div className={styles.page}>
      {/* BREADCRUMBS */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.sep}>/</span>
            <Link href="/locations/">Locations</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.current}>{stateName}</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>{state.region.toUpperCase()} ADMISSIONS NETWORK</span>
            </div>
            <h1 className={styles.heroTitle}>
              Study Abroad Consultants in <span className={styles.goldText}>{stateName}</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Comprehensive overseas education guidance, university admissions, and student visa support 
              across {cities.length} cities in {stateName}. Connect with our certified counseling team 
              for 1-on-1 personalized advisory.
            </p>
          </div>
        </div>
      </header>

      {/* REGIONAL OVERVIEW & FEEDERS */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPre}>ACADEMIC OVERVIEW</span>
            <h2 className={styles.sectionH2}>Higher Education &amp; Admissions in {stateName}</h2>
            <p className={styles.sectionDesc}>
              Students from leading universities across {stateName} pursue competitive master and undergraduate degrees worldwide:
            </p>
          </div>

          {feeders.length > 0 && (
            <div className={styles.collegesGrid}>
              {feeders.map((college, idx) => (
                <div key={idx} className={styles.collegePill}>
                  <GraduationCap size={18} className={styles.collegeIcon} />
                  <span>{college}</span>
                </div>
              ))}
            </div>
          )}

          <div className={styles.infoGrid}>
            {state.exam_centers && (
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}>
                  <Clock size={20} className={styles.infoIcon} />
                  <h3>Testing Centers</h3>
                </div>
                <p>{state.exam_centers}</p>
              </div>
            )}
            {state.vfs_center && (
              <div className={styles.infoCard}>
                <div className={styles.infoHeader}>
                  <Building size={20} className={styles.infoIcon} />
                  <h3>Visa Application Center</h3>
                </div>
                <p>{state.vfs_center}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CITIES GRID */}
      <section className={styles.citiesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPre}>ALL LOCAL DESKS</span>
            <h2 className={styles.sectionH2}>
              Consultancy Desks in {stateName} ({cities.length} Cities)
            </h2>
            <p className={styles.sectionDesc}>
              Select your nearest city to view local counseling options and testing centers:
            </p>
          </div>

          <div className={styles.citiesGrid}>
            {cities.map((c) => (
              <article key={c.slug} className={styles.cityCard}>
                <div className={styles.cardTop}>
                  <span className={styles.stateTag}>{stateName}</span>
                  <span className={styles.tierTag}>{c.tier_label || 'Educational Hub'}</span>
                </div>
                <h3 className={styles.cityName}>{c.name}</h3>
                <p className={styles.proximity}>
                  <MapPin size={13} className={styles.pinIcon} />
                  <span>
                    {c.name.toLowerCase() === 'pune'
                      ? 'Head Office Region'
                      : 'Dedicated 1-on-1 Virtual Desk'}
                  </span>
                </p>
                <div className={styles.cardFooter}>
                  <Link href={`/locations/${c.slug}/`} className={styles.cityLink}>
                    <span>View {c.name} Desk</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <span className={styles.ctaBadge}>ZERO CONSULTING FEES</span>
            <h2 className={styles.ctaTitle}>Start Your Global Journey Today</h2>
            <p className={styles.ctaDesc}>
              Connect with senior study abroad advisors assisting students across {stateName}.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact-us/" className={styles.goldBtn}>
                <span>Book 1-on-1 Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+919082900188" className={styles.phoneLink}>
                <Phone size={16} />
                <span>Call: +91 90829 00188</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
