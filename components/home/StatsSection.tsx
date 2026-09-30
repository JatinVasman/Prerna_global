import { siteConfig } from '@/data/site';
import styles from './StatsSection.module.css';

export default function StatsSection() {
  return (
    <section className={styles.stats} aria-label="Key statistics">
      <div className={styles.overlay} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className={styles.item}>
            {/* Vertical bar accent */}
            <div className={styles.bar} aria-hidden="true" />
            <div className={styles.content}>
              <span className={styles.number} aria-label={`${stat.value} ${stat.label}`}>
                {stat.value}
              </span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
