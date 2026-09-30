import Link from 'next/link';
import {
  BookOpen, Users, Globe, GraduationCap, FileCheck,
  FileText, Banknote, Stamp, Home, Plane, Ticket,
  ArrowRight
} from 'lucide-react';
import { services } from '@/data/services';
import styles from './ServicesGrid.module.css';

// Map icon string names to components (avoids shipping all lucide icons)
const iconMap: Record<string, React.ReactNode> = {
  BookOpen:     <BookOpen size={22} />,
  Users:        <Users size={22} />,
  Globe:        <Globe size={22} />,
  GraduationCap: <GraduationCap size={22} />,
  FileCheck:    <FileCheck size={22} />,
  FileText:     <FileText size={22} />,
  Banknote:     <Banknote size={22} />,
  Stamp:        <Stamp size={22} />,
  Home:         <Home size={22} />,
  Plane:        <Plane size={22} />,
  PassportIcon: <Ticket size={22} />,
};

interface ServicesGridProps {
  /** Number of services to display. Defaults to all. */
  limit?: number;
  showViewAll?: boolean;
}

export default function ServicesGrid({ limit, showViewAll = true }: ServicesGridProps) {
  const displayed = limit ? services.slice(0, limit) : services;

  return (
    <section className={`section ${styles.section}`} id="services">
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <h6 className={styles.eyebrow}>What We Offer</h6>
            <h2 className={styles.heading}>Our Services</h2>
          </div>
          {showViewAll && limit && services.length > limit && (
            <Link href="/services/" className="btn btn--primary">
              See All Our Services
            </Link>
          )}
        </div>

        <div className={styles.grid} role="list">
          {displayed.map((service) => (
            <article key={service.id} className={styles.card} role="listitem">
              <div className={styles.cardIcon} aria-hidden="true">
                {iconMap[service.icon] ?? <Globe size={22} />}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
              <Link href="/services/" className={styles.cardLink}>
                Learn more <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
}
