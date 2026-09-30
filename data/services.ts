// ============================================================
// Services — Prerna Global Services
// 11 comprehensive overseas education services (source: WordPress)
// Each service now features a unique high-resolution image
// ============================================================
import type { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  {
    id: 'ielts-coaching',
    title: 'IELTS Coaching',
    description:
      'Enhance your English proficiency with expert training to achieve top IELTS scores.',
    icon: 'BookOpen',
    image: '/images/services/studying.jpg',
    featured: true,
  },
  {
    id: 'personalized-counselling',
    title: 'Personalized Counselling',
    description:
      'Receive one-on-one guidance to choose the right academic and career path abroad.',
    icon: 'Users',
    image: '/images/services/corporate.jpg',
    featured: true,
  },
  {
    id: 'country-finalization',
    title: 'Country Finalization',
    description:
      'Select the best study destination based on your goals, budget, and preferences.',
    icon: 'Globe',
    image: '/images/services/europe.jpg',
    featured: true,
  },
  {
    id: 'university-selection',
    title: 'University Selection',
    description:
      'Get help shortlisting top universities that align with your interests and profile.',
    icon: 'GraduationCap',
    image: '/images/services/queens-belfast.jpg',
    featured: true,
  },
  {
    id: 'admission-help',
    title: 'Admission Help',
    description:
      'Complete your university applications smoothly and confidently with our expert admission assistance.',
    icon: 'FileCheck',
    image: '/images/services/admission-help.jpg',
  },
  {
    id: 'sop-lor-documentation',
    title: 'SOP, LOR & Documentation',
    description:
      'Receive expert, personalized guidance for crafting a compelling Statement of Purpose and recommendation letters.',
    icon: 'FileText',
    image: '/images/services/sop-documentation.jpg',
  },
  {
    id: 'education-loan',
    title: 'Education Loan',
    description:
      'Access informed guidance and hands-on support for identifying, applying, and securing education loans.',
    icon: 'Banknote',
    image: '/images/services/education-loan.jpg',
  },
  {
    id: 'visa-support',
    title: 'Visa Support',
    description:
      'Navigate the student visa process confidently with comprehensive step-by-step documentation and embassy assistance.',
    icon: 'Stamp',
    image: '/images/services/visa-support.jpg',
  },
  {
    id: 'accommodation-assistance',
    title: 'Accommodation Assistance',
    description:
      'Find safe, comfortable, and affordable student housing options near your chosen university campus.',
    icon: 'Home',
    image: '/images/services/accommodation.jpg',
  },
  {
    id: 'pre-departure-support',
    title: 'Pre-Departure Support',
    description:
      'Prepare thoroughly for your international journey with essential travel guidance, packing tips, and orientation.',
    icon: 'Plane',
    image: '/images/services/pre-departure.jpg',
  },
  {
    id: 'tourist-visa-uk-canada',
    title: 'Tourist Visa Assistance',
    description:
      'Get professional, hassle-free support for UK and Canada tourist visa applications for visiting parents and families.',
    icon: 'PassportIcon',
    image: '/images/services/tourist-visa.jpg',
  },
];

export const featuredServices = services.filter((s) => s.featured);
