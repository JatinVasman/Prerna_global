'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import styles from './Testimonials.module.css';

// Authentic Google G Multicolor Icon
const GoogleGIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const AVATAR_GRADIENTS = [
  'linear-gradient(135deg, #0d9488 0%, #065f46 100%)',
  'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
  'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
  'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
  'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
  'linear-gradient(135deg, #059669 0%, #064e3b 100%)',
];

interface TestimonialsProps {
  limit?: number;
}

export default function Testimonials({ limit = 10 }: TestimonialsProps) {
  const items = testimonials.slice(0, limit);
  const total = items.length;
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Get 3 consecutive reviews wrapping around
  const visibleCards = [
    items[startIndex % total],
    items[(startIndex + 1) % total],
    items[(startIndex + 2) % total],
  ];

  return (
    <section
      className={styles.section}
      id="testimonials"
      aria-label="Student testimonials"
    >
      {/* Dark imperial teal textured overlay matching stats section */}
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={`container ${styles.container}`}>
        {/* Section Header with Our Signature Luxury Design Touch */}
        <div className={styles.sectionHeader}>
          <div className={styles.eyebrowWrap}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span className={styles.eyebrowText}>TESTIMONIALS</span>
          </div>
          <h2 className={styles.heading}>
            What Our Students <span className={styles.goldText}>Say</span>
          </h2>
        </div>

        {/* Horizontal Carousel Track matching reference orientation with old card design */}
        <div className={styles.carouselWrapper}>
          {/* Previous Arrow Button */}
          {total > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={prevSlide}
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
          )}

          {/* 3 Compact Testimonial Cards Side-by-Side */}
          <div className={styles.cardsTrack} role="list">
            {visibleCards.map((review, idx) => {
              const avatarBg = AVATAR_GRADIENTS[(startIndex + idx) % AVATAR_GRADIENTS.length];
              return (
                <article
                  key={`${review.id}-${startIndex}-${idx}`}
                  className={`${styles.card} ${idx === 1 ? styles.cardMiddle : ''} ${idx === 2 ? styles.cardThird : ''}`}
                  role="listitem"
                >
                  {/* Card Header: Avatar, Name, Date, Google G */}
                  <div className={styles.cardHeader}>
                    <div className={styles.authorGroup}>
                      <div
                        className={styles.avatar}
                        style={{ background: avatarBg }}
                        aria-hidden="true"
                      >
                        {review.name.charAt(0)}
                      </div>
                      <div className={styles.authorMeta}>
                        <h4 className={styles.authorName}>{review.name}</h4>
                        <span className={styles.authorDate}>
                          {new Date(review.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                          })}
                        </span>
                      </div>
                    </div>

                    <div className={styles.googleIconWrap} aria-hidden="true">
                      <GoogleGIcon />
                    </div>
                  </div>

                  {/* Stars Row */}
                  <div
                    className={styles.starsRow}
                    aria-label={`${review.rating} out of 5 stars`}
                    role="img"
                  >
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={15} fill="#E5B842" color="#E5B842" aria-hidden="true" />
                    ))}
                  </div>

                  {/* Review Excerpt */}
                  <p className={styles.reviewText}>
                    &ldquo;{review.review}&rdquo;
                  </p>

                  {/* Card Footer: Verified Google Review */}
                  <div className={styles.cardFooter}>
                    <div className={styles.badge}>
                      <GoogleGIcon />
                      <span className={styles.badgeText}>Verified Google Review</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Next Arrow Button */}
          {total > 1 && (
            <button
              type="button"
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={nextSlide}
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Slide Indicator Dots */}
        <div className={styles.dots} aria-label="Slide indicators">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.dot} ${i === startIndex ? styles.dotActive : ''}`}
              onClick={() => setStartIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
