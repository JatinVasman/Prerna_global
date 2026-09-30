import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { destinations } from '@/data/destinations';
import styles from './DestinationsSection.module.css';

export default function DestinationsSection() {
  /* Featured top 3 destinations in single row matching design theme */
  const featured = destinations.slice(0, 3);

  return (
    <section className={styles.section} aria-labelledby="destinations-heading">
      <div className={`container ${styles.container}`}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrowText}>TOP STUDY DESTINATIONS</span>
          </div>

          <h2 className={styles.heading} id="destinations-heading">
            Discover the Best Countries for{' '}
            <span className={styles.goldText}>Your Future</span>
          </h2>

          <p className={styles.subtext}>
            Discover premier destinations to pursue world-class education, global exposure, and high-impact international careers.
            Prerna Global Services guides you to the right country suited to your ambitions and budget.
          </p>
        </div>

        {/* 6 Elevated Destination Cards in 3 Columns */}
        <div className={styles.grid}>
          {featured.map((dest) => (
            <article key={dest.id} className={styles.card} id={dest.id}>
              {/* Photo Banner with Location Pin Title (Clean - No top badges) */}
              <div className={styles.imageBox}>
                <Image
                  src={dest.image}
                  alt={`Study in ${dest.country} — Landmark and university campus`}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw"
                />
                <div className={styles.imageOverlay} aria-hidden="true" />

                {/* Bottom Country Title with Pin */}
                <div className={styles.countryWrap}>
                  <MapPin size={16} className={styles.pinIcon} aria-hidden="true" />
                  <h3 className={styles.countryName}>{dest.country}</h3>
                </div>
              </div>

              {/* Card Content Body */}
              <div className={styles.cardBody}>
                <p className={styles.tagline}>{dest.tagline}</p>

                {/* Highlights List (Top 3) */}
                {dest.highlights && (
                  <ul className={styles.highlightsList} aria-label={`Highlights for ${dest.country}`}>
                    {dest.highlights.slice(0, 3).map((h) => (
                      <li key={h} className={styles.highlightItem}>
                        <div className={styles.checkWrap} aria-hidden="true">
                          <Check size={12} className={styles.checkIcon} />
                        </div>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Bottom Action Link */}
                <div className={styles.cardFooter}>
                  <Link href={`/destinations/#${dest.id}`} className={styles.exploreLink}>
                    <span>Explore {dest.country}</span>
                    <ArrowRight size={15} className={styles.arrowIcon} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className={styles.ctaRow}>
          <Link href="/destinations/" className={styles.viewAllBtn}>
            <span>View All Destinations</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
