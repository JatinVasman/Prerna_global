'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/faqs';
import styles from './FaqSection.module.css';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={styles.section} id="faqs" aria-labelledby="faq-heading">
      <div className={`container ${styles.container}`}>

        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrowText}>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className={styles.heading} id="faq-heading">
            Everything You Need to Know{' '}
            <span className={styles.goldText}>Before Getting Started</span>
          </h2>

          <p className={styles.subheading}>
            Clear answers to common questions about international admissions, test prep, visa applications, and student support.
          </p>
        </div>

        {/* Content row: accordion left, luxury query panel right */}
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
                      type="button"
                      className={styles.trigger}
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      id={`faq-trigger-${i}`}
                    >
                      <span className={styles.question}>{faq.question}</span>
                      <div className={styles.chevronWrap} aria-hidden="true">
                        <ChevronDown size={18} className={styles.chevron} />
                      </div>
                    </button>
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${i}`}
                      hidden={!isOpen}
                      className={styles.answerWrap}
                    >
                      <p className={styles.answer}>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — luxury dark teal & gold query card */}
          <div className={styles.queryPanel}>
            <div className={styles.queryGlow} aria-hidden="true" />
            
            <div className={styles.queryIcon} aria-hidden="true">
              <HelpCircle size={28} />
            </div>

            <h3 className={styles.queryTitle}>
              Have a Query About Studying Abroad?
            </h3>

            <p className={styles.queryText}>
              Reach out to our experienced counsellors for personalized guidance
              and dedicated support tailored to your international education dreams.
            </p>

            <Link href="/contact-us/" className={styles.queryBtn}>
              <span>Talk to an Expert</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
