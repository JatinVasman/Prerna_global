// ============================================================
// Destinations — Prerna Global Services
// 9 study destinations with verified unique images, academic data & FAQs
// ============================================================
import type { DestinationItem } from '@/types';

export const destinations: DestinationItem[] = [
  {
    id: 'uk',
    slug: 'study-in-uk',
    country: 'United Kingdom',
    tagline: 'World-renowned universities with academic prestige and lucrative global career pathways.',
    description:
      'The UK is home to globally elite institutions like Oxford, Cambridge, Imperial College, UCL, Manchester, and Edinburgh. 1-year master’s programs save both tuition and living costs, while the 2-year Graduate Route visa grants valuable post-study work authorization.',
    image: '/images/destinations/uk.jpg',
    badge: '1-Year Master’s',
    highlights: [
      '1-Year fast-track Master’s degrees saving time and living expenses',
      '2-Year post-study Graduate Route work visa (3 years for PhD)',
      'Over 160 universities including top-ranked Russell Group members',
      'IELTS waiver available based on Class 12 English scores for select universities',
    ],
    topUniversities: [
      'University of Oxford',
      'University of Cambridge',
      'Imperial College London',
      'University College London (UCL)',
      'University of Manchester',
      'University of Edinburgh',
      'King’s College London',
      'University of Warwick',
    ],
    avgTuition: '£14,000 – £28,000 per year',
    livingCosts: '£10,000 – £15,000 per year (depending on London vs outside London)',
    postStudyWork: '2 Years (Graduate Route Visa)',
    intakes: 'September / October (Primary) & January / February (Secondary)',
    popularCourses: ['Data Science & AI', 'Business Analytics & MBA', 'Finance & Banking', 'Computer Science', 'Public Health', 'Law (LLM)'],
    faqs: [
      {
        q: 'Can Indian students study in the UK without IELTS?',
        a: 'Yes, numerous accredited UK universities offer IELTS waivers to Indian applicants who achieved 70% or higher in Class 12 English from CBSE, ICSE, or select state boards, or through medium-of-instruction (MOI) certificates.'
      },
      {
        q: 'What is the UK Graduate Route work visa duration?',
        a: 'International students completing an undergraduate or master degree receive an unsponsored 2-year post-study work visa. Doctoral/PhD graduates receive a 3-year visa.'
      },
      {
        q: 'What are the main intake seasons for UK universities?',
        a: 'The primary intake is Autumn (September/October) offering the widest range of courses and scholarships. The secondary intake is Spring (January/February).'
      },
      {
        q: 'How much financial proof is required for a UK student visa?',
        a: 'You must demonstrate first-year tuition fees plus living expenses (£1,334/month for London or £1,023/month outside London for up to 9 months) held in an approved bank account for at least 28 consecutive days.'
      }
    ]
  },
  {
    id: 'usa',
    slug: 'study-in-usa',
    country: 'United States of America',
    tagline: 'The world’s premier destination for cutting-edge research, tech innovation, and campus life.',
    description:
      'The USA hosts the greatest concentration of top-ranked research universities in the world. STEM-designated degree programs offer up to 3 years of Optional Practical Training (OPT), allowing graduates to build international corporate careers.',
    image: '/images/destinations/usa.jpg',
    badge: '3-Year STEM OPT',
    highlights: [
      'World’s largest university and college network with unmatched campus resources',
      'Up to 3-Year STEM Optional Practical Training (OPT) work authorization',
      'High research and teaching assistantship (RA/TA) and merit scholarship opportunities',
      'Global corporate headquarters access across Silicon Valley, Wall Street, and tech corridors',
    ],
    topUniversities: [
      'Massachusetts Institute of Technology (MIT)',
      'Stanford University',
      'Harvard University',
      'University of California, Berkeley',
      'Carnegie Mellon University',
      'Columbia University',
      'University of Texas at Austin',
      'Georgia Institute of Technology',
    ],
    avgTuition: '$22,000 – $48,000 per year',
    livingCosts: '$12,000 – $18,000 per year',
    postStudyWork: 'Up to 3 Years for STEM programs (12 months standard + 24 months STEM extension)',
    intakes: 'Fall (August/September) & Spring (January)',
    popularCourses: ['MS Computer Science', 'Data Analytics', 'Management Information Systems (MIS)', 'MBA', 'Biomedical Engineering', 'Cybersecurity'],
    faqs: [
      {
        q: 'What is STEM OPT in the USA?',
        a: 'Graduates with a degree in Science, Technology, Engineering, or Math (STEM) can extend their standard 12-month Optional Practical Training (OPT) by an additional 24 months, for a total of 36 months of US work authorization without an H-1B visa.'
      },
      {
        q: 'Do US universities require GRE scores for masters applications?',
        a: 'Many leading US universities now offer GRE waivers or test-optional admissions for MS and MBA programs, evaluating candidates holistically based on GPA, SOP, academic projects, and work experience.'
      },
      {
        q: 'What is the F-1 student visa interview process like?',
        a: 'The F-1 visa requires a personal interview at a US Embassy or Consulate. Prerna Global Services conducts extensive 1-on-1 mock interviews to prepare you for common questions regarding university selection, finances, and career return plans.'
      }
    ]
  },
  {
    id: 'canada',
    slug: 'study-in-canada',
    country: 'Canada',
    tagline: 'Globally recognized degrees, affordable living, and transparent immigration pathways.',
    description:
      'Canada delivers top-tier education with lower tuition costs than many Western nations. The Post-Graduation Work Permit (PGWP) allows graduates to gain valuable Canadian work experience with realistic permanent residency pathways.',
    image: '/images/destinations/canada.jpg',
    badge: 'PGWP & PR Pathways',
    highlights: [
      'Up to 3-Year Post-Graduation Work Permit (PGWP) for eligible programs',
      'Transparent pathways to Permanent Residency through Express Entry & Provincial Nominee Programs',
      'Affordable tuition fees compared to USA and UK private universities',
      'Safe, welcoming, and multicultural society with robust healthcare',
    ],
    topUniversities: [
      'University of Toronto',
      'University of British Columbia',
      'McGill University',
      'University of Waterloo',
      'McMaster University',
      'University of Alberta',
      'Simon Fraser University',
      'Western University',
    ],
    avgTuition: 'CAD 18,000 – CAD 36,000 per year',
    livingCosts: 'CAD 12,000 – CAD 16,000 per year',
    postStudyWork: 'Up to 3 Years (PGWP)',
    intakes: 'Fall (September), Winter (January) & Summer (May)',
    popularCourses: ['Computer Science', 'Business Administration', 'Data Analytics', 'Mechanical & Industrial Engineering', 'Healthcare Management'],
    faqs: [
      {
        q: 'How does the Canadian PGWP work?',
        a: 'Graduates of Designated Learning Institutions (DLIs) from programs lasting 2 years or more can qualify for an open work permit lasting up to 3 years, allowing them to work for any Canadian employer.'
      },
      {
        q: 'What is a Provincial Attestation Letter (PAL)?',
        a: 'Under current IRCC regulations, most international undergraduate and college applicants require a Provincial Attestation Letter (PAL) from the provincial government alongside their university letter of acceptance.'
      },
      {
        q: 'What IELTS score is needed for Canadian study permits?',
        a: 'Most university programs require an overall band score of 6.5 with no band below 6.0 in IELTS Academic or equivalent PTE scores.'
      }
    ]
  },
  {
    id: 'germany',
    slug: 'study-in-germany',
    country: 'Germany',
    tagline: 'Low or tuition-free education at world-class public engineering and research institutions.',
    description:
      'Germany is Europe’s industrial and engineering powerhouse. Most public universities charge zero tuition fees even for international students, and graduates receive an 18-month job seeker visa to launch high-paying technical careers.',
    image: '/images/destinations/germany.jpg',
    badge: 'Tuition-Free Universities',
    highlights: [
      'Zero tuition fees at top-ranked public universities across 15 of 16 federal states',
      '18-Month post-study Job Seeker Visa with straightforward EU Blue Card conversion',
      'Global epicenter for automotive, robotics, chemical, and precision engineering',
      'Growing number of 100% English-taught master degree programs',
    ],
    topUniversities: [
      'Technical University of Munich (TUM)',
      'Ludwig Maximilian University of Munich (LMU)',
      'Heidelberg University',
      'RWTH Aachen University',
      'Karlsruhe Institute of Technology (KIT)',
      'Technical University of Berlin (TU Berlin)',
      'University of Stuttgart',
      'University of Freiburg',
    ],
    avgTuition: '€0 tuition at public universities (semester ticket contribution of €150 – €350)',
    livingCosts: '€11,208 per year (mandated blocked account deposit)',
    postStudyWork: '18 Months (Job Seeker Residence Permit)',
    intakes: 'Winter (October - Primary) & Summer (April - Secondary)',
    popularCourses: ['Automotive & Mechanical Engineering', 'Data Engineering & AI', 'Renewable Energy', 'Computer Science', 'Electrical Engineering', 'Management'],
    faqs: [
      {
        q: 'Are German public universities genuinely free for Indian students?',
        a: 'Yes, public universities in Germany charge €0 tuition fees for international students in almost all federal states (except Baden-Württemberg which charges a modest €1,500/semester). Students only pay semester administrative fees of €150 to €350.'
      },
      {
        q: 'What is an APS Certificate and why is it mandatory?',
        a: 'The Akademische Prüfstelle (APS) certificate is an authenticity verification issued by the German Embassy in New Delhi for Indian educational records. It is legally mandatory for university admission and student visa processing.'
      },
      {
        q: 'What is a Blocked Account (Sperrkonto)?',
        a: 'A blocked account is a specialized German bank account where international students deposit mandated living funds (€11,208 for 1 year) to satisfy German visa financial requirements.'
      }
    ]
  },
  {
    id: 'australia',
    slug: 'study-in-australia',
    country: 'Australia',
    tagline: 'World-renowned Group of Eight universities, exceptional lifestyle, and flexible work rights.',
    description:
      'Australia offers globally recognized degrees from prestigious Group of Eight institutions. Students benefit from flexible post-study work rights ranging from 2 to 4 years, high minimum wages, and vibrant multicultural student cities.',
    image: '/images/destinations/australia.jpg',
    badge: '2–4 Yrs Work Rights',
    highlights: [
      '7 universities consistently ranked among the world’s top 100 QS institutions',
      '2 to 4 Year Temporary Graduate Visa (subclass 485) post-study work authorization',
      'Regional study incentives offering extra work visa duration and migration points',
      'High student wage rates with 48 hours per fortnight permitted during semesters',
    ],
    topUniversities: [
      'The University of Melbourne',
      'The University of Sydney',
      'The University of New South Wales (UNSW)',
      'The Australian National University (ANU)',
      'Monash University',
      'The University of Queensland',
      'The University of Western Australia',
      'The University of Adelaide',
    ],
    avgTuition: 'AUD 28,000 – AUD 45,000 per year',
    livingCosts: 'AUD 24,500 per year (official financial capacity requirement)',
    postStudyWork: '2 to 4 Years (Subclass 485 Temporary Graduate Visa)',
    intakes: 'Semester 1 (February - Primary) & Semester 2 (July - Secondary)',
    popularCourses: ['Information Technology & Cybersecurity', 'Accounting & Finance', 'Biotechnology & Health Sciences', 'Mining & Civil Engineering', 'MBA'],
    faqs: [
      {
        q: 'What is the Genuine Student (GS) requirement for Australia?',
        a: 'The GS criteria replaced GTE in early 2024. It evaluates an applicant’s genuine intent to study in Australia through clear questions about course choice, career prospects in India, and financial credibility.'
      },
      {
        q: 'Can Indian students work part-time while studying in Australia?',
        a: 'Yes, international students holding a subclass 500 visa are permitted to work up to 48 hours per fortnight during study terms and unlimited hours during scheduled vacations.'
      },
      {
        q: 'What are the Group of Eight (Go8) universities in Australia?',
        a: 'The Group of Eight consists of Australia’s leading research-intensive universities, including Melbourne, Sydney, UNSW, ANU, Monash, Queensland, Western Australia, and Adelaide.'
      }
    ]
  },
  {
    id: 'ireland',
    slug: 'study-in-ireland',
    country: 'Ireland',
    tagline: 'Europe’s fastest-growing technology hub with high salaries and post-study opportunities.',
    description:
      'Hosting the European headquarters of Google, Apple, Meta, and Microsoft, Ireland is an English-speaking EU powerhouse. Irish universities offer world-class degrees and an accessible 2-year Third Level Graduate Scheme work permit.',
    image: '/images/destinations/ireland.jpg',
    badge: 'Tech Capital of Europe',
    highlights: [
      'English-speaking European Union member state with direct euro currency economic access',
      'Home to European headquarters of 1,000+ top multinational tech, pharmaceutical, and finance firms',
      '2-Year Third Level Graduate Scheme (Stamp 1G) post-study work permit for master graduates',
      'Strong employability rates in software engineering, data analytics, and life sciences',
    ],
    topUniversities: [
      'Trinity College Dublin (TCD)',
      'University College Dublin (UCD)',
      'University of Galway',
      'University College Cork (UCC)',
      'Dublin City University (DCU)',
      'University of Limerick',
      'Maynooth University',
      'Technological University Dublin (TU Dublin)',
    ],
    avgTuition: '€11,000 – €25,000 per year',
    livingCosts: '€10,000 – €14,000 per year',
    postStudyWork: '2 Years (Third Level Graduate Programme Stamp 1G)',
    intakes: 'Autumn (September - Primary) & Spring (January - Select courses)',
    popularCourses: ['Computer Science & Big Data', 'Pharmaceutical Science', 'Finance & FinTech', 'Supply Chain Management', 'Artificial Intelligence'],
    faqs: [
      {
        q: 'Why is Ireland popular among Indian students?',
        a: 'Ireland is the only native English-speaking nation in the eurozone, offers a 2-year post-study work visa (Stamp 1G), and hosts major European headquarters for tech and pharmaceutical giants.'
      },
      {
        q: 'What is the Third Level Graduate Scheme (Stamp 1G)?',
        a: 'Stamp 1G allows international students who complete a master degree or PhD in Ireland to work full-time for up to 24 months without needing immediate employer sponsorship.'
      },
      {
        q: 'What English test scores are required for Irish universities?',
        a: 'Most Irish universities accept IELTS Academic (overall 6.5, min 6.0 in all bands), PTE Academic (63+), or TOEFL iBT.'
      }
    ]
  },
  {
    id: 'new-zealand',
    slug: 'study-in-new-zealand',
    country: 'New Zealand',
    tagline: 'Safe, scenic, and globally respected for quality education and progressive student policies.',
    description:
      'All 8 New Zealand universities rank within the top 3% globally. Known as one of the safest and most scenic nations in the world, New Zealand offers generous post-study work visas and clear pathways in high-demand skill shortage sectors.',
    image: '/images/destinations/new-zealand.jpg',
    badge: 'Safe & Top 3% Global',
    highlights: [
      '100% of New Zealand state universities rank in the top 3% worldwide in QS World Rankings',
      'Up to 3-Year Post-Study Work Visa for master and bachelor degree holders',
      'High demand for engineering, IT, healthcare, and environmental science professionals',
      'Peaceful, welcoming environment ranked among the safest nations on the Global Peace Index',
    ],
    topUniversities: [
      'University of Auckland',
      'University of Otago',
      'Victoria University of Wellington',
      'University of Canterbury',
      'Massey University',
      'University of Waikato',
      'Lincoln University',
      'Auckland University of Technology (AUT)',
    ],
    avgTuition: 'NZD 24,000 – NZD 38,000 per year',
    livingCosts: 'NZD 20,000 per year (official maintenance requirement)',
    postStudyWork: 'Up to 3 Years (Post-Study Work Visa)',
    intakes: 'February (Semester 1) & July (Semester 2)',
    popularCourses: ['Agribusiness & Food Science', 'Information Technology', 'Civil & Environmental Engineering', 'Hospitality & Tourism Management'],
    faqs: [
      {
        q: 'How long is the post-study work visa in New Zealand?',
        a: 'Graduates of master and doctoral programs receive a 3-year Post-Study Work Visa. Degree holders can work for any employer in any location across New Zealand.'
      },
      {
        q: 'Are all New Zealand universities recognized internationally?',
        a: 'Yes, all 8 New Zealand state universities are internationally accredited and rank in the top 3% globally in QS and Times Higher Education league tables.'
      }
    ]
  },
  {
    id: 'france',
    slug: 'study-in-france',
    country: 'France',
    tagline: 'Historic academic prestige, elite Grandes Écoles, and heavily subsidized public tuition.',
    description:
      'France is home to legendary institutions and elite Grandes Écoles leading in business, luxury brand management, and engineering. With hundreds of English-taught master’s programs and subsidized tuition, France offers world-class education with rich culture.',
    image: '/images/destinations/france.jpg',
    badge: 'Elite Grandes Écoles',
    highlights: [
      'Heavily subsidized tuition fees at public universities and elite Grandes Écoles',
      'Over 1,500 degree programs taught entirely in English across top business and engineering schools',
      '2-Year post-study job search visa (APS / RECE) for master graduates',
      '5-Year Schengen circulation visa granted to Indian alumni of French universities',
    ],
    topUniversities: [
      'HEC Paris',
      'INSEAD',
      'Sorbonne University',
      'École Polytechnique',
      'ESSEC Business School',
      'Sciences Po',
      'CentraleSupélec',
      'EDHEC Business School',
    ],
    avgTuition: '€2,770 – €3,770 per year at public universities; €12,000 – €24,000 at top Grandes Écoles',
    livingCosts: '€9,000 – €14,000 per year (housing subsidies available via CAF)',
    postStudyWork: '2 Years (RECE Visa) + 5-Year Schengen Circulation Visa for Alumni',
    intakes: 'September / October (Primary) & January / February (Secondary)',
    popularCourses: ['Luxury Brand Management', 'MIM & MBA', 'Aerospace Engineering', 'Fashion Design', 'Data Science & Business Analytics'],
    faqs: [
      {
        q: 'Do I need to speak French to study in France?',
        a: 'No, more than 1,500 bachelor and master degree programs in business, engineering, and data science are taught 100% in English. Learning basic French is recommended for daily life and internships.'
      },
      {
        q: 'What is the 5-year short-stay Schengen visa for Indian alumni of France?',
        a: 'Indian students who earn a master degree or higher from an accredited French institution are eligible for a 5-year short-stay Schengen circulation visa, allowing hassle-free travel across 27 European countries.'
      },
      {
        q: 'What is CAF housing assistance for students in France?',
        a: 'CAF (Caisse d’Allocations Familiales) is a government subsidy available to all students in France, including international students, covering 20% to 40% of monthly accommodation rent.'
      }
    ]
  },
  {
    id: 'europe',
    slug: 'study-in-europe',
    country: 'Europe (Multiple)',
    tagline: 'Gateway to 27 Schengen countries with cutting-edge English-taught programs.',
    description:
      'Beyond France and Germany, European countries like the Netherlands, Sweden, Switzerland, Spain, and Italy offer prestigious English-taught programs with competitive tuition and Erasmus+ mobility across 27 Schengen nations.',
    image: '/images/destinations/student-campus.jpg',
    badge: '27 Schengen Nations',
    highlights: [
      'Full Schengen visa travel and cross-border career access across 27 European countries',
      'Prestigious institutions in the Netherlands, Sweden, Switzerland, Italy, and Spain',
      'High standard of living with affordable tuition and Erasmus+ mobility grants',
      'English widely spoken in major academic hubs and innovation capitals',
    ],
    topUniversities: [
      'ETH Zurich (Switzerland)',
      'TU Delft (Netherlands)',
      'University of Amsterdam (Netherlands)',
      'Karolinska Institute (Sweden)',
      'Politecnico di Milano (Italy)',
      'IE University (Spain)',
      'KTH Royal Institute of Technology (Sweden)',
      'University of Bologna (Italy)',
    ],
    avgTuition: '€4,000 – €18,000 per year (depending on country and public/private status)',
    livingCosts: '€9,000 – €15,000 per year',
    postStudyWork: '1 to 2 Years (Orientation Year in Netherlands, Sweden, or EU Blue Card)',
    intakes: 'September (Primary) & February (Secondary)',
    popularCourses: ['Sustainability & Renewable Energy', 'Industrial Design', 'International Business & Finance', 'Biotechnology', 'Robotics'],
    faqs: [
      {
        q: 'Can Indian students travel freely in Europe on a student visa?',
        a: 'Yes, a student visa or residence permit from any Schengen member state allows visa-free travel throughout all 27 Schengen countries for up to 90 days in any 180-day period.'
      },
      {
        q: 'What is the Orientation Year (Zoekjaar) visa in the Netherlands?',
        a: 'The Netherlands offers a 1-year Orientation Year visa to international graduates, allowing them to work in any job without salary threshold restrictions while seeking a high-skilled migrant sponsor.'
      }
    ]
  },
];

export function getAllDestinations(): DestinationItem[] {
  return destinations;
}

export function getDestinationBySlug(slug: string): DestinationItem | null {
  const clean = slug.toLowerCase().replace(/^\/destinations\/?/, '').replace(/\/$/, '');
  return destinations.find((d) => d.slug === clean || d.id === clean) || null;
}

export function getDestinationById(id: string): DestinationItem | null {
  return destinations.find((d) => d.id === id) || null;
}
