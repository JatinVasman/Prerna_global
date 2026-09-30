import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import styles from './LeadBanner.module.css';

interface LeadBannerProps {
  title?: string;
  subtitle?: string;
}

export default function LeadBanner({
  title = 'Turn Your Dreams Into Action',
  subtitle = 'Don’t wait — secure your admission to a top university abroad with expert, personalized guidance.',
}: LeadBannerProps) {
  return (
    <section className={styles.section} aria-label="Call to action — study abroad">
      {/* Background radial gold/teal glow */}
      <div className={styles.glow} aria-hidden="true" />
      
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrow}>READY TO START?</span>
          </div>

          <h2 className={styles.title}>
            {title}
          </h2>

          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.ctas}>
          <Link href="/contact-us/" className={styles.primaryBtn}>
            <span>Book Free Consultation</span>
            <ArrowRight size={17} aria-hidden="true" />
          </Link>

          <a href="tel:+919082900188" className={styles.secondaryBtn}>
            <Phone size={16} className={styles.phoneIcon} aria-hidden="true" />
            <span>Call Us Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
