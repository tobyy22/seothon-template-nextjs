import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://seothon-template-nextjs.vercel.app'),
  title: {
    default: 'AI-Optimized Business Template | Next.js SSR',
    template: '%s | Seothon Template',
  },
  description: 'Modern Next.js business template optimized for AI search engines with server-side rendering, structured data and semantic markup',
  keywords: ['AI SEO', 'Next.js', 'SSR', 'structured data', 'semantic web', 'business template'],
  authors: [{ name: 'Seothon' }],
  creator: 'Seothon',
  publisher: 'Seothon',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://seothon-template-nextjs.vercel.app',
    siteName: 'Seothon Template',
    title: 'AI-Optimized Business Template',
    description: 'Modern Next.js business template optimized for AI search engines',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Seothon Template',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Optimized Business Template',
    description: 'Modern Next.js business template optimized for AI search engines',
    images: ['/twitter-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://seothon-template-nextjs.vercel.app',
  },
  other: {
    'ai-accessible': 'true',
    'ai-content-type': 'business-website',
    'ai-discovery': '/.well-known/ai.json',
    'ai-structured-data': '/api/ai/data',
    'ai-sitemap': '/sitemap.json',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://seothon-template-nextjs.vercel.app/#organization',
        name: 'Your Company Name',
        url: 'https://seothon-template-nextjs.vercel.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://seothon-template-nextjs.vercel.app/logo.png',
          width: 512,
          height: 512,
        },
        description: 'AI-optimized business providing innovative solutions',
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+420-XXX-XXX-XXX',
          contactType: 'customer service',
          email: 'info@example.com',
          availableLanguage: ['Czech', 'English'],
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Example Street 123',
          addressLocality: 'Prague',
          postalCode: '110 00',
          addressCountry: 'CZ',
        },
        sameAs: [
          'https://linkedin.com/company/example',
          'https://twitter.com/example',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://seothon-template-nextjs.vercel.app/#website',
        url: 'https://seothon-template-nextjs.vercel.app',
        name: 'Your Company Name',
        publisher: {
          '@id': 'https://seothon-template-nextjs.vercel.app/#organization',
        },
        inLanguage: 'cs',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://seothon-template-nextjs.vercel.app/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  }

  return (
    <html lang="cs" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        
        {children}
        
        {/* Accessibility: Screen reader announcement region */}
        <div
          id="announcements"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />
      </body>
    </html>
  )
}
