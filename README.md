# 🤖 Seothon Next.js Template - AI-Optimized with SSR

Modern Next.js business template specifically designed for maximum AI search engine visibility with **server-side rendering**. This ensures AI bots receive complete HTML content without JavaScript execution.

## 🎯 Key Features

### Server-Side Rendering (SSR)
- **Complete HTML on server** - AI bots see full content immediately
- **No JavaScript required** - Content is readable without client-side execution
- **Next.js 14 App Router** - Modern React Server Components
- **Optimized for AI crawlers** - Perfect for Claude, ChatGPT, Perplexity

### AI Optimization
- **Structured Data**: Comprehensive JSON-LD Schema.org markup on every page
- **Semantic HTML**: Proper heading hierarchy, ARIA labels, and microdata
- **AI Endpoints**: 
  - `/.well-known/ai.json` - Discovery endpoint
  - `/api/ai/data` - Business data JSON
  - `/api/ai/manifest` - Actions manifest
- **AI-Specific Meta Tags**: Optimized for AI crawler identification
- **Web Intent Actions**: Pre-fillable contact forms via URL parameters

### Technical Stack
- **Next.js 14** with App Router
- **React 18** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Lucide React** for icons

## 📁 Project Structure

```
seothon-template-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with global metadata
│   │   ├── page.tsx                # Home page (SSR)
│   │   ├── about/
│   │   │   └── page.tsx            # About page (SSR)
│   │   ├── services/
│   │   │   └── page.tsx            # Services page (SSR)
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page (SSR)
│   │   ├── ai-endpoint/
│   │   │   └── page.tsx            # AI data viewer (SSR)
│   │   ├── api/
│   │   │   └── ai/
│   │   │       ├── data/
│   │   │       │   └── route.ts    # Business data API
│   │   │       └── manifest/
│   │   │           └── route.ts    # Actions manifest API
│   │   └── globals.css             # Global styles
│   └── components/
│       ├── Header.tsx              # Navigation header
│       ├── Footer.tsx              # Footer with links
│       └── ContactForm.tsx         # Contact form (Client Component)
├── public/
│   ├── .well-known/
│   │   └── ai.json                 # AI discovery endpoint ⭐
│   ├── robots.txt                  # AI crawler permissions
│   └── sitemap.json                # JSON sitemap
├── next.config.js                  # Next.js configuration
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json
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

Visit `http://localhost:3000` to see your site.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## 🤖 AI Optimization Features

### 1. Server-Side Rendering

**Why it matters:** AI bots receive complete HTML immediately without JavaScript execution.

Every page is rendered on the server:
```tsx
// src/app/page.tsx
export default function HomePage() {
  return (
    <main>
      {/* Content is fully rendered on server */}
      <h1>AI can read this immediately</h1>
    </main>
  )
}
```

### 2. Structured Data (JSON-LD)

Every page includes comprehensive Schema.org structured data:

```tsx
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Your Company Name',
  // ... complete organization info
}
```

### 3. AI Discovery Endpoint

**`/.well-known/ai.json`** - Standard discovery endpoint:

```json
{
  "version": "1.0",
  "brand": {
    "name": "Your Company Name",
    "website": "https://your-site.com"
  },
  "capabilities": {
    "actions_manifest": "/api/ai/manifest",
    "data_endpoint": "/api/ai/data"
  }
}
```

### 4. AI Actions Manifest

**`/api/ai/manifest`** - Web-intent actions:

```json
{
  "actions": [
    {
      "id": "prefill_contact_form",
      "kind": "web-intent",
      "method": "GET",
      "endpoint": "/contact",
      "prefill": {
        "via": "query",
        "mapping": {
          "name": "name",
          "email": "email"
        }
      }
    }
  ]
}
```

AI assistants can generate URLs like:
```
/contact?name=John&email=john@example.com&message=Hello
```

### 5. Business Data API

**`/api/ai/data`** - Complete business information:

- Organization details
- Services catalog
- Page inventory
- FAQs
- Capabilities

## 📝 Customization Guide

### 1. Update Organization Info

Edit `src/app/layout.tsx`:

```tsx
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'YOUR COMPANY NAME',
  url: 'https://YOUR-DOMAIN.com',
  // ... update all fields
}
```

Also update:
- `public/.well-known/ai.json`
- `src/app/api/ai/data/route.ts`

### 2. Customize Services

Edit `src/app/services/page.tsx`:

```tsx
const services = [
  {
    id: 'your-service',
    name: 'Your Service Name',
    description: 'Description',
    features: [...],
    price: 'From $X,XXX',
  },
]
```

### 3. Update Contact Form

The contact form in `src/components/ContactForm.tsx` supports URL pre-filling:

```tsx
// Automatically fills from query params
/contact?name=John&email=john@example.com
```

### 4. Modify Brand Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#YOUR-COLOR',
    600: '#YOUR-COLOR',
    // ...
  },
}
```

## 🎨 Styling

Uses Tailwind CSS with custom theme. Global styles in `src/app/globals.css`.

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Skip to main content link
- WCAG 2.1 Level AA compliant

## 🔍 SEO Features

- [x] Server-side rendering
- [x] Structured data on all pages
- [x] Semantic HTML5 elements
- [x] Next.js Metadata API
- [x] Sitemap (JSON & XML)
- [x] Robots.txt
- [x] AI-specific meta tags
- [x] Mobile responsive
- [x] Performance optimized

## 🤝 AI Compatibility

Optimized for:

- ✅ Claude (Anthropic)
- ✅ ChatGPT (OpenAI)
- ✅ Perplexity AI
- ✅ Google Gemini
- ✅ Bing Chat
- ✅ Traditional search engines

## 📊 Key Endpoints

| Endpoint | Description | Type |
|----------|-------------|------|
| `/.well-known/ai.json` | AI discovery | Static JSON |
| `/api/ai/data` | Business data | API Route |
| `/api/ai/manifest` | Actions manifest | API Route |
| `/ai-endpoint` | Human-readable AI data | SSR Page |
| `/sitemap.json` | JSON sitemap | Static JSON |

## 🛠️ Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Other Platforms

The template works on any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Schema.org](https://schema.org/)
- [AI Search Optimization Guide](https://www.anthropic.com)
- [Tailwind CSS](https://tailwindcss.com)

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Structured Data Validation

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## 📄 License

MIT License - feel free to use for any project.

## 🙋 Support

For issues or questions:
- Check the documentation above
- Review example implementations
- Ensure all dependencies are installed correctly

---

**Built with ❤️ for the AI-powered web**

Next.js 14 • Server-Side Rendering • AI-Optimized • Structured Data • Semantic HTML
