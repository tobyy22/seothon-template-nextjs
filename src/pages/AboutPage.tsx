import Layout from '../components/Layout'

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - AI Business",
    "description": "Learn about our mission to revolutionize business with AI-optimized solutions",
    "mainEntity": {
      "@type": "Organization",
      "name": "AI Business",
      "foundingDate": "2024",
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": 50
      },
      "description": "We are a team of experts dedicated to creating AI-optimized business solutions"
    }
  }
  
  return (
    <Layout 
      title="About Us" 
      description="Learn about our mission to revolutionize business with AI-optimized solutions"
      structuredData={structuredData}
    >
      <article 
        className="py-20"
        itemScope
        itemType="https://schema.org/AboutPage"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8" itemProp="headline">
            About Our Company
          </h1>
          
          <div className="prose prose-lg max-w-none" itemProp="text">
            <section className="mb-12" data-ai-content="company-overview">
              <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are pioneers in AI-optimized web solutions, dedicated to helping businesses thrive in the age of artificial intelligence. Our platform is built from the ground up with AI search engines and language models in mind, ensuring maximum visibility and understanding.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2024, we've helped over 100 businesses optimize their online presence for AI-driven search and discovery. Our team combines expertise in web development, SEO, and artificial intelligence to deliver cutting-edge solutions.
              </p>
            </section>
            
            <section className="mb-12" data-ai-content="mission">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To empower businesses with AI-first web solutions that maximize discoverability, understanding, and engagement in an AI-driven digital landscape. We believe that the future of search is AI-powered, and we're here to ensure our clients are ready.
              </p>
            </section>
            
            <section className="mb-12" data-ai-content="values">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">Innovation:</span>
                  <span className="text-gray-700">We constantly evolve our solutions to stay ahead of AI technology trends.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">Transparency:</span>
                  <span className="text-gray-700">We believe in clear, structured data that both humans and AI can understand.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">Excellence:</span>
                  <span className="text-gray-700">We deliver high-quality, semantically perfect code that performs flawlessly.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary mr-2">Accessibility:</span>
                  <span className="text-gray-700">Our solutions are accessible to everyone, including AI systems and assistive technologies.</span>
                </li>
              </ul>
            </section>
            
            <section className="mb-12" data-ai-content="team">
              <h2 className="text-3xl font-bold mb-4">Our Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div 
                  className="bg-gray-50 p-6 rounded-lg"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <h3 className="font-bold text-xl mb-2" itemProp="name">John Doe</h3>
                  <p className="text-primary font-semibold mb-2" itemProp="jobTitle">CEO & Founder</p>
                  <p className="text-gray-600 text-sm" itemProp="description">
                    10+ years in web development and AI optimization
                  </p>
                </div>
                <div 
                  className="bg-gray-50 p-6 rounded-lg"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <h3 className="font-bold text-xl mb-2" itemProp="name">Jane Smith</h3>
                  <p className="text-primary font-semibold mb-2" itemProp="jobTitle">CTO</p>
                  <p className="text-gray-600 text-sm" itemProp="description">
                    AI and machine learning specialist with 8 years experience
                  </p>
                </div>
                <div 
                  className="bg-gray-50 p-6 rounded-lg"
                  itemScope
                  itemType="https://schema.org/Person"
                >
                  <h3 className="font-bold text-xl mb-2" itemProp="name">Mike Johnson</h3>
                  <p className="text-primary font-semibold mb-2" itemProp="jobTitle">Head of SEO</p>
                  <p className="text-gray-600 text-sm" itemProp="description">
                    SEO expert specializing in AI search optimization
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default AboutPage
