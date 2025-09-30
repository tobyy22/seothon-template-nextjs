import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]
  
  return (
    <header 
      className="bg-white shadow-sm sticky top-0 z-50" 
      role="banner"
      itemScope 
      itemType="https://schema.org/WPHeader"
    >
      <nav 
        className="container mx-auto px-4 py-4"
        role="navigation"
        aria-label="Main navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity"
            itemProp="url"
            aria-label="Homepage"
          >
            <span itemProp="name">AI Business</span>
          </Link>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8" role="menubar">
            {navigation.map((item) => (
              <li key={item.name} role="none">
                <Link
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  itemProp="url"
                  role="menuitem"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul 
            id="mobile-menu"
            className="md:hidden mt-4 space-y-2"
            role="menu"
          >
            {navigation.map((item) => (
              <li key={item.name} role="none">
                <Link
                  to={item.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Header
