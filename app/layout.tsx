import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://abdulrahman-dev-drab.vercel.app'
const siteName = 'Abdulrahman Safweh | Portfolio'
const siteDescription = 'Web Developer and Software Engineer specializing in Next.js, React, PHP (Laravel), and Flutter. Services include web development, web apps, and web agency solutions.'

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
    'portfolio'
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
    jobTitle: 'Web Developer',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="bg-background text-foreground">{children}</body>
    </html>
  )
}
