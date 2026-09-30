import Link from 'next/link';
import styles from './DestinationsSection.module.css';

/* Original 4 destinations from Elementor extraction (container 90b4ae7) */
const DESTINATIONS = [
  {
    id: 'uk',
    country: 'United Kingdom (UK)',
    description: 'World-renowned universities offering excellence in academics and global career opportunities.',
    image: '/images/destinations/uk.jpg',
  },
  {
    id: 'ireland',
    country: 'Ireland',
    description: 'A friendly, innovation-driven country with strong job prospects and top-quality education.',
    image: '/images/destinations/ireland.jpg',
  },
  {
    id: 'usa',
    country: 'United States of America (USA)',
    description: 'The most preferred study destination with diverse programs and unmatched global recognition.',
    image: '/images/destinations/usa.jpg',
  },
  {
    id: 'canada',
    country: 'Canada',
    description: 'Affordable education, post-study work options, and a welcoming environment for international students.',
    image: '/images/destinations/canada.jpg',
  },
];

export default function DestinationsSection() {
  return (
    <section className={styles.section} aria-labelledby="destinations-heading">
      {/* Section intro heading — fcbd75a container */}
      <div className={`container ${styles.intro}`}>
        <h6 className={styles.eyebrow}>Top Study Destinations</h6>
        <h2 className={styles.heading} id="destinations-heading">
          Discover the Best Countries for{' '}
          <span className={styles.accent}>Your Future</span>
        </h2>
        <p className={styles.subtext}>
          Discover the best countries to pursue world-class education, global
          exposure, and a successful international career. Prerna Global Services
          helps you choose the right destination that fits your goals, budget, and
          dreams.
        </p>
      </div>

      {/* 4 destination cards */}
      <div className={`container ${styles.grid}`}>
        {DESTINATIONS.map((dest) => (
          <Link
            key={dest.id}
            href={`/destinations/#${dest.id}`}
            className={styles.card}
            style={{ backgroundImage: `url(${dest.image})` }}
            aria-label={`Learn about studying in ${dest.country}`}
          >
            {/* Gradient overlay */}
            <div className={styles.cardOverlay} aria-hidden="true" />
            <div className={styles.cardContent}>
              <h4 className={styles.cardTitle}>{dest.country}</h4>
              <p className={styles.cardDesc}>{dest.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA button */}
      <div className={styles.ctaRow}>
        <Link href="/destinations/" className="btn btn--primary btn--lg">
          View All Destinations
        </Link>
      </div>
    </section>
  );
}
