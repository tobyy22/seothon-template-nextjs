import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import SEOHead from './SEOHead'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  structuredData?: object
}

const Layout = ({ children, title, description, structuredData }: LayoutProps) => {
  return (
    <>
      <SEOHead 
        title={title} 
        description={description} 
        structuredData={structuredData} 
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
