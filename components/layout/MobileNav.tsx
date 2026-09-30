'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, Phone, Mail, ChevronRight } from 'lucide-react';
import { navigation, siteConfig } from '@/data/site';
import styles from './MobileNav.module.css';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Prevent body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* Overlay */}
      <div
        className={styles.overlay}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <nav id="mobile-nav" className={styles.nav} aria-label="Mobile navigation">
        {/* Header */}
        <div className={styles.header}>
          <Image
            src="/images/brand/logo.png"
            alt="Prerna Global Services"
            width={120}
            height={44}
            style={{ height: 44, width: 'auto', objectFit: 'contain' }}
          />
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <ul className={styles.links}>
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.link}${isActive(item.href) ? ` ${styles.active}` : ''}`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        <div className={styles.footer}>
          <a
            href={siteConfig.contact.phoneHref}
            className={styles.footerLink}
          >
            <Phone size={18} className={styles.footerLinkIcon} aria-hidden="true" />
            {siteConfig.contact.phone}
          </a>
          <a
            href={siteConfig.contact.emailHref}
            className={styles.footerLink}
          >
            <Mail size={18} className={styles.footerLinkIcon} aria-hidden="true" />
            {siteConfig.contact.email}
          </a>
          <Link
            href="/contact-us/"
            className="btn btn--primary"
            style={{ marginTop: 'var(--space-2)' }}
          >
            Free Consultation
          </Link>
        </div>
      </nav>
    </>
  );
}
