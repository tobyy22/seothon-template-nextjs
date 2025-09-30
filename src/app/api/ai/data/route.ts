import { NextResponse } from 'next/server'

export async function GET() {
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

  return NextResponse.json(aiData, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'Content-Type': 'application/json',
    },
  })
}
