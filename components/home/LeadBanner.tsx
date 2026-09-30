import Link from 'next/link';
import styles from './LeadBanner.module.css';

interface LeadBannerProps {
  title?: string;
  subtitle?: string;
}

export default function LeadBanner({
  title = 'Turn Your Dreams Into Action',
  subtitle = "Don\u2019t wait \u2014 secure your admission to a top university abroad with expert guidance.",
}: LeadBannerProps) {
  return (
    <section className={styles.section} aria-label="Call to action — study abroad">
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.eyebrow}>Ready to Start?</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.ctas}>
          <Link href="/contact-us/" className="btn btn--lime btn--lg">
            Book Free Consultation
          </Link>
          <a
            href="tel:+919082900188"
            className="btn btn--ghost-inverse"
          >
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
