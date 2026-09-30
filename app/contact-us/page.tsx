import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
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

      {/* ── Page Hero: Standard 2-Column Luxury Layout ── */}
      <section className={styles.pageHero} aria-labelledby="contact-h1">
        <div className={styles.ambientGlow} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          {/* Left Column: Clean editorial typography & Radiant Gold CTA */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span className={styles.heroEyebrow}>GET IN TOUCH</span>
            </div>

            <h1 className={styles.heroTitle} id="contact-h1">
              Your Study Abroad{' '}
              <span className={styles.goldText}>Journey Starts Here</span>
            </h1>

            <p className={styles.heroSub}>
              Reach out to our senior counsellors via WhatsApp, phone, or the consultation form.
              Your initial profile assessment is always 100% free and confidential.
            </p>

            <div className={styles.heroCtas}>
              <a
                href={siteConfig.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaButton}
              >
                <span>Chat on WhatsApp</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>

              <a href={siteConfig.contact.phoneHref} className={styles.ctaButtonOutline}>
                <Phone size={16} aria-hidden="true" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Framed Photo (16:9 ratio, zero distortion) */}
          <div className={styles.heroVisual}>
            <div className={styles.imageCard}>
              <Image
                src="/images/hero/hero-contact.jpg"
                alt="Prerna Global counsellor welcoming an ambitious student for a personalized consultation"
                width={1376}
                height={768}
                className={styles.heroImg}
                quality={92}
                priority
                sizes="(max-width: 960px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Details & Form Section ── */}
      <section className={styles.contactSection} aria-labelledby="contact-form-h">
        <div className="container">
          <div className={styles.contactGrid}>

            {/* Left Column: Direct Info & Reassurance */}
            <div className={styles.contactInfo}>
              <div className={styles.eyebrowWrapLight}>
                <span className={styles.eyebrowDotLight} aria-hidden="true" />
                <span className={styles.eyebrowTextLight}>REACH OUT DIRECTLY</span>
              </div>

              <h2 className={styles.contactInfoTitle} id="contact-form-h">
                We’d Love to{' '}
                <span className={styles.goldTextLight}>Hear From You</span>
              </h2>

              <p className={styles.contactInfoBody}>
                Our senior counsellors in Talegaon Dabhade, Pune are available to answer your questions about universities, course selection, IELTS preparation, and student visa approvals.
              </p>

              {/* Contact Detail Cards */}
              <div className={styles.contactDetails}>
                {contactItems.map((item) => (
                  <div key={item.label} className={styles.contactCard}>
                    <div className={styles.iconCircle} aria-hidden="true">
                      {item.icon}
                    </div>
                    <div className={styles.contactCardText}>
                      <span className={styles.cardLabel}>{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className={styles.cardLink}>
                          {item.value}
                        </a>
                      ) : (
                        <span className={styles.cardValue}>{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Quick Action Button */}
              <div className={styles.quickActionWrap}>
                <a
                  href={siteConfig.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.waBtn}
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Instant Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Luxury Minimal Form Card */}
            <div className={styles.formCard}>
              <div className={styles.formCardHeader}>
                <h3 className={styles.formTitle}>Send Us a Message</h3>
                <p className={styles.formSub}>
                  Fill out your details below and an education advisor will reach out to you with tailored advice.
                </p>
              </div>

              <ContactForm />
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
