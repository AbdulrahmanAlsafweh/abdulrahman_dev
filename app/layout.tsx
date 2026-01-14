import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import RevealOnScroll from './components/RevealOnScroll'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulrahman-dev-drab.vercel.app'
const siteName = 'Abdulrahman Safweh | Portfolio'
const siteDescription =
  'Developer building customer-ready websites, ecommerce experiences, business systems, and automation. Specialized in Next.js, React, PHP, and Flutter.'

const bodyFont = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const displayFont = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'light');
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    if (!reduceMotion) {
      root.dataset.revealReady = 'true';
    }
  } catch (error) {
    const root = document.documentElement;
    root.dataset.theme = 'light';
    root.style.colorScheme = 'light';
  }
})();
`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: '%s | Abdulrahman Safweh'
  },
  description: siteDescription,
  keywords: [
    'Abdulrahman Safweh',
    'Abdulrahman Safwa',
    'Abdelrahman Safweh',
    'web developer',
    'web development',
    'software engineer',
    'Next.js developer',
    'React developer',
    'full-stack developer',
    'freelance web developer',
    'web agency',
    'portfolio',
    'ecommerce developer',
    'business systems',
    'automation'
  ],
  authors: [{ name: 'Abdulrahman Safweh', url: siteUrl }],
  creator: 'Abdulrahman Safweh',
  publisher: 'Abdulrahman Safweh',
  applicationName: 'Portfolio',
  category: 'Technology',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: 'Abdulrahman Safweh',
    images: [
      {
        url: '/icon.png',
        width: 512,
        height: 512,
        alt: 'Abdulrahman Safweh portfolio icon',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description: siteDescription,
    images: ['/icon.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png?v=3', type: 'image/png', sizes: '32x32' },
      { url: '/icon.png?v=3', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: ['/icon.png?v=3'],
    apple: ['/icon.png?v=3'],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abdulrahman Safweh',
    url: siteUrl,
    jobTitle: 'Web and Systems Developer',
    sameAs: [
      // Add your real profiles if available
    ],
  }

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Abdulrahman Safweh Portfolio',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-background text-foreground antialiased`}>
        <RevealOnScroll />
        {children}
      </body>
    </html>
  )
}
