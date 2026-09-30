// ============================================================
// Destinations — Prerna Global Services
// 9 study destinations with verified unique place images and key badges
// ============================================================
import type { DestinationItem } from '@/types';

export const destinations: DestinationItem[] = [
  {
    id: 'uk',
    country: 'United Kingdom',
    tagline: 'World-renowned universities with academic prestige and lucrative global career pathways.',
    description:
      'The UK is home to globally elite institutions like Oxford, Cambridge, Imperial College, and UCL. 1-year master’s programs save both tuition and living costs, while the 2-year Graduate Route visa grants valuable post-study work authorization.',
    image: '/images/destinations/uk.jpg',
    badge: '1-Year Master’s',
    highlights: ['1-Year fast-track Master’s', '2-Year post-study work visa', 'Top 100 QS global universities', 'Vibrant Indian student community'],
  },
  {
    id: 'ireland',
    country: 'Ireland',
    tagline: 'Europe’s fastest-growing technology hub with high salaries and post-study opportunities.',
    description:
      'Hosting the European headquarters of Google, Apple, Meta, and Microsoft, Ireland is an English-speaking EU powerhouse. Irish universities offer world-class degrees and an accessible 2-year Third Level Graduate Scheme work permit.',
    image: '/images/destinations/ireland.jpg',
    badge: 'Tech Capital of Europe',
    highlights: ['English-speaking EU member', 'Home to 1,000+ multinational HQs', '2-Year post-study work permit', 'High employability & STEM demand'],
  },
  {
    id: 'usa',
    country: 'United States of America',
    tagline: 'The world’s premier destination for cutting-edge research, tech innovation, and campus life.',
    description:
      'The USA hosts the greatest concentration of top-ranked research universities in the world. STEM-designated degree programs offer up to 3 years of Optional Practical Training (OPT), allowing graduates to build international corporate careers.',
    image: '/images/destinations/usa.jpg',
    badge: '3-Year STEM OPT',
    highlights: ['World’s largest university network', 'Up to 3-Year STEM OPT', 'Unmatched research funding & labs', 'Generous merit scholarships'],
  },
  {
    id: 'canada',
    country: 'Canada',
    tagline: 'Globally recognized degrees, affordable living, and transparent immigration pathways.',
    description:
      'Canada delivers top-tier education with lower tuition costs than many Western nations. The Post-Graduation Work Permit (PGWP) allows graduates to gain valuable Canadian work experience with realistic permanent residency pathways.',
    image: '/images/destinations/canada.jpg',
    badge: 'PGWP & PR Pathways',
    highlights: ['Up to 3-Year PGWP work permit', 'Direct permanent residency pathways', 'Affordable tuition & living', 'Safe, welcoming multicultural society'],
  },
  {
    id: 'germany',
    country: 'Germany',
    tagline: 'Low or tuition-free education at world-class public engineering and research institutions.',
    description:
      'Germany is Europe’s industrial and engineering powerhouse. Most public universities charge zero tuition fees even for international students, and graduates receive an 18-month job seeker visa to launch high-paying technical careers.',
    image: '/images/destinations/germany.jpg',
    badge: 'Tuition-Free Universities',
    highlights: ['Zero tuition at public universities', '18-Month post-study job seeker visa', 'Global leader in engineering & tech', 'Robust economy with high demand'],
  },
  {
    id: 'australia',
    country: 'Australia',
    tagline: 'World-renowned Group of Eight universities, exceptional lifestyle, and flexible work rights.',
    description:
      'Australia offers globally recognized degrees from prestigious Group of Eight institutions. Students benefit from flexible post-study work rights ranging from 2 to 6 years, high minimum wages, and vibrant multicultural student cities.',
    image: '/images/destinations/australia.jpg',
    badge: '2–6 Yrs Work Rights',
    highlights: ['Post-study work rights up to 6 years', 'Prestigious Group of Eight universities', 'High minimum wage & quality of life', 'Generous regional study incentives'],
  },
  {
    id: 'new-zealand',
    country: 'New Zealand',
    tagline: 'Safe, scenic, and globally respected for quality education and progressive student policies.',
    description:
      'All 8 New Zealand universities rank within the top 3% globally. Known as one of the safest and most scenic nations in the world, New Zealand offers generous post-study work visas and clear pathways in high-demand skill shortage sectors.',
    image: '/images/destinations/new-zealand.jpg',
    badge: 'Safe & Top 3% Global',
    highlights: ['100% of universities in top 3% globally', 'Up to 3-Year post-study work rights', 'High demand for skilled professionals', 'Peaceful, student-friendly environment'],
  },
  {
    id: 'france',
    country: 'France',
    tagline: 'Historic academic prestige, elite Grandes Écoles, and heavily subsidized public tuition.',
    description:
      'France is home to legendary institutions and elite Grandes Écoles leading in business, luxury brand management, and engineering. With hundreds of English-taught master’s programs and subsidized tuition, France offers world-class education with rich culture.',
    image: '/images/destinations/france.jpg',
    badge: 'Elite Grandes Écoles',
    highlights: ['Subsidized tuition at public universities', '500+ English-taught degree programs', '2-Year post-study job search visa', 'European cultural and business capital'],
  },
  {
    id: 'europe',
    country: 'Europe (Multiple)',
    tagline: 'Gateway to 27 Schengen countries with cutting-edge English-taught programs.',
    description:
      'Beyond France and Germany, countries like the Netherlands, Sweden, Switzerland, Spain, and Italy offer prestigious English-taught programs with competitive tuition and Erasmus+ mobility across 27 Schengen nations.',
    image: '/images/destinations/student-campus.jpg',
    badge: '27 Schengen Nations',
    highlights: ['Full Schengen visa travel access', 'Competitive tuition & Erasmus+ grants', 'Thriving startup hubs in Netherlands & Nordics', 'Internationally recognized degrees'],
  },
];
