'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/faqs';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section} id="faqs" aria-labelledby="faq-heading">
      <div className="container">

        {/* ── Header row ── */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <h6 className={styles.eyebrow}>Frequently Asked Questions</h6>
            <h2 className={styles.heading} id="faq-heading">
              Everything You Need to Know{' '}
              <span className={styles.headingAccent}>Before Getting Started</span>
            </h2>
          </div>
          {/* Right header — empty in original (ec91c93) */}
        </div>

        {/* ── Content row: accordion left, CTA panel right ── */}
        <div className={styles.content}>

          {/* LEFT — accordion */}
          <div className={styles.accordionCol}>
            <div className={styles.list} role="list">
              {faqs.slice(0, 6).map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`${styles.item} ${isOpen ? styles.open : ''}`}
                    role="listitem"
                  >
                    <button
                      className={styles.trigger}
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-trigger-${i}`}
                    >
                      <span className={styles.question}>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={styles.chevron}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      hidden={!isOpen}
                    >
                      <p className={styles.answer}>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — query panel (ab71a96 icon-box + 5cbd8cb button) */}
          <div className={styles.queryPanel}>
            <div className={styles.queryIcon} aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <h3 className={styles.queryTitle}>
              Have a Query About Studying Abroad?
            </h3>
            <p className={styles.queryText}>
              Reach out to our experienced counsellors for personalized guidance
              and support for your international education plans.
            </p>
            <Link href="/contact-us/" className={`btn btn--lime btn--lg ${styles.queryBtn}`}>
              Talk to an Expert
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
