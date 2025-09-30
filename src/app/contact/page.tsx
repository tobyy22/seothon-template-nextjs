import type { Metadata } from 'next'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with us for AI SEO optimization and web development services',
}

export default function ContactPage() {
  const pageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://seothon-template-nextjs.vercel.app/contact#webpage',
    url: 'https://seothon-template-nextjs.vercel.app/contact',
    name: 'Contact Us - Your Company Name',
    description: 'Get in touch with us for AI SEO optimization and web development services',
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
          name: 'Contact',
          item: 'https://seothon-template-nextjs.vercel.app/contact',
        },
      ],
    },
  }

  const contactPointStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone: '+420-XXX-XXX-XXX',
    contactType: 'customer service',
    email: 'info@example.com',
    availableLanguage: ['Czech', 'English'],
    areaServed: 'CZ',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointStructuredData) }}
      />
      
      <Header />
      
      <main id="main-content" role="main" data-ai-content="contact-page">
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
                <li className="text-gray-900">Contact</li>
              </ol>
            </nav>
            
            <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Contact Us
            </h1>
            <p className="max-w-2xl text-xl text-gray-600">
              Get in touch to discuss your AI SEO needs
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16" data-ai-section="contact-info">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Get in Touch
                </h2>
                <p className="mb-8 text-gray-600">
                  We&apos;d love to hear from you. Fill out the form or use any of the
                  contact methods below.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <Mail className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href="mailto:info@example.com"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        info@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <Phone className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a
                        href="tel:+420XXXXXXXXX"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        +420 XXX XXX XXX
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <address className="not-italic text-gray-600">
                        Example Street 123
                        <br />
                        110 00 Prague
                        <br />
                        Czech Republic
                      </address>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="mb-4 font-semibold text-gray-900">
                    Business Hours
                  </h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Monday - Friday:</dt>
                      <dd className="font-medium text-gray-900">9:00 - 18:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Saturday:</dt>
                      <dd className="font-medium text-gray-900">10:00 - 14:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Sunday:</dt>
                      <dd className="font-medium text-gray-900">Closed</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Send us a Message
                </h2>
                <Suspense fallback={<div>Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
