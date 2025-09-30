import Link from 'next/link'

export default function Header() {
  return (
    <header
      role="banner"
      itemScope
      itemType="https://schema.org/WPHeader"
      className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="container mx-auto flex h-16 items-center justify-between px-4"
      >
        <Link
          href="/"
          className="flex items-center space-x-2"
          itemProp="url"
        >
          <span
            className="text-2xl font-bold text-primary-600"
            itemProp="name"
          >
            Seothon
          </span>
        </Link>

        <ul className="flex items-center space-x-6">
          <li>
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-primary-600"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary-600"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/ai-endpoint"
              className="text-sm font-medium text-secondary-600 transition-colors hover:text-secondary-700"
              aria-label="AI Data Endpoint"
            >
              AI Data
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
