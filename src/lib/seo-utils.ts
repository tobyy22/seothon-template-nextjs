/**
 * SEO and Structured Data Utilities
 * Helper functions for managing SEO metadata and structured data
 */

/**
 * Generate Organization structured data
 */
export const generateOrganizationSchema = (data: {
  name: string
  url: string
  logo?: string
  description?: string
  address?: {
    street: string
    city: string
    postalCode: string
    country: string
  }
  contact?: {
    email: string
    phone: string
  }
  socialMedia?: {
    linkedin?: string
    twitter?: string
    facebook?: string
  }
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${data.url}/#organization`,
    name: data.name,
    url: data.url,
    ...(data.logo && {
      logo: {
        "@type": "ImageObject",
        url: data.logo,
      },
    }),
    ...(data.description && { description: data.description }),
    ...(data.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: data.address.street,
        addressLocality: data.address.city,
        postalCode: data.address.postalCode,
        addressCountry: data.address.country,
      },
    }),
    ...(data.contact && {
      contactPoint: {
        "@type": "ContactPoint",
        email: data.contact.email,
        telephone: data.contact.phone,
        contactType: "customer service",
      },
    }),
    ...(data.socialMedia && {
      sameAs: Object.values(data.socialMedia).filter(Boolean),
    }),
  }
}

/**
 * Generate WebPage structured data
 */
export const generateWebPageSchema = (data: {
  url: string
  name: string
  description: string
  datePublished?: string
  dateModified?: string
  organizationUrl: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${data.url}/#webpage`,
    url: data.url,
    name: data.name,
    description: data.description,
    isPartOf: {
      "@id": `${data.organizationUrl}/#website`,
    },
    about: {
      "@id": `${data.organizationUrl}/#organization`,
    },
    ...(data.datePublished && { datePublished: data.datePublished }),
    ...(data.dateModified && { dateModified: data.dateModified }),
  }
}

/**
 * Generate Article structured data
 */
export const generateArticleSchema = (data: {
  headline: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  authorName: string
  authorUrl?: string
  image?: string
  organizationUrl: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    url: data.url,
    datePublished: data.datePublished,
    dateModified: data.dateModified,
    author: {
      "@type": "Person",
      name: data.authorName,
      ...(data.authorUrl && { url: data.authorUrl }),
    },
    publisher: {
      "@id": `${data.organizationUrl}/#organization`,
    },
    ...(data.image && {
      image: {
        "@type": "ImageObject",
        url: data.image,
      },
    }),
  }
}

/**
 * Generate BreadcrumbList structured data
 */
export const generateBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

/**
 * Generate FAQ structured data
 */
export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Service structured data
 */
export const generateServiceSchema = (data: {
  name: string
  description: string
  provider: string
  providerUrl: string
  areaServed?: string
  serviceType?: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    serviceType: data.serviceType || "Professional Service",
    provider: {
      "@type": "Organization",
      name: data.provider,
      url: data.providerUrl,
    },
    ...(data.areaServed && {
      areaServed: {
        "@type": "Country",
        name: data.areaServed,
      },
    }),
  }
}

/**
 * Generate meta tags for a page
 */
export const generateMetaTags = (data: {
  title: string
  description: string
  url: string
  image?: string
  type?: string
}) => {
  return {
    title: data.title,
    description: data.description,
    canonical: data.url,
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.url,
      type: data.type || "website",
      ...(data.image && { image: data.image }),
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      ...(data.image && { image: data.image }),
    },
  }
}

/**
 * Validate structured data (basic validation)
 */
export const validateStructuredData = (data: any): boolean => {
  try {
    // Check if it's valid JSON
    if (typeof data !== "object") return false

    // Check for required @context and @type
    if (!data["@context"] || !data["@type"]) return false

    return true
  } catch {
    return false
  }
}

/**
 * Generate JSON-LD script tag content
 */
export const generateJSONLD = (data: any): string => {
  return JSON.stringify(data, null, 2)
}

/**
 * Create AI-readable content markers
 */
export const createAIContentMarker = (
  type: "section" | "content",
  identifier: string
) => {
  return {
    [`data-ai-${type}`]: identifier,
  }
}

/**
 * Generate sitemap entry
 */
export const generateSitemapEntry = (data: {
  url: string
  lastModified?: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  priority?: number
}) => {
  return {
    url: data.url,
    lastModified: data.lastModified || new Date().toISOString().split("T")[0],
    changeFrequency: data.changeFrequency || "weekly",
    priority: data.priority || 0.5,
  }
}

/**
 * Extract keywords from text (simple implementation)
 */
export const extractKeywords = (text: string, limit: number = 10): string[] => {
  // Remove common words and punctuation
  const commonWords = new Set([
    "the",
    "a",
    "an",
    "and",
    "or",
    "but",
    "in",
    "on",
    "at",
    "to",
    "for",
    "of",
    "with",
    "by",
    "from",
    "is",
    "are",
    "was",
    "were",
    "be",
    "been",
    "being",
  ])

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !commonWords.has(word))

  // Count frequency
  const frequency: Record<string, number> = {}
  words.forEach((word) => {
    frequency[word] = (frequency[word] || 0) + 1
  })

  // Sort by frequency and return top N
  return Object.entries(frequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map((entry) => entry[0])
}

/**
 * Generate meta description from content
 */
export const generateMetaDescription = (
  content: string,
  maxLength: number = 160
): string => {
  // Remove HTML tags if present
  const cleanContent = content.replace(/<[^>]*>/g, "")

  // Trim to max length at word boundary
  if (cleanContent.length <= maxLength) {
    return cleanContent
  }

  const trimmed = cleanContent.substring(0, maxLength)
  const lastSpace = trimmed.lastIndexOf(" ")

  return trimmed.substring(0, lastSpace) + "..."
}

/**
 * Check if URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}
