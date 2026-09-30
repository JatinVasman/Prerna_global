import fs from 'fs';
import path from 'path';
import type { LocationEntity, StateEntity, BlogCategory, BlogArticle } from '@/types/seo';

// In-memory singletons
let _cities: Record<string, LocationEntity> | null = null;
let _statesMap: Record<string, StateEntity> | null = null;
let _statesList: StateEntity[] | null = null;

let _articles: Record<string, BlogArticle> | null = null;
let _categories: Record<string, BlogCategory> | null = null;

function loadLocationsData() {
  if (_cities && _statesMap && _statesList) {
    return { cities: _cities, statesMap: _statesMap, statesList: _statesList };
  }

  const filePath = path.join(process.cwd(), 'data', 'pg-locations-700.json');
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    _cities = JSON.parse(raw) as Record<string, LocationEntity>;
  } catch (err) {
    console.error('Failed to load pg-locations-700.json:', err);
    _cities = {};
  }

  _statesMap = {};
  for (const [slug, c] of Object.entries(_cities)) {
    const stSlug = c.state_slug || c.state.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    if (!_statesMap[stSlug]) {
      _statesMap[stSlug] = {
        name: c.state,
        slug: stSlug,
        region: c.region,
        vfs_center: c.vfs_center,
        exam_centers: c.exam_centers,
        feeder_colleges: c.feeder_colleges || [],
        popular_destinations: c.popular_destinations || {},
        total_cities: 0,
        cities: [],
      };
    }
    _statesMap[stSlug].cities.push({
      name: c.city_name,
      slug: slug,
      tier: c.tier,
      tier_label: c.tier_label,
      is_popular: c.is_popular,
      status: c.status,
    });
    _statesMap[stSlug].total_cities = _statesMap[stSlug].cities.length;
  }

  _statesList = Object.values(_statesMap).sort((a, b) => a.name.localeCompare(b.name));

  return { cities: _cities, statesMap: _statesMap, statesList: _statesList };
}

