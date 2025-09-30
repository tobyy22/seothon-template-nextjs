import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer 
      className="bg-gray-50 border-t mt-auto" 
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div itemScope itemType="https://schema.org/Organization">
            <h3 className="font-bold text-lg mb-4" itemProp="name">AI Business</h3>
            <p className="text-muted-foreground mb-4" itemProp="description">
              Modern business solutions optimized for AI search engines.
            </p>
            <address className="not-italic text-sm text-muted-foreground" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">Example Street 123</span><br />
              <span itemProp="postalCode">110 00</span> <span itemProp="addressLocality">Prague</span><br />
              <span itemProp="addressCountry">Czech Republic</span>
            </address>
          </div>
          
          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/ai" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Data Endpoint
                </Link>
              </li>
            </ul>
          </nav>
          
          {/* Contact Info */}
          <div itemScope itemType="https://schema.org/ContactPoint">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="mailto:info@example.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  itemProp="email"
                >
                  info@example.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+420XXXXXXXXX" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  itemProp="telephone"
                >
                  +420 XXX XXX XXX
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} AI Business. All rights reserved.
            {' | '}
            <Link to="/ai" className="hover:text-primary transition-colors">
              AI-Optimized Content
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
