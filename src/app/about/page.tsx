import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Target, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission to create AI-optimized web solutions',
}

export default function AboutPage() {
  const pageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://seothon-template-nextjs.vercel.app/about#webpage',
    url: 'https://seothon-template-nextjs.vercel.app/about',
    name: 'About Us - Your Company Name',
    description: 'Learn about our mission to create AI-optimized web solutions',
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
          name: 'About',
          item: 'https://seothon-template-nextjs.vercel.app/about',
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
      
      <main id="main-content" role="main" data-ai-content="about-page">
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
                <li className="text-gray-900">About</li>
              </ol>
            </nav>
            
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              About Us
            </h1>
            <p className="max-w-2xl text-xl text-gray-600">
              Building the future of AI-optimized web experiences
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16" data-ai-section="mission">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mb-4 text-lg text-gray-700">
                We believe the future of the web is AI-first. As AI-powered search engines
                and assistants become the primary way people discover and interact with
                content, websites must evolve to be truly machine-readable.
              </p>
              <p className="text-lg text-gray-700">
                Our mission is to help businesses create web experiences that are
                perfectly structured for both humans and AI systems, ensuring maximum
                visibility in this new era of search.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-16" data-ai-section="values">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Our Values
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <article className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  User-Centric
                </h3>
                <p className="text-gray-600">
                  We design for humans first, ensuring accessibility and excellent user
                  experience while optimizing for AI.
                </p>
              </article>

              <article className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100">
                  <Target className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Innovation-Driven
                </h3>
                <p className="text-gray-600">
                  We stay ahead of the curve, implementing cutting-edge standards and
                  best practices for AI optimization.
                </p>
              </article>

              <article className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  Quality-Focused
                </h3>
                <p className="text-gray-600">
                  Every line of code is crafted with attention to detail, semantic
                  correctness, and performance.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16" data-ai-section="team">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Team</h2>
              <p className="text-lg text-gray-700">
              We&apos;re a passionate team of developers, designers, and SEO specialists
              dedicated to bridging the gap between human-readable content and
              machine-readable data structures.
            </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
