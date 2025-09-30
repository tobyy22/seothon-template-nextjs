import Layout from '../components/Layout'

const ServicesPage = () => {
  const services = [
    {
      name: "AI SEO Optimization",
      description: "Comprehensive optimization for AI search engines including Claude, ChatGPT, and Perplexity. We ensure your content is perfectly structured for AI understanding.",
      features: [
        "Structured data implementation",
        "Semantic HTML optimization",
        "AI-readable content architecture",
        "JSON-LD schema markup"
      ],
      price: "From €999/month"
    },
    {
      name: "Structured Data Consulting",
      description: "Expert guidance on implementing Schema.org markup and JSON-LD structured data to maximize AI comprehension of your business.",
      features: [
        "Schema.org implementation",
        "Custom structured data design",
        "AI endpoint development",
        "Ongoing maintenance"
      ],
      price: "From €1,499/month"
    },
    {
      name: "AI-First Web Development",
      description: "Build modern websites designed from the ground up for AI discoverability and understanding, not just human visitors.",
      features: [
        "React/TypeScript development",
        "AI-optimized architecture",
        "Semantic component library",
        "Performance optimization"
      ],
      price: "From €4,999"
    }
  ]
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI SEO Optimization Services",
    "provider": {
      "@type": "Organization",
      "name": "AI Business"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Czech Republic"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Optimization Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }))
    }
  }
  
  return (
    <Layout 
      title="Services" 
      description="Professional AI SEO and web optimization services designed for maximum AI search engine visibility"
      structuredData={structuredData}
    >
      <div className="py-20">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI optimization services to ensure your business is discoverable and understood by AI search engines
            </p>
          </header>
          
          <div 
            className="grid md:grid-cols-3 gap-8"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {services.map((service, index) => (
              <article 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
                data-ai-content={`service-${index}`}
              >
                <h2 className="text-2xl font-bold mb-4" itemProp="name">
                  {service.name}
                </h2>
                <p className="text-gray-600 mb-6" itemProp="description">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-lg">Features:</h3>
                  <ul className="space-y-2" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-6">
                  <div className="text-2xl font-bold text-primary mb-4" itemProp="priceRange">
                    {service.price}
                  </div>
                  <a 
                    href="/contact" 
                    className="block w-full bg-primary text-primary-foreground text-center py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <section className="mt-20 bg-blue-50 rounded-2xl p-12" data-ai-section="why-choose">
            <h2 className="text-3xl font-bold text-center mb-8">Why AI Optimization Matters</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="font-bold text-xl mb-3">Future-Proof Your Business</h3>
                <p className="text-gray-700">
                  AI search is rapidly becoming the primary way users discover information. Being AI-optimized means staying ahead of the curve.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Better Understanding</h3>
                <p className="text-gray-700">
                  Structured data and semantic markup help AI systems accurately understand and represent your business.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Increased Visibility</h3>
                <p className="text-gray-700">
                  Properly optimized content appears more frequently and accurately in AI-generated responses and summaries.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3">Competitive Advantage</h3>
                <p className="text-gray-700">
                  Most businesses haven't optimized for AI yet. Be among the first in your industry to capture this opportunity.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
