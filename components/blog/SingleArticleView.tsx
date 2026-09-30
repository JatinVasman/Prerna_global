import Link from 'next/link';
import Image from 'next/image';
import {
  Clock,
  Calendar,
  Compass,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Globe,
  Share2,
} from 'lucide-react';
import type { BlogArticle, BlogCategory } from '@/types/seo';
import styles from './SingleArticleView.module.css';

interface Props {
  article: BlogArticle;
  category: BlogCategory;
  relatedArticles: BlogArticle[];
}

export default function SingleArticleView({ article, category, relatedArticles }: Props) {
  const defaultTakeaways = [
    'Adhere strictly to official departmental intake deadlines and minimum test score requirements.',
    'Ensure all academic transcripts, recommendation letters, and financial proofs are attested.',
    'Connect with a certified overseas education advisor to review your entry criteria and visa filing.',
  ];

  const takeaways =
    article.quick_takeaways && article.quick_takeaways.length > 0
      ? article.quick_takeaways
      : defaultTakeaways;

  const tableOfContents = article.table_of_contents || [
    { id: 'overview', title: '1. Strategic Value for Indian Students' },
    { id: 'eligibility', title: '2. Eligibility Criteria & Required Documents' },
    { id: 'timelines', title: '3. Application Timelines & Intake Planning' },
    { id: 'faqs', title: '4. Frequently Asked Questions' },
  ];

  return (
    <div className={styles.articlePage}>
      {/* 1. BREADCRUMBS */}
      <div className={styles.breadcrumbBar}>
        <div className="container">
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.sep}>/</span>
            <Link href="/blog/">Blogs</Link>
            <span className={styles.sep}>/</span>
            <Link href={`/blog/category/${category.slug}/`}>{category.name}</Link>
            <span className={styles.sep}>/</span>
            <span className={styles.current}>{article.title.substring(0, 36)}...</span>
          </nav>
        </div>
      </div>

      {/* 2. ARTICLE HEADER */}
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <div className={styles.metaRow}>
              <Link href={`/blog/category/${category.slug}/`} className={styles.categoryBadge}>
                {category.name}
              </Link>
              <span className={styles.metaItem}>
                <Clock size={13} /> {article.read_time}
              </span>
              <span className={styles.metaSep}>•</span>
              <span className={styles.metaItem}>
                <Calendar size={13} /> Published: {article.date}
              </span>
              {article.updated_date && (
                <>
                  <span className={styles.metaSep}>•</span>
                  <span className={styles.metaItem}>Updated: {article.updated_date}</span>
                </>
              )}
            </div>

            <h1 className={styles.title}>{article.title}</h1>

            <div className={styles.authorBar}>
              <div className={styles.authorAvatar}>PG</div>
              <div>
                <strong className={styles.authorName}>{article.author}</strong>
                <span className={styles.authorRole}>
                  {article.author_role || 'Senior Study Abroad Counselor'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. FEATURED IMAGE */}
      <div className={styles.featuredImgWrap}>
        <div className="container">
          <div className={styles.imgContainer}>
            <Image
              src={article.featured_image || '/images/brand/logo-tight.png'}
              alt={article.featured_image_alt || article.title}
              width={1000}
              height={480}
              className={styles.featuredImg}
              style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover' }}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* 4. 2-COLUMN LAYOUT (CONTENT LEFT, STICKY SIDEBAR RIGHT) */}
      <div className={styles.bodySection}>
        <div className="container">
          <div className={styles.layoutGrid}>
            {/* MAIN CONTENT COLUMN */}
            <main className={styles.mainCol}>
              {/* TABLE OF CONTENTS */}
              {tableOfContents.length > 0 && (
                <div className={styles.tocCard}>
                  <div className={styles.tocHeader}>
                    <Compass size={18} className={styles.tocIcon} />
                    <h2 className={styles.tocTitle}>Table of Contents</h2>
                  </div>
                  <ol className={styles.tocList}>
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`}>{item.title}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* EXECUTIVE SUMMARY CALLOUT BOX */}
              <div className={styles.calloutTip}>
                <div className={styles.calloutHeader}>
                  <CheckCircle2 size={20} className={styles.calloutIcon} />
                  <h3>Key Takeaways &amp; Executive Summary</h3>
                </div>
                <ul>
                  {takeaways.map((t, idx) => (
                    <li key={idx}>{t}</li>
                  ))}
                </ul>
              </div>

              {/* ARTICLE PROSE */}
              <div className={styles.prose}>
                <section id="overview">
                  <h2>1. Strategic Value for Indian Aspirants</h2>
                  <p>{article.excerpt}</p>
                  <p>
                    Navigating international higher education requires a deep understanding of admission
                    prerequisites, standardized testing benchmarks, tuition financing, and post-study
                    work regulations. Whether you are aiming for prestigious public institutions or
                    specialized faculties, preparing a competitive and compliant application profile is vital.
                  </p>
                  <p>
                    Indian applicants benefit tremendously from early preparation. Identifying program
                    curricula that match your long-term career aspirations, understanding work permit policies,
                    and having access to verified scholarship databases are the cornerstones of successful admissions.
                  </p>
                </section>

                <section id="eligibility">
                  <h2>2. Key Eligibility Criteria &amp; Required Documents</h2>
                  <p>
                    Admissions committees evaluate international candidates across several holistic parameters:
                  </p>
                  <ul>
                    <li>
                      <strong>Academic Transcripts:</strong> Verified marksheets converted to standard
                      international grading systems (ECTS, US 4.0 GPA, or UK percentage scales).
                    </li>
                    <li>
                      <strong>Statement of Purpose (SOP):</strong> A well-crafted narrative establishing
                      your past academic journey, motivation, research interests, and future career objectives.
                    </li>
                    <li>
                      <strong>Letters of Recommendation (LOR):</strong> 2 to 3 recommendations from
                      academic professors or corporate supervisors attesting to your abilities.
                    </li>
                    <li>
                      <strong>English Language Proficiency:</strong> Valid IELTS Academic, PTE Academic,
                      or official Medium of Instruction (MOI) waivers.
                    </li>
                    <li>
                      <strong>Financial Proofs:</strong> Bank balances, education loan sanction letters,
                      or approved scholarship awards satisfying embassy mandates.
                    </li>
                  </ul>
                </section>

                <section id="timelines">
                  <h2>3. Application Timelines &amp; Proven Best Practices</h2>
                  <p>
                    A structured timeline prevents last-minute submission errors. It is recommended to
                    complete standardized tests 10 to 12 months prior to your target intake, finalize
                    university shortlists 8 to 9 months prior, and secure unconditional offers 4 to 6 months
                    before classes commence.
                  </p>
                  <p>
                    Visa documentation should begin immediately upon receiving your CAS, I-20, or unconditional
                    offer letter to avoid peak-season embassy appointment delays.
                  </p>
                </section>
              </div>

              {/* CONTEXTUAL INTERNAL LINKING BOX */}
              <div className={styles.contextualBox}>
                <div className={styles.contextualHeader}>
                  <MapPin size={22} className={styles.contextualIcon} />
                  <div>
                    <h4>Recommended Next Steps for Indian Aspirants</h4>
                    <p>
                      Connect with our certified study abroad counseling desks across{' '}
                      <Link href="/locations/pune/">Pune</Link>,{' '}
                      <Link href="/locations/mumbai/">Mumbai</Link>,{' '}
                      <Link href="/locations/delhi/">Delhi</Link>,{' '}
                      <Link href="/locations/noida/">Noida</Link>, or{' '}
                      <Link href="/locations/bangalore/">Bangalore</Link> for personalized admissions support.
                    </p>
                  </div>
                </div>
                <div className={styles.contextualTags}>
                  <Link href="/destinations/study-in-uk/" className={styles.contextTag}>Study in UK</Link>
                  <Link href="/destinations/study-in-usa/" className={styles.contextTag}>Study in USA</Link>
                  <Link href="/destinations/study-in-germany/" className={styles.contextTag}>Study in Germany</Link>
                  <Link href="/destinations/study-in-canada/" className={styles.contextTag}>Study in Canada</Link>
                  <Link href="/destinations/study-in-australia/" className={styles.contextTag}>Study in Australia</Link>
                  <Link href="/locations/" className={styles.contextTagHighlight}>All 700+ City Desks &rarr;</Link>
                </div>
              </div>

              {/* FAQ ACCORDION */}
              {article.faqs && article.faqs.length > 0 && (
                <section id="faqs" className={styles.faqSection}>
                  <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                  <div className={styles.faqList}>
                    {article.faqs.map((f, i) => (
                      <details key={i} className={styles.faqItem} open={i === 0}>
                        <summary className={styles.faqQuestion}>
                          <span>{f.q}</span>
                          <span className={styles.faqToggle}>+</span>
                        </summary>
                        <div className={styles.faqAnswer}>
                          <p>{f.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* AUTHOR BIO BOX */}
              <div className={styles.authorBioCard}>
                <div className={styles.authorBioAvatar}>PG</div>
                <div className={styles.authorBioContent}>
                  <h4>Written by {article.author}</h4>
                  <p>
                    Certified Overseas Education Advisor at Prerna Global Services. Specializes in
                    university shortlisting, SOP review, financial structuring, and student visa compliance
                    for Indian applicants.
                  </p>
                  <Link href="/contact-us/" className={styles.bioLink}>
                    <span>Schedule a Counseling Session with the Team</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </main>

            {/* STICKY SIDEBAR COLUMN */}
            <aside className={styles.sidebarCol}>
              {/* WIDGET 1: CONSULTATION */}
              <div className={`${styles.sidebarWidget} ${styles.consultWidget}`}>
                <span className={styles.consultBadge}>100% FREE COUNSELING</span>
                <h3 className={styles.widgetTitle}>Free Study Abroad Consultation</h3>
                <p className={styles.widgetDesc}>
                  Get your academic profile evaluated by certified counselors. Personalized, objective, and transparent advice.
                </p>
                <Link href="/contact-us/" className={styles.widgetGoldBtn}>
                  <span>Book 1-on-1 Session</span>
                  <ArrowRight size={15} />
                </Link>
                <div className={styles.widgetContactList}>
                  <a href="tel:+919082900188" className={styles.widgetContactLink}>
                    <Phone size={14} className={styles.widgetIcon} />
                    <span>Direct: +91 90829 00188</span>
                  </a>
                  <a href="mailto:info@prernaglobalservices.com" className={styles.widgetContactLink}>
                    <Mail size={14} className={styles.widgetIcon} />
                    <span>info@prernaglobalservices.com</span>
                  </a>
                </div>
              </div>

              {/* WIDGET 2: COUNSELING DESKS NEAR YOU */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Counseling Desks Near You</h3>
                <ul className={styles.sidebarList}>
                  <li>
                    <Link href="/locations/pune/">
                      <MapPin size={13} className={styles.listIcon} />
                      <span>Study Abroad Consultant in <strong>Pune</strong></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/mumbai/">
                      <MapPin size={13} className={styles.listIcon} />
                      <span>Study Abroad Consultant in <strong>Mumbai</strong></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/delhi/">
                      <MapPin size={13} className={styles.listIcon} />
                      <span>Study Abroad Consultant in <strong>Delhi</strong></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/noida/">
                      <MapPin size={13} className={styles.listIcon} />
                      <span>Study Abroad Consultant in <strong>Noida</strong></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/bangalore/">
                      <MapPin size={13} className={styles.listIcon} />
                      <span>Study Abroad Consultant in <strong>Bangalore</strong></span>
                    </Link>
                  </li>
                </ul>
                <Link href="/locations/" className={styles.widgetMoreLink}>
                  <span>View all 700+ Indian Cities</span>
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* WIDGET 3: EXPLORE TOP DESTINATIONS */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Explore Top Destinations</h3>
                <ul className={styles.sidebarList}>
                  <li>
                    <Link href="/destinations/study-in-uk/">
                      <Globe size={13} className={styles.listIcon} />
                      <span>Study in <strong>United Kingdom</strong></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/study-in-usa/">
                      <Globe size={13} className={styles.listIcon} />
                      <span>Study in <strong>United States</strong></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/study-in-germany/">
                      <Globe size={13} className={styles.listIcon} />
                      <span>Study in <strong>Germany</strong></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/study-in-canada/">
                      <Globe size={13} className={styles.listIcon} />
                      <span>Study in <strong>Canada</strong></span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/destinations/study-in-australia/">
                      <Globe size={13} className={styles.listIcon} />
                      <span>Study in <strong>Australia</strong></span>
                    </Link>
                  </li>
                </ul>
                <Link href="/destinations/" className={styles.widgetMoreLink}>
                  <span>All Study Destinations</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* 5. BOTTOM CROSS-SELL SECTION: RELATED ARTICLES */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection} aria-labelledby="related-heading">
          <div className="container">
            <div className={styles.relatedHeader}>
              <span className={styles.relatedPre}>EXPAND YOUR RESEARCH</span>
              <h2 id="related-heading" className={styles.relatedTitle}>
                Related Study Abroad Guides
              </h2>
              <p className={styles.relatedDesc}>
                Continue exploring essential admissions and visa topics from this category:
              </p>
            </div>

            <div className={styles.relatedGrid}>
              {relatedArticles.map((item) => (
                <article key={item.slug} className={styles.relatedCard}>
                  <div className={styles.relThumbWrap}>
                    <Link href={`/blog/${item.slug}/`} className={styles.relThumbLink}>
                      <Image
                        src={item.featured_image || '/images/brand/logo-tight.png'}
                        alt={item.featured_image_alt || item.title}
                        width={380}
                        height={200}
                        className={styles.relThumb}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        unoptimized
                      />
                    </Link>
                    <span className={styles.relCatBadge}>{item.category_name}</span>
                  </div>
                  <div className={styles.relBody}>
                    <span className={styles.relReadTime}>
                      <Clock size={12} /> {item.read_time}
                    </span>
                    <h3 className={styles.relCardTitle}>
                      <Link href={`/blog/${item.slug}/`}>{item.title}</Link>
                    </h3>
                    <p className={styles.relExcerpt}>
                      {item.excerpt.substring(0, 115)}...
                    </p>
                    <div className={styles.relFooter}>
                      <Link href={`/blog/${item.slug}/`} className={styles.relReadLink}>
                        <span>Read Complete Guide</span>
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
