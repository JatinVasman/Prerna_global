import Image from 'next/image';
import styles from './TestPrepSection.module.css';

export default function TestPrepSection() {
  return (
    <section className={styles.section} aria-labelledby="testprep-heading">
      <div className={`container ${styles.inner}`}>

        {/* LEFT — student image */}
        <div className={styles.imageCol} aria-hidden="true">
          <Image
            src="/images/about/test-prep.jpg"
            alt="Students in a classroom preparing for international exams"
            width={560}
            height={480}
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* RIGHT — content */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>Test Preparation</p>
          <h2 className={styles.heading} id="testprep-heading">
            Ace Every Exam with{' '}
            <span className={styles.headingAccent}>Expert Coaching</span>
          </h2>
          <p className={styles.body}>
            Our comprehensive practice program is carefully tailored to meet your
            specific exam requirements, whether it&rsquo;s IELTS, TOEFL, ACT,
            GMAT, GRE, SAT, or any other international test. We provide structured
            guidance, regular mock tests, and detailed performance feedback to help
            you strengthen your weak areas and build confidence.
          </p>
          <p className={styles.body}>
            Through consistent practice and expert mentoring, our experienced
            foreign education consultants ensure you develop the skills and
            strategies needed to achieve your desired test scores and excel in
            your study abroad journey.
          </p>
        </div>

      </div>
    </section>
  );
}
