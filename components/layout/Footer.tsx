import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { navigation, siteConfig } from '@/data/site';
import styles from './Footer.module.css';

const services = [
  { label: 'IELTS Coaching', href: '/services/' },
  { label: 'University Admission', href: '/services/' },
  { label: 'Visa Support', href: '/services/' },
  { label: 'SOP & Documentation', href: '/services/' },
  { label: 'Education Loan', href: '/services/' },
  { label: 'Pre-Departure Support', href: '/services/' },
];

const destinations = [
  { label: 'Study in UK', href: '/destinations/' },
  { label: 'Study in USA', href: '/destinations/' },
  { label: 'Study in Canada', href: '/destinations/' },
  { label: 'Study in Australia', href: '/destinations/' },
  { label: 'Study in Germany', href: '/destinations/' },
  { label: 'Study in Ireland', href: '/destinations/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.logo} aria-label="Prerna Global Services — Home">
                <Image
                  src="/images/brand/logo.png"
                  alt="Prerna Global Services"
                  width={150}
                  height={56}
                  className={styles.logoImg}
                />
              </Link>
              <p className={styles.tagline}>&ldquo;{siteConfig.tagline}&rdquo;</p>
              <p className={styles.description}>
                Prerna Global Services is a trusted overseas education consultancy based in Pune, 
                helping students achieve their dreams of studying abroad since 2020.
              </p>
              <Link href="/contact-us/" className="btn btn--primary btn--sm" style={{ width: 'fit-content' }}>
                Get Free Consultation
              </Link>
            </div>

            {/* Navigation */}
            <nav aria-label="Footer navigation">
              <p className={styles.colTitle}>Quick Links</p>
              <ul className={styles.links}>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Destinations */}
            <nav aria-label="Study destinations">
              <p className={styles.colTitle}>Destinations</p>
              <ul className={styles.links}>
                {destinations.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <address style={{ fontStyle: 'normal' }}>
              <p className={styles.colTitle}>Contact Us</p>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <Phone size={16} className={styles.contactIcon} aria-hidden="true" />
                  <a href={siteConfig.contact.phoneHref} className={styles.contactLink}>
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <Mail size={16} className={styles.contactIcon} aria-hidden="true" />
                  <a href={siteConfig.contact.emailHref} className={styles.contactLink}>
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <MapPin size={16} className={styles.contactIcon} aria-hidden="true" />
                  <span className={styles.contactText}>
                    {siteConfig.contact.address}
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>{siteConfig.copyright}</p>
          <nav className={styles.bottomLinks} aria-label="Legal links">
            <a href="/contact-us/" className={styles.bottomLink}>Privacy Policy</a>
            <a href="/contact-us/" className={styles.bottomLink}>Terms of Service</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
