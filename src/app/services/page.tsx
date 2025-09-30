import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Search, Code, BarChart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our AI SEO optimization and web development services',
}

const services = [
  {
    id: 'ai-seo',
    name: 'AI SEO Optimization',
    icon: Search,
    description: 'Optimize your website for AI-powered search engines and assistants',
    features: [
      'Structured data implementation',
      'Semantic HTML optimization',
      'AI-readable content architecture',
      'Schema.org markup',
    ],
    price: 'From $2,000',
  },
  {
    id: 'web-development',
    name: 'Modern Web Development',
    icon: Code,
    description: 'Build fast, accessible, and AI-optimized web applications',
    features: [
      'Next.js server-side rendering',
      'React component architecture',
      'Performance optimization',
      'Mobile-first responsive design',
    ],
    price: 'From $5,000',
  },
  {
    id: 'analytics',
    name: 'AI Analytics & Insights',
    icon: BarChart,
    description: 'Track and analyze how AI systems interact with your content',
    features: [
      'AI bot traffic analysis',
      'Content effectiveness metrics',
      'Structured data validation',
      'Competitive analysis',
    ],
    price: 'From $1,500/month',
  },
]

export default function ServicesPage() {
  const pageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://seothon-template-nextjs.vercel.app/services#webpage',
    url: 'https://seothon-template-nextjs.vercel.app/services',
    name: 'Services - Your Company Name',
    description: 'Explore our AI SEO optimization and web development services',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://seothon-template-nextjs.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://seothon-template-nextjs.vercel.app/services',
        },
      ],
    },
  }

  const servicesStructuredData = services.map((service, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://seothon-template-nextjs.vercel.app/services#${service.id}`,
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Your Company Name',
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
    },
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
      />
      
      <Header />
      
      <main id="main-content" role="main" data-ai-content="services-page">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-primary-50 to-white py-16">
          <div className="container mx-auto px-4">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <a href="/" className="text-gray-600 hover:text-primary-600">
                    Home
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-900">Services</li>
              </ol>
            </nav>
            
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Our Services
            </h1>
            <p className="max-w-2xl text-xl text-gray-600">
              Comprehensive solutions for AI-optimized web presence
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16" data-ai-section="services-list">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article
                    key={service.id}
                    id={service.id}
                    className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    
                    <h2
                      className="mb-2 text-2xl font-semibold text-gray-900"
                      itemProp="name"
                    >
                      {service.name}
                    </h2>
                    
                    <p className="mb-4 text-gray-600" itemProp="description">
                      {service.description}
                    </p>
                    
                    <ul className="mb-6 flex-grow space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <p className="mb-4 text-2xl font-bold text-primary-600">
                        {service.price}
                      </p>
                      <Link
                        href={`/contact?service=${service.id}`}
                        className="block w-full rounded-lg bg-primary-600 px-6 py-3 text-center font-medium text-white transition-colors hover:bg-primary-700"
                      >
                        Get Started
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16" data-ai-section="cta">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Not Sure Which Service You Need?
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                Contact us for a free consultation and we'll help you find the perfect
                solution for your business.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-primary-700"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
