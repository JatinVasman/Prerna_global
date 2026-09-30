import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Check } from 'lucide-react';
import { destinations } from '@/data/destinations';
import LeadBanner from '@/components/home/LeadBanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Study Destinations',
  description:
    'Explore study abroad destinations — UK, USA, Canada, Australia, Germany, Ireland, New Zealand, France, and Europe. Prerna Global Services guides you to the right choice.',
  alternates: { canonical: '/destinations/' },
};

export default function DestinationsPage() {
  return (
    <>
      {/* ── Page Hero: Standard 2-Column Luxury Layout ── */}
      <section className={styles.pageHero} aria-labelledby="dest-h1">
        <div className={styles.ambientGlow} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          {/* Left Column: Clean editorial typography & Radiant Gold CTA */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span className={styles.heroEyebrow}>GLOBAL REACH</span>
            </div>

            <h1 className={styles.heroTitle} id="dest-h1">
              Global Study Destinations,{' '}
              <span className={styles.goldText}>One Dedicated Team</span>
            </h1>

            <p className={styles.heroSub}>
              From historic collegiate quadrangles in the UK and Europe to cutting-edge research campuses in the USA and Australia, we provide expert, end-to-end guidance across premier global education hubs.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/contact-us/" className={styles.ctaButton}>
                <span>Find Your Destination</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Framed Photo (16:9 ratio, zero distortion) */}
          <div className={styles.heroVisual}>
            <div className={styles.imageCard}>
              <Image
                src="/images/hero/hero-destinations.jpg"
                alt="Indian student at a prestigious university campus abroad"
                width={1376}
                height={768}
                className={styles.heroImg}
                quality={92}
                priority
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Destination Cards Section ── */}
      <section className={styles.destinationsSection} aria-labelledby="dest-grid-h">
        <div className="container">
          <header className={styles.sectionHeader}>

            <h2 className={styles.sectionHeading} id="dest-grid-h">
              Choose Your Study{' '}
              <span className={styles.goldTextLight}>Destination</span>
            </h2>
            <p className={styles.sectionSub}>
              Compare top global education destinations by post-study work rights, academic rankings, and career pathways to find the ideal match for your profile.
            </p>
          </header>

          <div className={styles.destGrid} role="list">
            {destinations.map((dest) => (
              <article key={dest.id} className={styles.destCard} role="listitem" id={dest.id}>
                {/* Image Block: Landmark Photograph with Country Overlay & Badge */}
                <div className={styles.destImgWrap}>
                  <Image
                    src={dest.image}
                    alt={`Study in ${dest.country} — Iconic landmark and university campus`}
                    fill
                    className={styles.destImg}
                    quality={90}
                    sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw"
                  />
                  <div className={styles.destImgOverlay} />

                  {/* Bottom Country Title with Pin */}
                  <div className={styles.destCountryWrap}>
                    <MapPin size={16} className={styles.destPinIcon} aria-hidden="true" />
                    <h3 className={styles.destCountry}>{dest.country}</h3>
                  </div>
                </div>

                {/* Content Block — 50% of the Card */}
                <div className={styles.destContent}>
                  <p className={styles.destTagline}>{dest.tagline}</p>

                  {dest.highlights && (
                    <ul className={styles.destHighlights} aria-label={`Highlights for ${dest.country}`}>
                      {dest.highlights.slice(0, 3).map((h) => (
                        <li key={h} className={styles.destHighlightItem}>
                          <div className={styles.checkWrap} aria-hidden="true">
                            <Check size={12} className={styles.checkIcon} />
                          </div>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link href="/contact-us/" className={styles.destCta}>
                    <span>Explore {dest.country}</span>
                    <ArrowRight size={15} className={styles.linkArrow} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LeadBanner
        title="Which Destination Is Right for You?"
        subtitle="Our senior counsellors will evaluate your profile and recommend the best-fit country and universities for your goals."
      />
    </>
  );
}
