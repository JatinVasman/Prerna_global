import Image from 'next/image';
import styles from './UniversityCarousel.module.css';

/* 13 partner logos — using available files from WordPress uploads */
const LOGOS = [
  { src: '/images/partners/prt1.png', alt: 'Partner University 1' },
  { src: '/images/partners/prt2.png', alt: 'Partner University 2' },
  { src: '/images/partners/prt3.png', alt: 'Partner University 3' },
  { src: '/images/partners/prt4.png', alt: 'Partner University 4' },
  { src: '/images/partners/prt5.png', alt: 'Partner University 5' },
  { src: '/images/partners/prt6.png', alt: 'Partner University 6' },
  { src: '/images/partners/birmingham.jpg', alt: 'University of Birmingham' },
  { src: '/images/partners/glasgow.jpg', alt: 'University of Glasgow' },
  { src: '/images/partners/durham.png', alt: 'Durham University' },
  { src: '/images/partners/sheffield.png', alt: 'University of Sheffield' },
  { src: '/images/partners/york.png', alt: 'University of York' },
  { src: '/images/partners/liverpool.png', alt: 'University of Liverpool' },
  { src: '/images/partners/conestoga.png', alt: 'Conestoga College' },
];

export default function UniversityCarousel() {
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <div className="container">
        <div className={styles.headings}>
          <p className={styles.title} id="partners-heading">Tieup with 950+ Universities</p>
          <p className={styles.subtitle}>Students placed in top universities worldwide</p>
        </div>
      </div>

      {/* Infinite scroll strip — CSS animation, no JS */}
      <div className={styles.track} aria-label="Partner university logos">
        <div className={styles.strip} aria-hidden="false">
          {/* Duplicate logos for seamless loop */}
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className={styles.logoWrap}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={60}
                className={styles.logo}
                style={{ width: 'auto', height: '44px' }}
                sizes="120px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
