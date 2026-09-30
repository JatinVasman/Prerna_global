// ============================================================
// Prerna Global Services — Shared TypeScript Types
// ============================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  featured?: boolean;
}

export interface DestinationItem {
  id: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  highlights?: string[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}
