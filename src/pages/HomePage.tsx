import Layout from '../components/Layout'

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home - AI-Optimized Business",
    "description": "Welcome to our AI-optimized business platform offering modern solutions",
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Business",
      "description": "Leading provider of AI-optimized business solutions"
    }
  }
  
  return (
    <Layout 
      title="Home" 
      description="Welcome to our AI-optimized business platform offering modern solutions"
      structuredData={structuredData}
    >
      {/* Hero Section */}
      <section 
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
        data-ai-section="hero"
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
              itemProp="headline"
            >
              AI-Optimized Business Solutions
            </h1>
            <p 
              className="text-xl md:text-2xl text-gray-700 mb-8"
              itemProp="description"
            >
              Modern platform designed for maximum AI search engine visibility and understanding
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                itemProp="url"
              >
                Explore Services
              </a>
              <a 
                href="/contact" 
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold border-2 border-primary hover:bg-gray-50 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section 
        className="py-20"
        data-ai-section="features"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" itemProp="name">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <h3 className="text-2xl font-bold mb-4" itemProp="name">
                AI-First Design
              </h3>
              <p className="text-gray-600" itemProp="description">
                Every element of our platform is optimized for AI search engines and language models to understand and index effectively.
              </p>
            </article>
            
            <article 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <h3 className="text-2xl font-bold mb-4" itemProp="name">
                Structured Data
              </h3>
              <p className="text-gray-600" itemProp="description">
                Comprehensive JSON-LD structured data ensures AI systems can extract accurate information about your business and services.
              </p>
            </article>
            
            <article 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <h3 className="text-2xl font-bold mb-4" itemProp="name">
                Semantic HTML
              </h3>
              <p className="text-gray-600" itemProp="description">
                Clean, semantic markup with proper heading hierarchy and ARIA labels for maximum accessibility and AI comprehension.
              </p>
            </article>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section 
        className="py-20 bg-gray-50"
        data-ai-section="statistics"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-4xl font-bold text-primary mb-2" itemProp="value">100+</div>
              <div className="text-gray-600" itemProp="unitText">Happy Clients</div>
            </div>
            <div itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-4xl font-bold text-primary mb-2" itemProp="value">50+</div>
              <div className="text-gray-600" itemProp="unitText">Projects Completed</div>
            </div>
            <div itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-4xl font-bold text-primary mb-2" itemProp="value">99%</div>
              <div className="text-gray-600" itemProp="unitText">AI Indexing Rate</div>
            </div>
            <div itemScope itemType="https://schema.org/QuantitativeValue">
              <div className="text-4xl font-bold text-primary mb-2" itemProp="value">24/7</div>
              <div className="text-gray-600" itemProp="unitText">Support Available</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-20"
        data-ai-section="call-to-action"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-primary text-primary-foreground p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Optimize for AI Search?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join hundreds of businesses leveraging AI-optimized web presence
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
