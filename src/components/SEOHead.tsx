import { useEffect } from 'react'

interface SEOHeadProps {
  title?: string
  description?: string
  structuredData?: object
}

const SEOHead = ({ title, description, structuredData }: SEOHeadProps) => {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = `${title} | AI-Optimized Business`
    }
    
    // Update meta description
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
    }
    
    // Add structured data if provided
    if (structuredData) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      script.id = 'page-structured-data'
      document.head.appendChild(script)
      
      return () => {
        const existingScript = document.getElementById('page-structured-data')
        if (existingScript) {
          document.head.removeChild(existingScript)
        }
      }
    }
  }, [title, description, structuredData])
  
  return null
}

export default SEOHead
