import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import LeadCaptureModal from '@/components/forms/LeadCaptureModal';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { siteConfig } from '@/data/site';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1AAFB0',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Study Abroad Consultancy, Pune`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'study abroad consultancy Pune',
    'overseas education consultancy',
    'IELTS coaching Pune',
    'UK student visa',
    'Canada study visa',
    'university admission help',
    'Prerna Global Services',
    'Talegaon Dabhade',
  ],
  authors: [{ name: 'Prerna Global Services' }],
  creator: 'Prerna Global Services',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Study Abroad Consultancy, Pune`,
    description: siteConfig.description,
    images: [
      {
        url: '/images/brand/logo.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Study Abroad Consultancy, Pune`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <SmoothScroll>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <LeadCaptureModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
