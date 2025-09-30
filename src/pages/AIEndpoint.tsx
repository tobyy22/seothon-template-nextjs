import { useEffect, useState } from 'react'

interface AIData {
  organization: {
    name: string
    description: string
    foundingDate: string
    address: {
      street: string
      city: string
      postalCode: string
      country: string
    }
    contact: {
      email: string
      phone: string
      website: string
    }
    socialMedia: {
      linkedin?: string
      twitter?: string
    }
  }
  services: Array<{
    name: string
    description: string
    category: string
    features: string[]
    pricing: string
  }>
  pages: Array<{
    title: string
    url: string
    description: string
    lastModified: string
    content: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
  metadata: {
    lastUpdated: string
    version: string
    aiOptimized: boolean
  }
}

const AIEndpoint = () => {
  const [data, setData] = useState<AIData | null>(null)
  const [format, setFormat] = useState<'json' | 'html'>('html')
  
  useEffect(() => {
    // This would typically fetch from an API
    const aiData: AIData = {
      organization: {
        name: "AI Business",
        description: "Leading provider of AI-optimized web solutions and SEO services. We specialize in helping businesses maximize their visibility in AI-powered search engines and ensure accurate representation in AI-generated responses.",
        foundingDate: "2024-01-01",
        address: {
          street: "Example Street 123",
          city: "Prague",
          postalCode: "110 00",
          country: "Czech Republic"
        },
        contact: {
          email: "info@example.com",
          phone: "+420-XXX-XXX-XXX",
          website: "https://example.com"
        },
        socialMedia: {
          linkedin: "https://linkedin.com/company/example",
          twitter: "https://twitter.com/example"
        }
      },
      services: [
        {
          name: "AI SEO Optimization",
          description: "Comprehensive optimization for AI search engines including Claude, ChatGPT, and Perplexity. We ensure your content is perfectly structured for AI understanding and maximum visibility in AI-generated responses.",
          category: "SEO",
          features: [
            "Structured data implementation with Schema.org",
            "Semantic HTML optimization",
            "AI-readable content architecture",
            "JSON-LD schema markup",
            "AI crawler optimization",
            "Content formatting for AI parsing"
          ],
          pricing: "From €999/month"
        },
        {
          name: "Structured Data Consulting",
          description: "Expert guidance on implementing Schema.org markup and JSON-LD structured data to maximize AI comprehension of your business. We ensure AI systems accurately understand and represent your organization.",
          category: "Consulting",
          features: [
            "Schema.org implementation strategy",
            "Custom structured data design",
            "AI endpoint development",
            "Ongoing maintenance and updates",
            "Testing and validation",
            "Performance monitoring"
          ],
          pricing: "From €1,499/month"
        },
        {
          name: "AI-First Web Development",
          description: "Build modern websites designed from the ground up for AI discoverability and understanding. We create semantic, accessible, and AI-optimized web applications using the latest technologies.",
          category: "Development",
          features: [
            "React/TypeScript development",
            "AI-optimized architecture",
            "Semantic component library",
            "Performance optimization",
            "Accessibility compliance",
            "Mobile-first responsive design"
          ],
          pricing: "From €4,999"
        }
      ],
      pages: [
        {
          title: "Home",
          url: "/",
          description: "Welcome to our AI-optimized business platform offering modern solutions for maximum AI search engine visibility",
          lastModified: "2025-09-29",
          content: "AI-Optimized Business Solutions. Modern platform designed for maximum AI search engine visibility and understanding. We specialize in helping businesses thrive in the age of AI-powered search."
        },
        {
          title: "About Us",
          url: "/about",
          description: "Learn about our mission to revolutionize business with AI-optimized solutions",
          lastModified: "2025-09-29",
          content: "We are pioneers in AI-optimized web solutions, dedicated to helping businesses thrive in the age of artificial intelligence. Founded in 2024, we've helped over 100 businesses optimize their online presence for AI-driven search and discovery."
        },
        {
          title: "Services",
          url: "/services",
          description: "Professional AI SEO and web optimization services designed for maximum AI search engine visibility",
          lastModified: "2025-09-29",
          content: "Comprehensive AI optimization services including AI SEO Optimization, Structured Data Consulting, and AI-First Web Development. We ensure your business is discoverable and understood by AI search engines."
        },
        {
          title: "Contact",
          url: "/contact",
          description: "Get in touch with our AI optimization experts. We're here to help you succeed.",
          lastModified: "2025-09-29",
          content: "Contact us at info@example.com or +420-XXX-XXX-XXX. Located in Prague, Czech Republic. Available Monday-Friday 9:00 AM - 6:00 PM."
        }
      ],
      faqs: [
        {
          question: "What is AI SEO optimization?",
          answer: "AI SEO optimization is the process of structuring your website and content to be easily understood and indexed by AI-powered search engines and language models like Claude, ChatGPT, and Perplexity. This includes implementing structured data, semantic HTML, and creating content that AI systems can accurately parse and represent."
        },
        {
          question: "Why do I need AI optimization for my website?",
          answer: "AI-powered search is rapidly becoming the primary way users discover information. Traditional SEO focuses on human readers and traditional search engines, but AI systems need structured, semantic data to accurately understand and represent your business. Being AI-optimized ensures your business appears correctly in AI-generated responses and recommendations."
        },
        {
          question: "What is structured data and why is it important?",
          answer: "Structured data is a standardized format (like JSON-LD with Schema.org vocabulary) that helps AI systems and search engines understand the content and context of your web pages. It's crucial for AI optimization because it provides explicit, machine-readable information about your business, products, services, and content."
        },
        {
          question: "How long does it take to see results from AI optimization?",
          answer: "AI optimization results can vary, but typically you'll start seeing improved representation in AI-generated responses within 2-4 weeks after implementation. Full optimization and maximum visibility usually takes 2-3 months as AI systems re-crawl and re-index your optimized content."
        },
        {
          question: "Do you work with businesses outside of Czech Republic?",
          answer: "Yes, we work with businesses worldwide. While we're based in Prague, Czech Republic, we provide AI optimization services to clients globally. We communicate in both Czech and English and can work remotely with any business looking to improve their AI search presence."
        }
      ],
      metadata: {
        lastUpdated: new Date().toISOString(),
        version: "1.0.0",
        aiOptimized: true
      }
    }
    
    setData(aiData)
  }, [])
  
  const downloadJSON = () => {
    if (!data) return
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ai-data.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }
  
  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Loading AI data...</p>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Data Endpoint</h1>
          <p className="text-gray-600 mb-6">
            This page provides structured, machine-readable data about our organization, services, and content.
            AI systems and language models can use this endpoint to accurately understand and represent our business.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setFormat('html')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                format === 'html' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Human-Readable
            </button>
            <button
              onClick={() => setFormat('json')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                format === 'json' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              JSON Format
            </button>
            <button
              onClick={downloadJSON}
              className="px-6 py-2 rounded-lg font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              Download JSON
            </button>
          </div>
        </header>
        
        {format === 'html' ? (
          <div className="space-y-6">
            {/* Organization Info */}
            <section className="bg-white rounded-lg shadow-md p-8" data-ai-section="organization">
              <h2 className="text-2xl font-bold mb-4">Organization</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Basic Information</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-medium text-gray-600">Name:</dt>
                      <dd>{data.organization.name}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-600">Founded:</dt>
                      <dd>{data.organization.foundingDate}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-600">Description:</dt>
                      <dd className="text-sm">{data.organization.description}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Contact</h3>
                  <dl className="space-y-2">
                    <div>
                      <dt className="font-medium text-gray-600">Email:</dt>
                      <dd>{data.organization.contact.email}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-600">Phone:</dt>
                      <dd>{data.organization.contact.phone}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-gray-600">Address:</dt>
                      <dd className="text-sm">
                        {data.organization.address.street}<br />
                        {data.organization.address.postalCode} {data.organization.address.city}<br />
                        {data.organization.address.country}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
            
            {/* Services */}
            <section className="bg-white rounded-lg shadow-md p-8" data-ai-section="services">
              <h2 className="text-2xl font-bold mb-4">Services</h2>
              <div className="space-y-6">
                {data.services.map((service, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {service.category}
                      </span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {service.pricing}
                      </span>
                    </div>
                    <details className="mt-3">
                      <summary className="cursor-pointer font-semibold text-sm text-gray-700 hover:text-primary">
                        View Features ({service.features.length})
                      </summary>
                      <ul className="mt-2 space-y-1 ml-4">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="text-sm text-gray-600">• {feature}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Pages */}
            <section className="bg-white rounded-lg shadow-md p-8" data-ai-section="pages">
              <h2 className="text-2xl font-bold mb-4">Pages</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {data.pages.map((page, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold mb-1">{page.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{page.description}</p>
                    <a 
                      href={page.url} 
                      className="text-primary text-sm hover:underline"
                    >
                      {page.url}
                    </a>
                    <p className="text-xs text-gray-500 mt-2">
                      Last modified: {page.lastModified}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* FAQs */}
            <section className="bg-white rounded-lg shadow-md p-8" data-ai-section="faqs">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <details key={index} className="border-b pb-4">
                    <summary className="cursor-pointer font-semibold text-lg hover:text-primary">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            
            {/* Metadata */}
            <section className="bg-white rounded-lg shadow-md p-8" data-ai-section="metadata">
              <h2 className="text-2xl font-bold mb-4">Metadata</h2>
              <dl className="grid md:grid-cols-3 gap-4">
                <div>
                  <dt className="font-medium text-gray-600">Version:</dt>
                  <dd>{data.metadata.version}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-600">Last Updated:</dt>
                  <dd>{new Date(data.metadata.lastUpdated).toLocaleString()}</dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-600">AI Optimized:</dt>
                  <dd>{data.metadata.aiOptimized ? 'Yes' : 'No'}</dd>
                </div>
              </dl>
            </section>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">JSON Data</h2>
              <button
                onClick={() => navigator.clipboard.writeText(JSON.stringify(data, null, 2))}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-semibold transition-colors"
              >
                Copy to Clipboard
              </button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto text-sm">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}

export default AIEndpoint
