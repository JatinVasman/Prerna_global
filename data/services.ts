// ============================================================
// Services — Prerna Global Services
// 11 comprehensive overseas education services (source: WordPress)
// ============================================================
import type { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  {
    id: 'ielts-coaching',
    title: 'IELTS Coaching',
    description:
      'Enhance your English proficiency with expert, structured training designed to help you achieve the top IELTS scores required by leading universities and visa authorities.',
    icon: 'BookOpen',
    featured: true,
  },
  {
    id: 'personalized-counselling',
    title: 'Personalized Counselling',
    description:
      'Receive dedicated one-on-one counselling to map out the right academic and career path abroad, tailored precisely to your goals, interests, and academic background.',
    icon: 'Users',
    featured: true,
  },
  {
    id: 'country-finalization',
    title: 'Country Finalization',
    description:
      'Select the best study destination for your unique profile — balancing your academic goals, financial budget, career ambitions, and personal preferences.',
    icon: 'Globe',
    featured: true,
  },
  {
    id: 'university-selection',
    title: 'University Selection',
    description:
      'Get expert help shortlisting and ranking top universities across the globe that match your academic interests, preferred course, and admission eligibility.',
    icon: 'GraduationCap',
    featured: true,
  },
  {
    id: 'admission-help',
    title: 'Admission Help',
    description:
      'Complete your university applications smoothly and confidently with our expert admission assistance, covering every document and deadline from start to finish.',
    icon: 'FileCheck',
  },
  {
    id: 'sop-lor-documentation',
    title: 'SOP, LOR & Documentation',
    description:
      'Receive expert, personalized guidance for crafting a compelling Statement of Purpose, strong Letters of Recommendation, and all essential study-abroad documentation.',
    icon: 'FileText',
  },
  {
    id: 'education-loan',
    title: 'Education Loan',
    description:
      'Access informed guidance and hands-on support for identifying, applying, and securing education loans from leading Indian financial institutions for your overseas studies.',
    icon: 'Banknote',
  },
  {
    id: 'visa-support',
    title: 'Visa Support',
    description:
      'Navigate the student visa process confidently with comprehensive step-by-step assistance — from documentation preparation to interview coaching and embassy submission.',
    icon: 'Stamp',
  },
  {
    id: 'accommodation-assistance',
    title: 'Accommodation Assistance',
    description:
      'Find safe, comfortable, and affordable housing options near your chosen university campus, making your transition to a new country smooth and stress-free.',
    icon: 'Home',
  },
  {
    id: 'pre-departure-support',
    title: 'Pre-Departure Support',
    description:
      'Prepare thoroughly for your international journey with comprehensive travel guidance, essential packing tips, country-specific orientation, and pre-departure checklists.',
    icon: 'Plane',
  },
  {
    id: 'tourist-visa-uk-canada',
    title: 'Tourist Visa Assistance',
    description:
      'Get professional, hassle-free support for UK and Canada tourist visa applications — ideal for parents or family members planning to attend your graduation or visit.',
    icon: 'PassportIcon',
  },
];

export const featuredServices = services.filter((s) => s.featured);
