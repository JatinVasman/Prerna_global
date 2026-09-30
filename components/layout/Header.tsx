'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/site';
import MobileNav from './MobileNav';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | HTMLElement, opts?: { duration?: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        const hero = document.getElementById('hero');
        if (hero) {
          hero.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
      if (window.location.hash) {
        window.history.replaceState(null, '', '/');
      }
    }
  };

  return (
    <>
      <header className={`${styles.headerWrapper}${scrolled ? ` ${styles.scrolled}` : ''}`}>
        <div className={styles.pillContainer}>
          {/* Logo with enlarged display size and natural breathing room */}
          <Link
            href="/"
            onClick={handleHomeClick}
            className={styles.logo}
            aria-label="Prerna Global Services — Home"
          >
            <div className={styles.logoImgWrapper}>
              <Image
                src="/images/brand/logo-tight.png"
                alt="Prerna Global Services"
                width={150}
                height={78}
                className={styles.logoImage}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.nav} aria-label="Primary navigation">
            {navigation.map((item) => {
              const isHome = item.href === '/';
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={isHome ? handleHomeClick : undefined}
                  className={`${styles.navLink}${isActive(item.href) ? ` ${styles.active}` : ''}`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Area: Free Consultation CTA */}
          <div className={styles.headerCta}>
            <Link href="/contact-us/" className={styles.ctaButton}>
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className={styles.menuToggle}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

