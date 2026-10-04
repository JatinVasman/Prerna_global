'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from 'lucide-react';
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
  'linear-gradient(135deg, #00989E 0%, #008287 100%)',
  'linear-gradient(135deg, #0E3336 0%, #041E20 100%)',
  'linear-gradient(135deg, #D49B1F 0%, #C88D1B 100%)',
  'linear-gradient(135deg, #00989E 0%, #08292B 100%)',
  'linear-gradient(135deg, #0E2A32 0%, #008287 100%)',
  'linear-gradient(135deg, #E6A728 0%, #C88D1B 100%)',
];

interface TestimonialsProps {
  limit?: number;
}

export default function Testimonials({ limit = 10 }: TestimonialsProps) {
  const items = testimonials.slice(0, limit);
  const total = items.length;
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isGridView, setIsGridView] = useState(false);

  // Responsive cards per view calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Get consecutive reviews based on active cardsPerView
  const visibleCards = [];
  for (let i = 0; i < cardsPerView; i++) {
    visibleCards.push(items[(startIndex + i) % total]);
  }

  const renderCard = (review: (typeof testimonials)[0], avatarIdx: number) => {
    const avatarBg = AVATAR_GRADIENTS[avatarIdx % AVATAR_GRADIENTS.length];
    return (
      <article
        key={review.id}
        className={styles.card}
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
            <Star key={i} size={15} fill="#D49B1F" color="#D49B1F" aria-hidden="true" />
          ))}
        </div>

        {/* Review Text - Fully visible without truncation */}
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
  };

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
          <div className={styles.ratingBadge}>
            <div className={styles.ratingStars} aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#D49B1F" color="#D49B1F" />
              ))}
            </div>
            <span className={styles.ratingText}>
              <strong>5.0 Rating</strong> • 50+ Verified Google Reviews
            </span>
          </div>
        </div>

        {/* Display either All Reviews Grid OR Smooth Carousel */}
        {isGridView ? (
          <div className={styles.allReviewsGrid} role="list">
            {items.map((review, idx) => renderCard(review, idx))}
          </div>
        ) : (
          <div className={styles.carouselWrapper}>
            {/* Desktop / Tablet Previous Arrow (Dedicated gutter so it NEVER overlaps card content) */}
            {total > 1 && (
              <button
                type="button"
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={prevSlide}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
            )}

            {/* Testimonial Cards Track */}
            <div
              className={styles.cardsTrack}
              style={{
                gridTemplateColumns: `repeat(${cardsPerView}, 1fr)`,
              }}
              role="list"
            >
              {visibleCards.map((review, idx) =>
                renderCard(review, startIndex + idx)
              )}
            </div>

            {/* Desktop / Tablet Next Arrow (Dedicated gutter so it NEVER overlaps card content) */}
            {total > 1 && (
              <button
                type="button"
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={nextSlide}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} aria-hidden="true" />
              </button>
            )}
          </div>
        )}

        {/* Carousel Bottom Controls (Indicators & Mobile Nav Buttons) */}
        {!isGridView && (
          <div className={styles.bottomControls}>
            <button
              type="button"
              className={styles.mobileNavBtn}
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              <span>Prev</span>
            </button>

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

            <button
              type="button"
              className={styles.mobileNavBtn}
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <span>Next</span>
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}

        {/* View All Reviews / Switch to Carousel Toggle */}
        <div className={styles.viewToggleWrap}>
          <button
            type="button"
            className={styles.viewToggleBtn}
            onClick={() => setIsGridView((prev) => !prev)}
            aria-expanded={isGridView}
          >
            {isGridView ? (
              <>
                <SlidersHorizontal size={15} aria-hidden="true" />
                <span>Switch to Carousel View</span>
              </>
            ) : (
              <>
                <LayoutGrid size={15} aria-hidden="true" />
                <span>View All {total} Student Reviews</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
