import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/site';
import ContactForm from '@/components/forms/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Prerna Global Services for a free overseas education consultation. Reach us by phone, WhatsApp, email, or visit our Pune office in Talegaon Dabhade.',
  alternates: { canonical: '/contact-us/' },
};

const contactItems = [
  {
    icon: <Phone size={20} />,
    label: 'Call / WhatsApp',
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
  },
  {
    icon: <MapPin size={20} />,
    label: 'Office Address',
    value: siteConfig.contact.address,
    href: undefined,
  },
  {
    icon: <Clock size={20} />,
    label: 'Office Hours',
    value: 'Monday – Saturday, 10:00 AM – 7:00 PM IST',
    href: undefined,
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Neelaya, Old Mumbai-Pune Highway, Talegaon Dabhade',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '410506',
    addressCountry: 'IN',
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Page Hero — split composition ── */}
      <section className={styles.pageHero} aria-labelledby="contact-h1">
        <div className={styles.heroInner}>

          {/* LEFT: text */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>Get in Touch</span>
            <h1 className={styles.heroTitle} id="contact-h1">
              Your Study Abroad<br />
              <span className={styles.heroAccent}>Journey Starts Here</span>
            </h1>
            <p className={styles.heroSub}>
              Reach out to our expert counsellors via phone, WhatsApp, or the form below.
              Your first consultation is always free.
            </p>
            <div className={styles.heroCtas}>
              <a href={siteConfig.whatsapp.href} target="_blank" rel="noopener noreferrer" className={styles.heroCta}>
                Chat on WhatsApp
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href={siteConfig.contact.phoneHref} className={styles.heroCtaOutline}>
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          {/* RIGHT: editorial photo */}
          <div className={styles.heroVisual} style={{ position: 'relative' }}>
            <Image
              src="/images/hero/hero-contact.jpg"
              alt="Prerna Global counsellor welcoming a student"
              fill
              className={styles.heroPhoto}
              quality={90}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className={styles.heroPhotoFade} style={{ position: 'absolute', inset: 0 }} />
          </div>

        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>

            {/* LEFT — info */}
            <div className={styles.contactInfo}>
              <div>
                <span className="eyebrow">Reach Out Directly</span>
                <h2 className={styles.contactInfoTitle}>
                  We&apos;d Love to Hear From You
                </h2>
                <p className={styles.contactInfoBody}>
                  Our counsellors are available to answer your questions about
                  studying abroad, university admissions, visas, and everything in between.
                </p>
              </div>

              <address style={{ fontStyle: 'normal' }}>
                <div className={styles.contactDetails}>
                  {contactItems.map((item) => (
                    <div key={item.label} className={styles.contactDetailItem}>
                      <div className={styles.contactDetailIcon} aria-hidden="true">
                        {item.icon}
                      </div>
                      <div className={styles.contactDetailText}>
                        <span className={styles.contactDetailLabel}>{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className={styles.contactDetailLink}>
                            {item.value}
                          </a>
                        ) : (
                          <span className={styles.contactDetailValue}>{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </address>

              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.waBtn}
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* RIGHT — form */}
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
