import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const structuredData = {
    '@type': 'WPFooter',
    copyrightYear: currentYear,
    copyrightHolder: {
      '@type': 'Organization',
      name: 'Your Company Name',
    },
  }

  return (
    <footer
      role="contentinfo"
      itemScope
      itemType="https://schema.org/WPFooter"
      className="border-t bg-gray-50"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Seothon</h3>
            <p className="text-sm text-gray-600">
              AI-optimized business solutions for the modern web.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              AI Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ai-endpoint"
                  className="text-sm text-gray-600 transition-colors hover:text-secondary-600"
                >
                  AI Endpoint
                </Link>
              </li>
              <li>
                <Link
                  href="/.well-known/ai.json"
                  className="text-sm text-gray-600 transition-colors hover:text-secondary-600"
                >
                  AI Discovery
                </Link>
              </li>
              <li>
                <Link
                  href="/api/ai/data"
                  className="text-sm text-gray-600 transition-colors hover:text-secondary-600"
                >
                  AI Data API
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap.json"
                  className="text-sm text-gray-600 transition-colors hover:text-secondary-600"
                >
                  JSON Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 transition-colors hover:text-primary-600"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} Your Company Name. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Built with Next.js • Optimized for AI Search Engines
          </p>
        </div>
      </div>
    </footer>
  )
}
