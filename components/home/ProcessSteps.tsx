import Link from 'next/link';
import { ArrowRight, Compass, GraduationCap, FileCheck2, PlaneTakeoff } from 'lucide-react';
import styles from './ProcessSteps.module.css';

/* 4-Step Road Map with custom icons */
const STEPS = [
  {
    title: 'Personalized Counselling',
    text: 'One-on-one sessions to evaluate your academic profile, career ambitions, budget, and destination preferences.',
    icon: Compass,
  },
  {
    title: 'Course & University Selection',
    text: 'Strategic shortlisting of world-class universities and high-ROI programs matched to your career trajectory.',
    icon: GraduationCap,
  },
  {
    title: 'Application & Visa Assistance',
    text: 'Complete support for SOP drafting, credential evaluations, financial paperwork, and mock visa interviews.',
    icon: FileCheck2,
  },
  {
    title: 'Pre-Departure & Arrival Support',
    text: 'Comprehensive assistance covering forex, flight bookings, accommodation arrangements, and campus transition.',
    icon: PlaneTakeoff,
  },
];

export default function ProcessSteps() {
  return (
    <section className={styles.section} id="process" aria-labelledby="process-heading">
      <div className={`container ${styles.container}`}>

        {/* Section Header */}
        <div className={styles.header}>
          <h2 className={styles.heading} id="process-heading">
            Simple. Transparent.{' '}
            <span className={styles.goldText}>Student-Focused.</span>
          </h2>

          <p className={styles.subheading}>
            A structured, stress-free roadmap designed to take you seamlessly from your first consultation to your first day on campus.
          </p>
        </div>

        {/* Steps Grid — Elevated Luxury Cards */}
        <div className={styles.stepsGrid} role="list">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className={styles.stepCard} role="listitem">
                {/* Top Icon Circle */}
                <div className={styles.cardTop}>
                  <div className={styles.iconCircle}>
                    <Icon size={22} className={styles.icon} aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>

                {/* Bottom Step Progress Line Indicator */}
                <div className={styles.progressLine} aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* Footnote with Contact Link */}
        <div className={styles.footNoteRow}>
          <p className={styles.footNote}>
            Have questions about the roadmap?{' '}
            <Link href="/contact-us/" className={styles.footNoteLink}>
              <span>Speak with a counselor today</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
}