const FLAGSHIP_ARTICLES: Record<string, BlogArticle> = {
  'how-to-apply-uk-universities-from-india': {
    slug: 'how-to-apply-uk-universities-from-india',
    title: 'How to Apply to UK Universities from India: Complete Step-by-Step Guide',
    seo_title: 'How to Apply to UK Universities from India | Complete Admissions Guide',
    meta_description:
      'Complete guide on applying to UK universities from India for 2026/2027 intakes. Covers UCAS application, CAS letter, SOP preparation, IELTS requirements, and student visa.',
    excerpt:
      'A complete step-by-step roadmap for Indian applicants targeting UK undergraduate and master degree programs across top Russell Group and modern universities.',
    category_slug: 'university-applications',
    category_name: 'University Applications',
    country: 'UK',
    read_time: '8 min read',
    date: 'October 2026',
    author: 'Senior Overseas Education Advisor',
    author_role: 'Head of UK Admissions',
    featured_image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85',
    featured_image_alt: 'How to Apply to UK Universities from India — University Campus',
    status: 'published',
    is_indexable: true,
    quick_takeaways: [
      'Apply early via UCAS for undergraduate programs or direct university portals for postgraduate courses.',
      'Secure your Confirmation of Acceptance for Studies (CAS) before booking your visa interview.',
      'Ensure your financial proof meets the 28-day maintenance requirement strictly.',
    ],
    faqs: [
      {
        q: 'What is the UCAS application deadline for Indian students?',
        a: 'Undergraduate applications via UCAS typically close in late January for most courses, and October for Oxford, Cambridge, and medicine.',
      },
      {
        q: 'Can I study in the UK without IELTS from India?',
        a: 'Yes, several UK universities accept 70%+ in Class 12 English from CBSE, ICSE, or Maharashtra state boards as an IELTS waiver.',
      },
      {
        q: 'What is the UK Graduate Route visa duration?',
        a: 'International students completing an undergraduate or master degree receive a 2-year post-study work visa; doctoral graduates receive 3 years.',
      },
    ],
  },
  'study-in-germany-for-indian-students-guide': {
    slug: 'study-in-germany-for-indian-students-guide',
    title: 'Study in Germany for Indian Students: Free Tuition, APS Certificate & Visas',
    seo_title: 'Study in Germany for Indian Students | Free Tuition Universities & APS Guide',
    meta_description:
      'Learn how Indian students can study tuition-free at public German universities. Detailed guide on APS certificate, blocked accounts, English-taught masters, and student visa.',
    excerpt:
      'Discover how to study at top-ranked public universities in Germany with zero tuition fees. Step-by-step guidance on APS verification, blocked accounts, and English masters.',
    category_slug: 'study-in-germany',
    category_name: 'Study in Germany',
    country: 'Germany',
    read_time: '9 min read',
    date: 'October 2026',
    author: 'Senior European Education Advisor',
    author_role: 'Lead German Counsel',
    featured_image:
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85',
    featured_image_alt: 'Study in Germany for Indian Students Guide — University Landmark',
    status: 'published',
    is_indexable: true,
    quick_takeaways: [
      'Public universities in Germany charge €0 tuition fees for international students in most federal states.',
      'APS certificate verification is mandatory for all Indian applicants before university admissions and visa filing.',
      'A blocked account (Sperrkonto) must be opened with required living expense deposits for your visa.',
    ],
    faqs: [
      {
        q: 'Are German public universities completely tuition-free for Indian students?',
        a: 'Yes, public universities in 15 of 16 German federal states do not charge tuition fees for international students. You only pay a semester ticket/administrative contribution of €150 to €350.',
      },
      {
        q: 'What is the APS certificate required for Germany?',
        a: 'APS India verifies the authenticity of Indian academic certificates before you can apply to German universities and book visa appointments.',
      },
      {
        q: 'Can I study in Germany in English medium?',
        a: 'Yes, thousands of international master programs in engineering, computer science, data analytics, and management are taught 100% in English.',
      },
    ],
  },
  'student-visa-guide-requirements-interview': {
    slug: 'student-visa-guide-requirements-interview',
    title: 'International Student Visa Guide: Requirements, Financials & Mock Interviews',
    seo_title: 'Student Visa Guide for Indian Students | Embassy Interview Preparation',
    meta_description:
      'Master the student visa application process for UK, USA, Canada, and Germany. Covers document checklists, financial proofs, biometrics, and interview questions.',
    excerpt:
      'A comprehensive walkthrough of student visa procedures covering VFS appointments, biometric submissions, financial documentation, and embassy interview confidence.',
    category_slug: 'student-visa',
    category_name: 'Student Visa',
    country: 'Global',
    read_time: '7 min read',
    date: 'October 2026',
    author: 'Visa Compliance Director',
    author_role: 'Head of International Visa Services',
    featured_image:
      'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=85',
    featured_image_alt: 'Student Visa Guide and Interview Preparation — Travel Documents',
    status: 'published',
    is_indexable: true,
    quick_takeaways: [
      'Maintain clear, verifiable audit trails for all educational loan sanction letters and sponsor funds.',
      'Practice mock visa interviews to articulate your academic intent, course choice, and career return plan.',
      'Book your VFS Global appointment immediately upon receipt of your visa sponsorship document.',
    ],
    faqs: [
      {
        q: 'What is the typical student visa processing time for Indian applicants?',
        a: 'Standard processing takes 3 to 4 weeks for the UK and Germany, and 4 to 8 weeks for the USA and Canada. Priority visa services are available for urgent applications.',
      },
      {
        q: 'How much bank balance is required for student visa approval?',
        a: 'You must show funds covering first-year tuition plus government-mandated living expenses (e.g. £1,023/month outside London or €11,208/year for Germany).',
      },
      {
        q: 'Can Prerna Global Services assist with mock visa interviews?',
        a: 'Yes, our certified visa counselors conduct multiple rounds of 1-on-1 mock interviews covering university selection, post-study goals, and financial credibility.',
      },
    ],
  },
};

function loadBlogData() {
  if (_articles && _categories) {
    return { articles: _articles, categories: _categories };
  }

  const blogsPath = path.join(process.cwd(), 'data', 'pg-blogs-500.json');
  const catsPath = path.join(process.cwd(), 'data', 'pg-categories.json');

  try {
    const rawArticles = fs.readFileSync(blogsPath, 'utf-8');
    _articles = {
      ...FLAGSHIP_ARTICLES,
      ...(JSON.parse(rawArticles) as Record<string, BlogArticle>),
    };
  } catch (err) {
    console.error('Failed to load pg-blogs-500.json:', err);
    _articles = { ...FLAGSHIP_ARTICLES };
  }

  try {
    const rawCats = fs.readFileSync(catsPath, 'utf-8');
    _categories = JSON.parse(rawCats) as Record<string, BlogCategory>;
  } catch (err) {
    console.error('Failed to load pg-categories.json:', err);
    _categories = {};
  }

  // Calculate dynamic count for each category
  for (const [slug, cat] of Object.entries(_categories)) {
    cat.slug = slug;
    cat.count = 0;
  }

  for (const article of Object.values(_articles)) {
    if (article.category_slug && _categories[article.category_slug]) {
      _categories[article.category_slug].count = (_categories[article.category_slug].count || 0) + 1;
    }
  }

  return { articles: _articles, categories: _categories };
}

