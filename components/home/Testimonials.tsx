import { Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.css';

interface TestimonialsProps {
  limit?: number;
}

export default function Testimonials({ limit = 4 }: TestimonialsProps) {
  const displayed = testimonials.slice(0, limit);

  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h6 className={styles.eyebrow}>Testimonials</h6>
          <h2 className={styles.heading}>What Our Students Say</h2>
        </div>

        <div className={styles.grid} role="list">
          {displayed.map((t) => (
            <article key={t.id} className={styles.card} role="listitem">
              <div className={styles.header}>
                {/* Initial avatar */}
                <div className={styles.avatar} aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div className={styles.meta}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.date}>
                    {new Date(t.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short' })}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`} role="img">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>

              <p className={styles.text}>&ldquo;{t.review}&rdquo;</p>

              <div className={styles.badge}>
                {/* Google G icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className={styles.badgeText}>Verified Google Review</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
