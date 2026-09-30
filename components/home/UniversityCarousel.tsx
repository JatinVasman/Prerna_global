import Image from 'next/image';
import styles from './UniversityCarousel.module.css';

/* Partner logos — ordered precisely to match reference presentation */
const LOGOS = [
  { src: '/images/partners/ucd.svg', alt: 'UCD Dublin', width: 140, height: 48 },
  { src: '/images/partners/trinity.svg', alt: 'Trinity College Dublin', width: 190, height: 48 },
  { src: '/images/partners/york.png', alt: 'York University', width: 140, height: 48 },
  { src: '/images/partners/edinburgh.svg', alt: 'The University of Edinburgh', width: 190, height: 48 },
  { src: '/images/partners/conestoga.png', alt: 'Conestoga College', width: 150, height: 48 },
  { src: '/images/partners/kings-college.svg', alt: "King's College London", width: 85, height: 60 },
  { src: '/images/partners/exeter.svg', alt: 'University of Exeter', width: 160, height: 48 },
  { src: '/images/partners/csu.svg', alt: 'California State University', width: 170, height: 48 },
  { src: '/images/partners/durham.png', alt: 'Durham University', width: 130, height: 48 },
  { src: '/images/partners/birmingham.jpg', alt: 'University of Birmingham', width: 140, height: 48 },
  { src: '/images/partners/glasgow.jpg', alt: 'University of Glasgow', width: 140, height: 48 },
  { src: '/images/partners/sheffield.png', alt: 'University of Sheffield', width: 140, height: 48 },
  { src: '/images/partners/liverpool.png', alt: 'University of Liverpool', width: 140, height: 48 },
];

export default function UniversityCarousel() {
  return (
    <section className={styles.section} aria-labelledby="partners-heading">
      <div className="container">
        <div className={styles.headings}>
          <p className={styles.eyebrow}>
            Tieup With 950+ Universities
          </p>
          <h2 className={styles.heading} id="partners-heading">
            Students Are Placed In Top Universities
          </h2>
        </div>
      </div>

      {/* Infinite scrolling carousel track */}
      <div className={styles.track} aria-label="Partner university logos">
        {/* Soft edge blur masks */}
        <div className={styles.fadeLeft} aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        <div className={styles.strip} aria-hidden="false">
          {/* Duplicate logos 3 times to ensure a completely seamless continuous infinite marquee loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={`${logo.alt}-${i}`} className={styles.logoWrap}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
                sizes="180px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