export function getAllLocations(): Record<string, LocationEntity> {
  return loadLocationsData().cities;
}

export function getAllStatesMap(): Record<string, StateEntity> {
  return loadLocationsData().statesMap;
}

export function getAllStatesList(): StateEntity[] {
  return loadLocationsData().statesList;
}

export function isStateSlug(slug: string): boolean {
  const clean = slug.toLowerCase().replace(/^\/locations\/?/, '').replace(/\/$/, '');
  const { statesMap } = loadLocationsData();
  return Boolean(statesMap[clean]);
}

export function getStateData(stateSlug: string): StateEntity | null {
  const clean = stateSlug.toLowerCase().replace(/^\/locations\/?/, '').replace(/\/$/, '');
  const { statesMap } = loadLocationsData();
  return statesMap[clean] || null;
}

export function getCityData(slug: string): LocationEntity {
  const clean = slug.toLowerCase().replace(/^\/locations\/?/, '').replace(/\/$/, '');
  const { cities } = loadLocationsData();
  if (cities[clean]) return cities[clean];

  // Deterministic fallback profile for unindexed or new cities
  const name = clean.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  return {
    slug: clean,
    city_name: name,
    state: 'India',
    state_slug: 'india',
    region: 'Pan-India',
    letter: name.charAt(0).toUpperCase(),
    tier: 2,
    tier_label: 'Tier 2 Educational Hub',
    is_popular: false,
    status: 'draft',
    is_indexable: false,
    consultation_mode: 'dedicated_virtual',
    office_proximity: 'Dedicated 1-on-1 Virtual Counselling Desk',
    consultation_note: `Students and parents in ${name} receive complete end-to-end guidance through our senior overseas education counselors via dedicated video calls, secure digital document review, and personalized admissions support.`,
    feeder_colleges: [`Accredited Colleges and Universities in ${name}`],
    popular_destinations: {
      UK: 'High-ranking 1-year master degrees with 2-year post-study work visa rights.',
      USA: 'Global benchmark for STEM programs, engineering, and business analytics with 3-year OPT.',
      Canada: 'Post-graduation work permit pathways across public colleges and universities.',
      Germany: 'Tuition-free public universities for technical and engineering degrees.',
      Australia: 'World-class universities with strong career pathways and post-study work options.',
    },
    exam_centers: `Authorized IELTS, PTE, and TOEFL testing centers operating in ${name} or nearby commercial hubs.`,
    vfs_center: 'Nearest VFS Global Visa Application Centre',
    related_blogs: [
      'how-to-apply-uk-universities-from-india',
      'study-in-germany-for-indian-students-guide',
      'student-visa-guide-requirements-interview',
    ],
    faqs: [
      {
        q: `How can students from ${name} apply to foreign universities with Prerna Global Services?`,
        a: `Through our online study abroad desk, you connect directly with our senior counseling team via video call. We handle university shortlisting, application filing, SOP/LOR drafting, education loans, and visa documentation seamlessly.`,
      },
      {
        q: `Do I need to visit an office in person to process my student visa from ${name}?`,
        a: `No in-person visit is required. All documentation, university submissions, and visa preparation are conducted digitally with dedicated counselor oversight.`,
      },
      {
        q: `What study abroad services are available for students in ${name}?`,
        a: `We provide complete end-to-end services: profile assessment, country & university shortlisting, IELTS coaching, SOP & LOR editing, education loan support, visa filing, and pre-departure briefings.`,
      },
    ],
  };
}

export function getAllArticles(): Record<string, BlogArticle> {
  return loadBlogData().articles;
}

export function getAllCategories(): Record<string, BlogCategory> {
  return loadBlogData().categories;
}

export function getArticle(slug: string): BlogArticle | null {
  const clean = slug.toLowerCase().replace(/^\/blog\/?/, '').replace(/\/$/, '');
  const { articles } = loadBlogData();
  return articles[clean] || null;
}

export function queryArticles({
  category = null,
  search = '',
  page = 1,
  perPage = 12,
}: {
  category?: string | null;
  search?: string;
  page?: number;
  perPage?: number;
} = {}) {
  const { articles, categories } = loadBlogData();
  let list = Object.values(articles);

  if (category && categories[category]) {
    list = list.filter((a) => a.category_slug === category);
  }

  if (search) {
    const q = search.toLowerCase().trim();
    list = list.filter((a) => {
      const combined = `${a.title} ${a.excerpt || ''} ${a.country || ''} ${a.category_name || ''}`.toLowerCase();
      return combined.includes(q);
    });
  }

  const total = list.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const offset = (currentPage - 1) * perPage;
  const items = list.slice(offset, offset + perPage);

  return {
    items,
    total,
    totalPages,
    currentPage,
    perPage,
  };
}
