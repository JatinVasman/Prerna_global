import styles from './ProcessSteps.module.css';

/* Content from Elementor extraction — 606cb5b8 container */
const STEPS = [
  {
    n: '01',
    title: 'Personalized Counselling',
    text: 'We start with one-on-one counselling to understand your goals, interests, and preferred countries.',
  },
  {
    n: '02',
    title: 'Course & University Selection',
    text: 'Our experts help you shortlist the best courses and universities that match your academic profile.',
  },
  {
    n: '03',
    title: 'Application & Visa Assistance',
    text: 'We guide you through applications, SOPs, documentation, and visa formalities with complete support.',
  },
  {
    n: '04',
    title: 'Pre-Departure & Post-Arrival Support',
    text: 'From travel planning to accommodation, we ensure a smooth transition to your new study destination.',
  },
];

export default function ProcessSteps() {
  return (
    <section className={styles.section} id="process" aria-labelledby="process-heading">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <h6 className={styles.eyebrow}>Our 4-Step Process</h6>
          <h2 className={styles.heading} id="process-heading">
            Simple. Transparent.{' '}
            <span className={styles.headingAccent}>Student-Focused.</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className={styles.steps} role="list">
          {STEPS.map((step) => (
            <div key={step.n} className={styles.step} role="listitem">
              {/* Step number badge */}
              <div className={styles.stepNumWrap}>
                <span className={styles.stepNum} aria-label={`Step ${step.n}`}>
                  Step <em>{step.n}</em>
                </span>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>

        <p className={styles.footNote}>
          Have anything to ask?{' '}
          <a href="/contact-us/" className={styles.footNoteLink}>
            Contact us any time.
          </a>
        </p>

      </div>
    </section>
  );
}
