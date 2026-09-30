import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './TestPrepSection.module.css';

const EXAMS = ['IELTS', 'TOEFL', 'PTE', 'GRE', 'GMAT', 'SAT'];

export default function TestPrepSection() {
  return (
    <section className={styles.section} aria-labelledby="testprep-heading">
      <div className={`container ${styles.inner}`}>

        {/* LEFT — student image with architectural gold frame */}
        <div className={styles.imageCol}>
          <div className={styles.imageWrapper}>
            <div className={styles.goldFrame} aria-hidden="true" />
            <div className={styles.imageContainer}>
              <Image
                src="/images/about/test-prep.jpg"
                alt="Students in a classroom preparing for international exams"
                width={700}
                height={520}
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Subtle floating trust pill */}
            <div className={styles.floatingPill}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              <span>Target Band 7.5+ Mentorship</span>
            </div>
          </div>
        </div>

        {/* RIGHT — content */}
        <div className={styles.content}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrowText}>TEST PREPARATION</span>
          </div>

          <h2 className={styles.heading} id="testprep-heading">
            Ace Every Exam with{' '}
            <span className={styles.goldText}>Expert Coaching</span>
          </h2>

          <p className={styles.body}>
            Our comprehensive practice program is carefully tailored to meet your
            specific exam requirements, whether it’s IELTS, TOEFL, PTE,
            GMAT, GRE, or SAT. We provide structured guidance, regular mock tests,
            and detailed performance feedback to help you strengthen weak areas and build unshakable confidence.
          </p>

          <p className={styles.body}>
            Through consistent practice and certified mentoring, our experienced
            consultants ensure you develop the exact strategies needed to achieve
            your target scores and excel in your study abroad journey.
          </p>

          {/* Minimalist Exam Badges */}
          <div className={styles.examBadges} aria-label="Supported examinations">
            {EXAMS.map((exam) => (
              <span key={exam} className={styles.examBadge}>
                {exam}
              </span>
            ))}
          </div>

          {/* Primary Action Button */}
          <div className={styles.actionWrap}>
            <Link href="/contact-us/" className={styles.ctaBtn}>
              <span>Book Free Diagnostic Test</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
