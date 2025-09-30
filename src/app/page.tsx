import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'AI-optimized business template with Next.js server-side rendering',
}

export default function HomePage() {
  const pageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://seothon-template-nextjs.vercel.app/#webpage',
    url: 'https://seothon-template-nextjs.vercel.app',
    name: 'Home - Your Company Name',
    description: 'AI-optimized business template with Next.js server-side rendering',
    datePublished: '2025-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://seothon-template-nextjs.vercel.app',
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />
      
      <Header />
      
      <main id="main-content" role="main" data-ai-content="homepage">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-20"
          data-ai-section="hero"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
                AI-Optimized Business Template
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                Modern Next.js template with server-side rendering, structured data,
                and semantic markup designed for maximum AI search engine visibility.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/ai-endpoint"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-secondary-600 px-8 py-3 text-base font-medium text-secondary-600 transition-colors hover:bg-secondary-50"
                >
                  View AI Data
                  <Sparkles className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16" data-ai-section="features">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Built for AI Search Engines
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Every aspect optimized for maximum visibility in AI-powered search
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <Zap className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Server-Side Rendering
                </h3>
                <p className="text-gray-600">
                  Full HTML rendered on server. AI bots see complete content immediately,
                  no JavaScript execution needed.
                </p>
              </article>

              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100">
                  <Sparkles className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Structured Data
                </h3>
                <p className="text-gray-600">
                  Comprehensive JSON-LD Schema.org markup on every page. AI assistants
                  understand your content structure perfectly.
                </p>
              </article>

              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Semantic HTML
                </h3>
                <p className="text-gray-600">
                  Proper heading hierarchy, ARIA labels, and microdata. Built for
                  accessibility and AI comprehension.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16" data-ai-section="cta">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Ready to Get Started?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Contact us today to learn how we can help optimize your business for
                the AI-powered web.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
