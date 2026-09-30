import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { destinations } from '@/data/destinations';
import styles from './DestinationsPreview.module.css';

interface DestinationsPreviewProps {
  limit?: number;
}

export default function DestinationsPreview({ limit = 6 }: DestinationsPreviewProps) {
  const displayed = destinations.slice(0, limit);

  return (
    <section className={`section ${styles.section}`} id="destinations">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="eyebrow">Study Destinations</span>
          <h2 className="section-header__title">Where Will Your Journey Take You?</h2>
          <p className="section-header__body">
            We have helped students reach universities in 9 countries and counting.
            Each destination opens unique academic and career opportunities.
          </p>
        </header>

        <div className={styles.grid} role="list">
          {displayed.map((dest) => (
            <article key={dest.id} className={styles.card} role="listitem">
              <Image
                src={dest.image}
                alt={`Study in ${dest.country}`}
                fill
                className={styles.image}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className={styles.overlay}>
                <h3 className={styles.country}>{dest.country}</h3>
                <p className={styles.tagline}>{dest.tagline}</p>
                <Link href="/destinations/" className={styles.cta}>
                  Explore <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.viewAllWrap}>
          <Link href="/destinations/" className="btn btn--ghost">
            View All Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}
