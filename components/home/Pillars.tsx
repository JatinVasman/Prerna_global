import styles from './Pillars.module.css';

/* From Elementor extraction — 31f30070 container:
   3 icon-boxes: df2a0ee, f93823d, 102374aa
   Background: var(--e-global-color-primary) = #1C4B42
   Icon color: var(--e-global-color-f9cf4cf) = lime #B4E717
   Text: white */

const PILLARS = [
  {
    icon: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zM4 22c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="0" />
        <path d="M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c4.418 0 8 3.582 8 8H4c0-4.418 3.582-8 8-8z" />
      </svg>
    ),
    title: 'Career Counselling & Guidance',
    description: 'Choose the right course and country for your goals.',
  },
  {
    icon: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M9 12h6M9 16h6M7 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2"/>
        <rect x="7" y="2" width="10" height="4" rx="1" ry="1"/>
      </svg>
    ),
    title: 'Admissions & Application Support',
    description: 'Get expert help with forms and documents.',
  },
  {
    icon: (
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 16.5A9 9 0 0 1 3.5 8M2 8.5l1.5 1.5L5 8.5M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42"/>
        <path d="M5 17l-3 3M10 3l2 1 2-1"/>
      </svg>
    ),
    title: 'Visa & Pre-Departure Assistance',
    description: 'Smooth visa process and travel readiness.',
  },
];

export default function Pillars() {
  return (
    <section className={styles.section} aria-label="Our key services">
      <div className="container">
        <div className={styles.grid} role="list">
          {PILLARS.map((p) => (
            <article key={p.title} className={styles.pillar} role="listitem">
              <div className={styles.pillarIcon} aria-hidden="true">{p.icon}</div>
              <div className={styles.pillarBody}>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarText}>{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
