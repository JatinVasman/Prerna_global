// ============================================================
// Site Configuration — Prerna Global Services
// Source of truth: WordPress analysis + business contact info
// ============================================================

export const siteConfig = {
  name: 'Prerna Global Services',
  tagline: 'One Click To Your Destination',
  description:
    'Trusted overseas education consultancy in Pune. Complete guidance for university admissions, student visas, IELTS coaching, and study abroad in UK, USA, Canada, Australia & Europe.',
  url: 'https://prernaglobalservices.com',
  contact: {
    phone: '+91 90829 00188',
    phoneFormatted: '+91\u00A090829\u00A000188',
    phoneHref: 'tel:+919082900188',
    email: 'Info@prernaglobalservices.com',
    emailHref: 'mailto:Info@prernaglobalservices.com',
    address: 'Neelaya, Old Mumbai-Pune Highway, Talegaon Dabhade, Pune, Maharashtra \u2013 410506',
    addressShort: 'Talegaon Dabhade, Pune, MH 410506',
  },
  whatsapp: {
    number: '919082900188',
    message: 'Hello!',
    get href() {
      return `https://wa.me/${this.number}?text=${encodeURIComponent(this.message)}`;
    },
  },
  social: {},
  stats: [
    { value: '2000+', label: "Students' Mentored" },
    { value: '7+', label: 'Years of Experience' },
    { value: '100%', label: 'Visa Success Rate' },
    { value: '99%', label: 'Student Satisfaction' },
  ],
  copyright: 'Prerna Global Services \u00A9 2025. All rights reserved.',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Services', href: '/services/' },
  { label: 'Destinations', href: '/destinations/' },
  { label: 'Blogs', href: '/blog/' },
  { label: 'Contact Us', href: '/contact-us/' },
];
