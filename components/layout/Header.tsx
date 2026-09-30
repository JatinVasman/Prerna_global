'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import { navigation, siteConfig } from '@/data/site';
import MobileNav from './MobileNav';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className={`${styles.header}${scrolled ? ` ${styles.scrolled}` : ''}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Prerna Global Services — Home">
            <Image
              src="/images/brand/logo.png"
              alt="Prerna Global Services"
              width={140}
              height={52}
              className={styles.logoImage}
              style={{ width: 'auto', height: '48px' }}
              priority
            />
            <span className={styles.logoText} aria-hidden="true">
              <span className={styles.logoName}>Prerna Global</span>
              <span className={styles.logoTagline}>Study Abroad Experts</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.nav} aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink}${isActive(item.href) ? ` ${styles.active}` : ''}`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className={styles.headerCta}>
            <a
              href={siteConfig.contact.phoneHref}
              className={styles.phoneLink}
              aria-label={`Call us at ${siteConfig.contact.phone}`}
            >
              <Phone size={16} className={styles.phoneIcon} aria-hidden="true" />
              {siteConfig.contact.phone}
            </a>
            <Link href="/contact-us/" className="btn btn--primary btn--sm">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.menuToggle}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
