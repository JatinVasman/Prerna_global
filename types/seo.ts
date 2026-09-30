export interface LocationEntity {
  slug: string;
  city_name: string;
  state: string;
  state_slug: string;
  region: 'West India' | 'South India' | 'North India' | 'Central India' | 'East India' | 'Northeast India' | string;
  letter: string;
  tier: 1 | 2 | 3;
  tier_label: 'Tier 1 Metro' | 'Tier 2 Educational Hub' | 'Tier 3 City' | string;
  is_popular: boolean;
  status: 'published' | 'draft';
  is_indexable: boolean;
  consultation_mode: 'hybrid_physical' | 'dedicated_virtual';
  office_proximity: string;
  consultation_note: string;
  feeder_colleges: string[];
  popular_destinations: Record<string, string>;
  exam_centers: string;
  vfs_center: string;
  related_blogs: string[];
  faqs: Array<{ q: string; a: string }>;
}

export interface StateEntity {
  name: string;
  slug: string;
  region: string;
  vfs_center?: string;
  exam_centers?: string;
  feeder_colleges?: string[];
  popular_destinations?: Record<string, string>;
  total_cities: number;
  cities: Array<{
    name: string;
    slug: string;
    tier: number;
    tier_label: string;
    is_popular: boolean;
    status: string;
  }>;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  icon?: string;
  count?: number;
}

export interface BlogArticle {
  slug: string;
  title: string;
  seo_title?: string;
  meta_description?: string;
  excerpt: string;
  category_slug: string;
  category_name: string;
  country?: string;
  topic?: string;
  featured_image: string;
  featured_image_alt: string;
  read_time: string;
  date: string;
  updated_date?: string;
  author: string;
  author_role: string;
  status: 'published' | 'draft';
  is_indexable?: boolean;
  table_of_contents?: Array<{ id: string; title: string }>;
  quick_takeaways?: string[];
  content_html?: string;
  faqs?: Array<{ q: string; a: string }>;
  related_destinations?: Array<{ name: string; url: string }>;
  related_services?: Array<{ name: string; url: string }>;
}
