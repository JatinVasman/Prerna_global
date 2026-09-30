import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, User, Landmark, Handshake, GraduationCap } from 'lucide-react';
import UniversityCarousel from '@/components/home/UniversityCarousel';
import LeadBanner from '@/components/home/LeadBanner';
import Testimonials from '@/components/home/Testimonials';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Prerna Global Services — a trusted study abroad consultancy in Pune, Maharashtra. Our mission, expert guidance, and why students trust us.',
  alternates: { canonical: '/about-us/' },
};

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero: Standard 2-Column Luxury Layout ── */}
      <section className={styles.pageHero} aria-labelledby="about-h1">
        <div className={styles.ambientGlow} aria-hidden="true" />
        
        <div className={`container ${styles.heroInner}`}>
          {/* Left Column: Clean editorial typography & Radiant Gold CTA */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span className={styles.heroEyebrow}>ABOUT PRERNA GLOBAL</span>
            </div>

            <h1 className={styles.heroTitle} id="about-h1">
              Turning Study Abroad Dreams into{' '}
              <span className={styles.goldText}>Reality</span>
            </h1>

            <p className={styles.heroSub}>
              Personalized overseas education mentorship dedicated to guiding students through every step of their international university journey.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/contact-us/" className={styles.ctaButton}>
                <span>Meet Our Counsellors</span>
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Column: Framed Editorial Photo (16:9 Natural Ratio, Zero Distortion) */}
          <div className={styles.heroVisual}>
            <div className={styles.imageCard}>
              <Image
                src="/images/about/about-hero-showcase.jpg"
                alt="Prerna Global Services Overseas Education Counsellors"
                width={1200}
                height={675}
                className={styles.heroImg}
                quality={92}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── New About Us Section with Our Design Touch (Expanded Image Orientation) ── */}
      <section className={styles.aboutSection} aria-labelledby="about-section-h2">
        <div className={`container ${styles.aboutContainer}`}>

          {/* Left Column: Grand Overlapping Rounded Images with Expanded Orientation & Presence */}
          <div className={styles.visualCol}>
            <div className={styles.imageStack}>
              {/* Subtle Luxury Gold Ambient Frame Accent */}
              <div className={styles.goldFrameAccent} aria-hidden="true" />

              {/* Background Card: Grand Architectural Campus Card (Increased Height & Orientation) */}
              <div className={styles.campusCard}>
                <Image
                  src="/images/about/campus-architecture.jpg"
                  alt="Historic university campus architecture"
                  fill
                  className={styles.campusImg}
                  priority
                  sizes="(max-width: 960px) 100vw, 50vw"
                />
              </div>

              {/* Foreground Card: Prominent Indian Graduate Card (Expanded Scale & Presence) */}
              <div className={styles.graduateCard}>
                <Image
                  src="/images/about/indian-graduate.jpg"
                  alt="Successful Indian graduate student placed by Prerna Global Services"
                  fill
                  className={styles.graduateImg}
                  priority
                  sizes="(max-width: 960px) 95vw, 45vw"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy with Our Design Touch */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrowWrapLight}>
              <span className={styles.eyebrowDotLight} aria-hidden="true" />
              <span className={styles.eyebrowTextLight}>WHO WE ARE</span>
            </div>

            <h2 className={styles.sectionHeading} id="about-section-h2">
              About <span className={styles.goldTextLight}>Us</span>
            </h2>

            <div className={styles.bodyTexts}>
              <p>
                Prerna Global Services is a leading overseas education consultancy dedicated to
                helping students achieve their dreams of studying abroad. With personalized
                counselling, expert guidance, and complete end to end support, we make the process
                of international education simple, transparent, and successful.
              </p>
              <p>
                We understand that every student’s journey is unique. Our experienced counsellors
                take the time to know your goals, academic background, and preferences to guide
                you toward the best fit universities and courses across countries like the USA, UK,
                Canada, Australia, and more.
              </p>
              <p>
                From IELTS coaching and university shortlisting to visa assistance and pre departure
                orientation, Prerna Global Services stands by you at every step of the journey. Our
                mission is to empower students to make informed decisions, gain global exposure,
                and build a successful future through world-class education.
              </p>
              <p>
                With a commitment to integrity, excellence, and student success, we’ve built lasting
                relationships with students and parents across India who trust us as their global
                education partner. At Prerna Global Services, your dream is our priority — and your
                success is our pride.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── University Partners Carousel ── */}
      <UniversityCarousel />

      <Testimonials />

      {/* ── Why Choose Us: Your Success Is Our Priority (With Our Design Touch) ── */}
      <section className={styles.whyChooseSection} aria-labelledby="why-choose-h2">
        <div className="container">
          <div className={styles.whyChooseInner}>
            {/* Left Column: Editorial Content with Signature Luxury Design Touch */}
            <div className={styles.whyChooseContent}>
              <div className={styles.eyebrowWrapLight}>
                <span className={styles.eyebrowDotLight} aria-hidden="true" />
                <span className={styles.eyebrowTextLight}>WHY CHOOSE US</span>
              </div>

              <h2 className={styles.whyHeading} id="why-choose-h2">
                Your Success Is Our <span className={styles.goldTextLight}>Priority</span>
              </h2>

              <p className={styles.whyDescription}>
                At Prerna Global Services, we combine experience, integrity, and personalized support to make your study abroad journey effortless and successful. Our expert counsellors, proven track record, and student-first approach ensure you get the right guidance from start to finish.
              </p>

              {/* 2x2 Feature Grid with Signature Radiant Gold Badges */}
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIconBadge} aria-hidden="true">
                    <User size={22} />
                  </div>
                  <h3 className={styles.featureTitle}>Expert Counsellors</h3>
                  <p className={styles.featureText}>
                    Get guidance from certified professionals with years of experience in overseas education and visa processes.
                  </p>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconBadge} aria-hidden="true">
                    <Landmark size={22} />
                  </div>
                  <h3 className={styles.featureTitle}>End-To-End Support</h3>
                  <p className={styles.featureText}>
                    From course selection to pre-departure, we assist you at every stage with care and precision.
                  </p>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconBadge} aria-hidden="true">
                    <Handshake size={22} />
                  </div>
                  <h3 className={styles.featureTitle}>Transparent Process</h3>
                  <p className={styles.featureText}>
                    We maintain complete transparency with clear timelines, honest advice, and no hidden charges.
                  </p>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIconBadge} aria-hidden="true">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className={styles.featureTitle}>Proven Success Record</h3>
                  <p className={styles.featureText}>
                    Hundreds of students have achieved their global education goals through our dedicated support.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Overlapping Photos with Signature Ambient Gold Frame (Zero image reuse) */}
            <div className={styles.whyVisual}>
              <div className={styles.whyGoldFrame} aria-hidden="true" />

              <div className={styles.photoTop}>
                <Image
                  src="/images/about/students-group.jpg"
                  alt="Three university students smiling in campus classroom"
                  width={720}
                  height={580}
                  className={styles.whyImg}
                  quality={92}
                  sizes="(max-width: 960px) 90vw, 45vw"
                />
              </div>

              <div className={styles.photoBottom}>
                <Image
                  src="/images/about/team-discussion.jpg"
                  alt="Senior educational counsellors conducting an interactive mentoring session"
                  width={720}
                  height={560}
                  className={styles.whyImg}
                  quality={92}
                  sizes="(max-width: 960px) 90vw, 45vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadBanner
        title="Have Questions? We Have Answers."
        subtitle="Book a free counselling call and let us map out your best path to a global education."
      />
    </>
  );
}
