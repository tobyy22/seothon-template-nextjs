import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <Layout title="404 - Page Not Found" description="The page you're looking for doesn't exist">
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
