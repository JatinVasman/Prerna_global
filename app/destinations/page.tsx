import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { destinations } from '@/data/destinations';
import LeadBanner from '@/components/home/LeadBanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Study Destinations',
  description:
    'Explore study abroad destinations — UK, USA, Canada, Australia, Germany, Ireland, New Zealand, France and Europe. Prerna Global Services guides you to the right choice.',
  alternates: { canonical: '/destinations/' },
};

export default function DestinationsPage() {
  return (
    <>
      {/* ── Page Hero — Editorial split ── */}
      <section className={styles.pageHero} aria-labelledby="dest-h1">
        <div className={styles.heroInner}>

          {/* LEFT: text */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Global Reach</span>
            <h1 className={styles.heroTitle} id="dest-h1">
              9 World-Class Study<br />
              <span className={styles.heroAccent}>Destinations.</span><br />
              One Dedicated Team.
            </h1>
            <p className={styles.heroSub}>
              From the oldest universities in England to cutting-edge tech hubs in Europe,
              we have deep expertise across 9 top study destinations.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/contact-us/" className={styles.heroCta}>
                Find Your Destination
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* RIGHT: editorial photo */}
          <div className={styles.heroVisual} style={{ position: 'relative' }}>
            <Image
              src="/images/hero/hero-destinations.jpg"
              alt="Indian student at a prestigious European university campus"
              fill
              className={styles.heroPhoto}
              quality={90}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.heroPhotoFade} style={{ position: 'absolute', inset: 0 }} />
          </div>

        </div>
      </section>

      {/* ── Destination Cards — completely redesigned ── */}
      <section className={`section ${styles.destinationsSection}`} aria-labelledby="dest-grid-h">
        <div className="container">
          <header className="section-header section-header--center">
            <span className="eyebrow">Where We Send Students</span>
            <h2 className="section-header__title" id="dest-grid-h">Choose Your Study Destination</h2>
          </header>

          <div className={styles.destGrid} role="list">
            {destinations.map((dest) => (
              <article key={dest.id} className={styles.destCard} role="listitem" id={dest.id}>
                {/* Image block — fixed height, fully contained, never overlapping */}
                <div className={styles.destImgWrap}>
                  <Image
                    src={dest.image}
                    alt={`Study in ${dest.country}`}
                    fill
                    className={styles.destImg}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={styles.destImgOverlay} />
                  <span className={styles.destCountryBadge}>{dest.country}</span>
                </div>

                {/* Content block — fully separate from image */}
                <div className={styles.destContent}>
                  <p className={styles.destTagline}>{dest.tagline}</p>
                  <p className={styles.destText}>{dest.description}</p>

                  {dest.highlights && (
                    <ul className={styles.destHighlights} aria-label={`Highlights for ${dest.country}`}>
                      {dest.highlights.slice(0, 3).map((h) => (
                        <li key={h} className={styles.destHighlightItem}>
                          <CheckCircle2 size={14} className={styles.checkIcon} aria-hidden="true" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link href="/contact-us/" className={styles.destCta}>
                    Explore {dest.country}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LeadBanner
        title="Which Destination Is Right for You?"
        subtitle="Our counsellors will evaluate your profile and recommend the best-fit country and universities for your goals."
      />
    </>
  );
}
