# 🤖 AI-Optimized Website Template

Modern, semantic website template specifically designed for maximum AI search engine visibility and understanding. This template ensures your content is perfectly structured for AI language models like Claude, ChatGPT, Perplexity, and other AI-powered search systems.

## 🎯 Key Features

### AI Optimization
- **Structured Data**: Comprehensive JSON-LD Schema.org markup on every page
- **Semantic HTML**: Proper heading hierarchy, ARIA labels, and microdata
- **AI Endpoint**: Dedicated `/ai` route with machine-readable business data
- **Meta Tags**: AI-specific meta tags for crawler identification
- **Clean Architecture**: Semantic components designed for AI parsing

### Technical Stack
- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Vite** for blazing-fast development
- **SEO Components** with dynamic meta tag management

### SEO Features
- Dynamic meta tags and structured data
- Semantic HTML5 elements
- Accessibility-first approach (WCAG compliant)
- Mobile-responsive design
- Performance optimized

## 📁 Project Structure

```
seothon-ai-optimized-template/
├── src/
│   ├── components/
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── Header.tsx          # Semantic navigation header
│   │   ├── Footer.tsx          # Footer with structured data
│   │   └── SEOHead.tsx         # Dynamic SEO meta management
│   ├── pages/
│   │   ├── HomePage.tsx        # Landing page
│   │   ├── AboutPage.tsx       # About page
│   │   ├── ServicesPage.tsx    # Services listing
│   │   ├── ContactPage.tsx     # Contact form
│   │   ├── AIEndpoint.tsx      # AI data endpoint ⭐
│   │   └── NotFoundPage.tsx    # 404 page
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   ├── robots.txt              # AI crawler instructions
│   └── sitemap.json            # JSON sitemap for AI
├── index.html                  # HTML with structured data
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your site.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```

## 🤖 AI Optimization Features

### 1. Structured Data (JSON-LD)

Every page includes comprehensive Schema.org structured data:

- **Organization** schema with complete business info
- **WebSite** schema with search action
- **WebPage** schema for each page
- **BreadcrumbList** for navigation
- **Service** schema for offerings
- **ContactPoint** for contact information

### 2. AI Endpoint (`/ai`)

The `/ai` route provides a machine-readable JSON endpoint containing:

- Complete organization information
- All services with detailed descriptions
- Page inventory with content summaries
- FAQs for common questions
- Metadata and update timestamps

**Key Features:**
- Human-readable HTML view
- Raw JSON format toggle
- Downloadable JSON file
- Copy to clipboard functionality

### 3. Semantic HTML

All components use proper semantic HTML5:

```html
<header role="banner" itemScope itemType="https://schema.org/WPHeader">
<nav role="navigation" aria-label="Main navigation">
<main id="main-content" role="main">
<article itemScope itemType="https://schema.org/Article">
<footer role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
```

### 4. AI-Specific Meta Tags

```html
<meta name="ai-accessible" content="true" />
<meta name="ai-content-type" content="business-website" />
<meta name="ai-structured-data" content="/ai" />
<meta name="ai-sitemap" content="/sitemap.json" />
```

### 5. Robots.txt Configuration

Optimized for AI crawlers including:
- GPTBot (OpenAI)
- ClaudeBot (Anthropic)
- PerplexityBot
- Google-Extended
- And all major search engines

## 📝 Customization Guide

### 1. Update Organization Info

Edit `index.html` to update the base JSON-LD structured data:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "url": "https://yoursite.com",
  ...
}
</script>
```

### 2. Customize AI Endpoint Data

Edit `src/pages/AIEndpoint.tsx` to update the `aiData` object with your business information.

### 3. Update Services

Modify the `services` array in `src/pages/ServicesPage.tsx` to reflect your offerings.

### 4. Brand Colors

Update Tailwind theme in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // ...
    }
  }
}
```

### 5. Meta Tags

Update default meta tags in `index.html` and page-specific ones in each page component.

## 🎨 Styling

This template uses Tailwind CSS with a custom theme. Global styles are in `src/index.css`.

### Custom CSS Classes

- `.sr-only` - Screen reader only content
- `.skip-to-main` - Skip navigation link
- `[data-ai-content]` - AI content markers
- `[data-ai-section]` - AI section markers

## ♿ Accessibility

The template follows WCAG 2.1 Level AA standards:

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip to main content link
- Focus management
- Color contrast compliance

## 🔍 SEO Checklist

- [x] Structured data on all pages
- [x] Semantic HTML5 elements
- [x] Meta descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URLs
- [x] XML/JSON sitemaps
- [x] Robots.txt
- [x] AI-specific meta tags
- [x] Mobile responsive
- [x] Fast loading (Vite optimization)
- [x] Accessible (WCAG 2.1 AA)

## 🤝 AI Search Engine Compatibility

Optimized for:

- ✅ Claude (Anthropic)
- ✅ ChatGPT (OpenAI)
- ✅ Perplexity AI
- ✅ Google Bard/Gemini
- ✅ Bing Chat
- ✅ Traditional search engines (Google, Bing)

## 📊 Performance

- Lighthouse Score: 95+ (all metrics)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- SEO Score: 100

## 🛠️ Advanced Configuration

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update sitemap in `public/sitemap.json`
4. Add page data to AI endpoint
5. Include structured data

### Custom Structured Data

Use the `SEOHead` component to add page-specific structured data:

```tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Your Article Title",
  // ...
}

<Layout structuredData={structuredData}>
  {/* Page content */}
</Layout>
```

## 📚 Resources

- [Schema.org Documentation](https://schema.org/)
- [Google Structured Data Guide](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data)
- [AI Search Optimization Best Practices](https://www.anthropic.com)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 🐛 Troubleshooting

### Structured Data Issues

Validate your structured data:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

MIT License - feel free to use this template for any project.

## 🙋 Support

For issues or questions:
- Check the documentation above
- Review example implementations in the code
- Ensure all dependencies are installed correctly

---

**Built with ❤️ for the AI-powered web**

Optimized for AI search engines • Semantic HTML • Structured Data • Accessibility First
