import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, GraduationCap, Globe, Landmark, ArrowRightCircle } from 'lucide-react';
import styles from './ServicesGrid.module.css';

interface FeaturedService {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  href: string;
}

const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: 'ielts-coaching',
    title: 'IELTS Coaching',
    description: 'Enhance your English proficiency with expert training to achieve top IELTS scores.',
    image: '/images/services/studying.jpg',
    icon: <User size={20} strokeWidth={2} />,
    href: '/services/',
  },
  {
    id: 'personalized-counselling',
    title: 'Personalized Counselling',
    description: 'Receive one-on-one guidance to choose the right academic and career path abroad.',
    image: '/images/services/corporate.jpg',
    icon: <GraduationCap size={20} strokeWidth={2} />,
    href: '/services/',
  },
  {
    id: 'country-finalization',
    title: 'Country Finalization',
    description: 'Select the best study destination based on your goals, budget, and preferences.',
    image: '/images/services/europe.jpg',
    icon: <Globe size={20} strokeWidth={2} />,
    href: '/services/',
  },
  {
    id: 'university-selection',
    title: 'University Selection',
    description: 'Get help shortlisting top universities that align with your interests and profile.',
    image: '/images/services/queens-belfast.jpg',
    icon: <Landmark size={20} strokeWidth={2} />,
    href: '/services/',
  },
];

interface ServicesGridProps {
  /** Number of services to display. Defaults to 4. */
  limit?: number;
  showViewAll?: boolean;
}

export default function ServicesGrid({ limit = 4, showViewAll = true }: ServicesGridProps) {
  const displayed = limit ? FEATURED_SERVICES.slice(0, limit) : FEATURED_SERVICES;

  return (
    <section className={styles.section} id="services" aria-labelledby="services-heading">
      <div className={`container ${styles.container}`}>

        {/* Section Header: Eyebrow + Heading Left, Action Button Right */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>What We Offer</p>
            <h2 className={styles.heading} id="services-heading">
              Our Services
            </h2>
          </div>

          {showViewAll && (
            <div className={styles.headerAction}>
              <Link href="/services/" className={styles.seeAllBtn}>
                <span>See All Our Services</span>
                <ArrowRightCircle size={18} aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>

        {/* 4-Column Luxury Card Grid matching Reference Layout */}
        <div className={styles.grid} role="list">
          {displayed.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={styles.cardLinkWrap}
            >
              <article className={styles.card} role="listitem">
                {/* Top Section: Title & Description */}
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardText}>{service.description}</p>
                </div>

                {/* Bottom Section: Rounded Image with Bottom-Left Icon Badge */}
                <div className={styles.cardMediaWrap}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.cardImg}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className={styles.iconBadge} aria-hidden="true">
                    {service.icon}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
