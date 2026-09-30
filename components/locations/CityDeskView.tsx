import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin,
  GraduationCap,
  CheckCircle2,
  FileCheck2,
  Compass,
  Landmark,
  ShieldCheck,
  PlaneTakeoff,
  ArrowRight,
  Phone,
  Clock,
  Building,
  HelpCircle,
} from 'lucide-react';
import type { LocationEntity, BlogArticle } from '@/types/seo';
import styles from './CityDeskView.module.css';

interface Props {
  city: LocationEntity;
  relatedBlogs: BlogArticle[];
}

export default function CityDeskView({ city, relatedBlogs }: Props) {
  const cityName = city.city_name;
  const stateName = city.state;

  const countrySlugMap: Record<string, string> = {
    UK: '/destinations/study-in-uk/',
    'United Kingdom': '/destinations/study-in-uk/',
    USA: '/destinations/study-in-usa/',
    'United States': '/destinations/study-in-usa/',
    Germany: '/destinations/study-in-germany/',
    Canada: '/destinations/study-in-canada/',
    Australia: '/destinations/study-in-australia/',
    Ireland: '/destinations/study-in-ireland/',
    'New Zealand': '/destinations/study-in-new-zealand/',
    France: '/destinations/study-in-france/',
  };

  const services = [
    {
      title: 'University & Course Selection',
      desc: `Expert shortlisting of accredited universities worldwide tailored to students and graduates from ${cityName}.`,
      icon: Compass,
    },
    {
      title: 'SOP, LOR & Resume Editing',
      desc: 'Institutional-grade statement of purpose refinement highlighting your unique academic achievements and aspirations.',
      icon: FileCheck2,
    },
    {
      title: 'Education Loan Assistance',
      desc: 'Collateral and non-collateral loan sanctioning support through top national and international lending partners.',
      icon: Landmark,
    },
    {
      title: 'Student Visa Support',
      desc: 'End-to-end visa dossier preparation, mock visa interviews, and biometrics appointment coordination.',
      icon: ShieldCheck,
    },
  ];

  const roadmapSteps = [
    { n: '01', title: 'Profile Assessment', desc: 'Detailed academic evaluation and destination matching.' },
    { n: '02', title: 'University Shortlisting', desc: 'Balanced selection of dream, target, and safe universities.' },
    { n: '03', title: 'Document Preparation', desc: 'Rigorous SOP, LOR, and financial statement review.' },
    { n: '04', title: 'Application Filing', desc: 'Direct portal submission and admission tracking.' },
    { n: '05', title: 'Visa & Pre-Departure', desc: 'Visa filing, forex, flight booking, and accommodation help.' },
  ];

  return (
    <div className={styles.page}>
      {/* 1. BREADCRUMBS */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.sep}>/</span>
            <Link href="/locations/">Locations</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.current}>{cityName}</span>
          </nav>
        </div>
      </div>

      {/* 2. HERO BANNER */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.proximityBadge}>
              <MapPin size={14} className={styles.badgeIcon} />
              <span>{city.office_proximity}</span>
            </div>

            <h1 className={styles.heroTitle}>
              Best Study Abroad Consultant in{' '}
              <span className={styles.goldText}>{cityName}</span>
            </h1>

            <p className={styles.heroSubtitle}>
              {city.consultation_note}
            </p>

            {/* TRUST STRIP */}
            <div className={styles.trustStrip}>
              <div className={styles.trustItem}>
                <CheckCircle2 size={16} className={styles.trustIcon} />
                <span><strong>99%+</strong> Visa Approval Track Record</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={16} className={styles.trustIcon} />
                <span>Certified International Counselors</span>
              </div>
              <div className={styles.trustItem}>
                <CheckCircle2 size={16} className={styles.trustIcon} />
                <span>Direct Pune Head Office Oversight</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className={styles.heroActions}>
              <Link href="/contact-us/" className={styles.goldBtn}>
                <span>Book Free 1-on-1 Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/destinations/" className={styles.outlineBtn}>
                <span>Explore Country Pathways</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 3. ACADEMIC ECOSYSTEM IN CITY */}
      <section className={styles.ecosystemSection} aria-labelledby="ecosystem-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPre}>LOCAL APPLICANT PROFILE</span>
            <h2 id="ecosystem-heading" className={styles.sectionH2}>
              Academic Feeder Network &amp; Testing Venues in {cityName}
            </h2>
            <p className={styles.sectionDesc}>
              Prerna Global Services regularly assists graduates and scholars from leading colleges and universities in {cityName}:
            </p>
          </div>

          {/* Feeder Colleges Verified Pills */}
          <div className={styles.collegesGrid}>
            {city.feeder_colleges.map((college, idx) => (
              <div key={idx} className={styles.collegePill}>
                <GraduationCap size={18} className={styles.collegeIcon} />
                <span>{college}</span>
              </div>
            ))}
          </div>

          {/* High-Contrast Testing & VFS Info Box */}
          <div className={styles.infoBoxGrid}>
            <div className={styles.infoBox}>
              <div className={styles.infoBoxHeader}>
                <Clock size={20} className={styles.infoBoxIcon} />
                <h3>Authorized Exam Centers</h3>
              </div>
              <p>{city.exam_centers}</p>
            </div>

            <div className={styles.infoBox}>
              <div className={styles.infoBoxHeader}>
                <Building size={20} className={styles.infoBoxIcon} />
                <h3>Nearest Visa Application Center</h3>
              </div>
              <p>{city.vfs_center}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. END-TO-END ASSISTANCE GRID */}
      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPre}>OUR EXPERTISE</span>
            <h2 id="services-heading" className={styles.sectionH2}>
              Comprehensive Overseas Education Advisory for {cityName}
            </h2>
            <p className={styles.sectionDesc}>
              Personalized one-on-one assistance to take you smoothly from university selection to arrival on campus:
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={styles.serviceCard}>
                  <div className={styles.serviceIconWrap}>
                    <Icon size={24} className={styles.serviceIcon} />
                  </div>
                  <h3 className={styles.serviceTitle}>{item.title}</h3>
                  <p className={styles.serviceDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. PREFERRED GLOBAL DESTINATIONS */}
      {city.popular_destinations && Object.keys(city.popular_destinations).length > 0 && (
        <section className={styles.destSection} aria-labelledby="dest-heading">
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionPre}>GLOBAL STUDY PATHWAYS</span>
              <h2 id="dest-heading" className={styles.sectionH2}>
                Preferred Study Destinations for {cityName} Students
              </h2>
              <p className={styles.sectionDesc}>
                High-ROI degrees, post-study work visas, and intake timelines:
              </p>
            </div>

            <div className={styles.destGrid}>
              {Object.entries(city.popular_destinations).map(([country, details]) => {
                const destUrl = countrySlugMap[country] || '/destinations/';
                return (
                  <article key={country} className={styles.destCard}>
                    <div className={styles.destBadge}>{country}</div>
                    <h3 className={styles.destCountry}>Study in {country}</h3>
                    <p className={styles.destDetails}>{details}</p>
                    <Link href={destUrl} className={styles.destLink}>
                      <span>Explore {country} Pathways</span>
                      <ArrowRight size={14} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 6. 5-STEP ROADMAP */}
      <section className={styles.roadmapSection} aria-labelledby="roadmap-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionPre}>PROVEN ADMISSIONS METHODOLOGY</span>
            <h2 id="roadmap-heading" className={styles.sectionH2}>
              Your 5-Step Journey to Global Classrooms
            </h2>
            <p className={styles.sectionDesc}>
              A transparent, structured roadmap designed for seamless execution:
            </p>
          </div>

          <div className={styles.roadmapGrid}>
            {roadmapSteps.map((step) => (
              <div key={step.n} className={styles.roadmapCard}>
                <span className={styles.stepNum}>{step.n}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 1-ON-1 LOCAL ADVISORY DESK SHOWCASE */}
      <section className={styles.advisorySection}>
        <div className="container">
          <div className={styles.advisoryCard}>
            <div className={styles.advisoryContent}>
              <span className={styles.advisoryBadge}>DEDICATED ADVISORY DESK</span>
              <h2 className={styles.advisoryTitle}>
                How We Support Students in {cityName}, {stateName}
              </h2>
              <p className={styles.advisoryDesc}>
                Whether you prefer remote digital counseling via video meetings or wish to visit our Pune Head Office,
                our dedicated counseling desk guarantees uninterrupted guidance with direct access to senior admissions heads.
              </p>
              <div className={styles.advisoryList}>
                <div className={styles.advItem}>
                  <CheckCircle2 size={16} className={styles.advIcon} />
                  <span>Personalized 1-on-1 profile evaluation &amp; course shortlisting</span>
                </div>
                <div className={styles.advItem}>
                  <CheckCircle2 size={16} className={styles.advIcon} />
                  <span>Direct WhatsApp and phone assistance during business hours</span>
                </div>
                <div className={styles.advItem}>
                  <CheckCircle2 size={16} className={styles.advIcon} />
                  <span>Secure digital document uploads and portal application filing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. EXPERT KNOWLEDGE HUB (CROSS-LINKED BLOGS) */}
      {relatedBlogs.length > 0 && (
        <section className={styles.blogsSection} aria-labelledby="blogs-heading">
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionPre}>EXPERT ADVICE</span>
              <h2 id="blogs-heading" className={styles.sectionH2}>
                Recommended Study Abroad Guides
              </h2>
              <p className={styles.sectionDesc}>
                Essential insights curated by certified overseas education advisors:
              </p>
            </div>

            <div className={styles.blogsGrid}>
              {relatedBlogs.map((b) => (
                <article key={b.slug} className={styles.blogCard}>
                  <div className={styles.blogThumbWrap}>
                    <Image
                      src={b.featured_image || '/images/brand/logo-tight.png'}
                      alt={b.featured_image_alt || b.title}
                      width={380}
                      height={200}
                      className={styles.blogImg}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <span className={styles.blogCategoryBadge}>{b.category_name}</span>
                  </div>
                  <div className={styles.blogBody}>
                    <span className={styles.readTime}>{b.read_time}</span>
                    <h3 className={styles.blogTitle}>
                      <Link href={`/blog/${b.slug}/`}>{b.title}</Link>
                    </h3>
                    <p className={styles.blogExcerpt}>{b.excerpt.substring(0, 110)}...</p>
                    <Link href={`/blog/${b.slug}/`} className={styles.readBtn}>
                      <span>Read Complete Guide</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. FAQ ACCORDION */}
      {city.faqs && city.faqs.length > 0 && (
        <section className={styles.faqSection} aria-labelledby="faqs-heading">
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionPre}>COMMON INQUIRIES</span>
              <h2 id="faqs-heading" className={styles.sectionH2}>
                Frequently Asked Questions — {cityName}
              </h2>
              <p className={styles.sectionDesc}>
                Clear answers for students and parents from {cityName} regarding study abroad applications:
              </p>
            </div>

            <div className={styles.faqList}>
              {city.faqs.map((faq, idx) => (
                <details key={idx} className={styles.faqItem} open={idx === 0}>
                  <summary className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <span className={styles.faqToggle}>+</span>
                  </summary>
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. FINAL HIGH-CONVERSION STRIP */}
      <section className={styles.ctaStripSection}>
        <div className="container">
          <div className={styles.ctaStripCard}>
            <span className={styles.ctaStripBadge}>READY TO START YOUR APPLICATION?</span>
            <h2 className={styles.ctaStripTitle}>
              Connect with Our Study Abroad Counselor in {cityName} Today
            </h2>
            <p className={styles.ctaStripDesc}>
              Get your profile assessed for global universities, scholarship opportunities, and visa requirements at zero cost.
            </p>
            <div className={styles.ctaStripActions}>
              <Link href="/contact-us/" className={styles.ctaGoldBtn}>
                <span>Book Free 1-on-1 Consultation</span>
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+919082900188" className={styles.ctaPhoneBtn}>
                <Phone size={16} />
                <span>Call Helpline: +91 90829 00188</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
