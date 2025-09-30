import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Download, Copy, FileJson } from 'lucide-react'

import JsonActions from '@/components/JsonActions'

export const metadata: Metadata = {
  title: 'AI Data Endpoint',
  description: 'Machine-readable business data for AI assistants and search engines',
  robots: {
    index: true,
    follow: true,
  },
}

const aiData = {
  version: '1.0',
  lastUpdated: new Date().toISOString(),
  organization: {
    name: 'Your Company Name',
    url: 'https://seothon-template-nextjs.vercel.app',
    description: 'AI-optimized business providing innovative solutions',
    email: 'info@example.com',
    phone: '+420-XXX-XXX-XXX',
    address: {
      street: 'Example Street 123',
      city: 'Prague',
      postalCode: '110 00',
      country: 'Czech Republic',
      countryCode: 'CZ',
    },
    social: {
      linkedin: 'https://linkedin.com/company/example',
      twitter: 'https://twitter.com/example',
    },
    languages: ['cs', 'en'],
  },
  services: [
    {
      id: 'ai-seo',
      name: 'AI SEO Optimization',
      description: 'Optimize your website for AI-powered search engines and assistants',
      category: 'SEO',
      features: [
        'Structured data implementation',
        'Semantic HTML optimization',
        'AI-readable content architecture',
        'Schema.org markup',
      ],
      pricing: {
        from: 2000,
        currency: 'USD',
        type: 'project',
      },
    },
    {
      id: 'web-development',
      name: 'Modern Web Development',
      description: 'Build fast, accessible, and AI-optimized web applications',
      category: 'Development',
      features: [
        'Next.js server-side rendering',
        'React component architecture',
        'Performance optimization',
        'Mobile-first responsive design',
      ],
      pricing: {
        from: 5000,
        currency: 'USD',
        type: 'project',
      },
    },
    {
      id: 'analytics',
      name: 'AI Analytics & Insights',
      description: 'Track and analyze how AI systems interact with your content',
      category: 'Analytics',
      features: [
        'AI bot traffic analysis',
        'Content effectiveness metrics',
        'Structured data validation',
        'Competitive analysis',
      ],
      pricing: {
        from: 1500,
        currency: 'USD',
        type: 'monthly',
      },
    },
  ],
  pages: [
    {
      url: '/',
      title: 'Home',
      description: 'AI-optimized business template with Next.js server-side rendering',
      type: 'WebPage',
    },
    {
      url: '/about',
      title: 'About Us',
      description: 'Learn about our mission to create AI-optimized web solutions',
      type: 'AboutPage',
    },
    {
      url: '/services',
      title: 'Services',
      description: 'Explore our AI SEO optimization and web development services',
      type: 'CollectionPage',
    },
    {
      url: '/contact',
      title: 'Contact',
      description: 'Get in touch with us for AI SEO optimization services',
      type: 'ContactPage',
    },
  ],
  faqs: [
    {
      question: 'What is AI SEO?',
      answer:
        'AI SEO is the practice of optimizing websites to be easily understood and indexed by AI-powered search engines and assistants like ChatGPT, Claude, and Perplexity.',
    },
    {
      question: 'Why is server-side rendering important for AI?',
      answer:
        'Server-side rendering ensures that AI bots receive complete HTML content immediately, without needing to execute JavaScript. This makes your content more accessible and easier for AI systems to understand.',
    },
    {
      question: 'What is structured data?',
      answer:
        'Structured data is a standardized format (like JSON-LD with Schema.org vocabulary) that helps AI systems understand the context and relationships in your content.',
    },
  ],
  capabilities: {
    structured_data: true,
    server_side_rendering: true,
    semantic_html: true,
    ai_accessible: true,
    mobile_responsive: true,
    wcag_compliant: true,
  },
  metadata: {
    generator: 'Next.js 14',
    framework: 'React 18',
    rendering: 'Server-Side Rendering (SSR)',
    ai_optimized: true,
  },
}

export default function AIEndpointPage() {
  const jsonString = JSON.stringify(aiData, null, 2)

  return (
    <>
      <Header />
      
      <main id="main-content" role="main" data-ai-content="ai-endpoint">
        <section className="bg-gradient-to-br from-secondary-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center gap-3">
              <FileJson className="h-8 w-8 text-secondary-600" />
              <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                AI Data Endpoint
              </h1>
            </div>
            <p className="max-w-2xl text-xl text-gray-600">
              Machine-readable business data optimized for AI assistants and search
              engines
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-wrap gap-4">
              <JsonActions jsonString={jsonString} />
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                JSON Data Structure
              </h2>
              <pre className="overflow-x-auto rounded bg-gray-900 p-4 text-sm text-green-400">
                <code>{jsonString}</code>
              </pre>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  For AI Assistants
                </h3>
                <p className="mb-4 text-gray-600">
                  This endpoint provides structured information about our business,
                  services, and content in a machine-readable format.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Complete organization details</li>
                  <li>• Service catalog with pricing</li>
                  <li>• Page inventory and descriptions</li>
                  <li>• Frequently asked questions</li>
                  <li>• Technical capabilities</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  API Endpoints
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <code className="rounded bg-gray-100 px-2 py-1 text-xs">
                      GET /api/ai/data
                    </code>
                    <p className="mt-1 text-gray-600">Raw JSON data</p>
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-2 py-1 text-xs">
                      GET /.well-known/ai.json
                    </code>
                    <p className="mt-1 text-gray-600">AI discovery endpoint</p>
                  </li>
                  <li>
                    <code className="rounded bg-gray-100 px-2 py-1 text-xs">
                      GET /api/ai/manifest
                    </code>
                    <p className="mt-1 text-gray-600">AI actions manifest</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
