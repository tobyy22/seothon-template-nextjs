# 🤖 AI Integration Guide

Kompletní průvodce AI integrací v Next.js template.

## 📋 Přehled

Tento template implementuje standardní AI discovery schéma s těmito endpointy:

1. **`/.well-known/ai.json`** - Discovery endpoint (hlavní vstupní bod)
2. **`/api/ai/data`** - Business data API
3. **`/api/ai/manifest`** - Actions manifest (web-intent)
4. **`/ai-endpoint`** - Human-readable dokumentace

## 🎯 Discovery Flow

```
AI Assistant
    ↓
1. Načte /.well-known/ai.json (discovery)
    ↓
2. Zjistí capabilities.actions_manifest
    ↓
3. Načte /api/ai/manifest
    ↓
4. Vidí akci: prefill_contact_form
    ↓
5. Sbírá data od uživatele konverzací
    ↓
6. Generuje URL: /contact?name=...&email=...
    ↓
7. Vrátí uživateli předvyplněný formulář ✅
```

## 📁 Struktura Endpoints

### 1. Discovery Endpoint

**Soubor:** `public/.well-known/ai.json`  
**URL:** `https://your-domain.com/.well-known/ai.json`  
**Typ:** Statický JSON soubor

**Účel:** Hlavní vstupní bod pro AI asistenty

**Obsahuje:**
```json
{
  "version": "1.0",
  "brand": { ... },
  "capabilities": {
    "actions_manifest": "/api/ai/manifest",
    "data_endpoint": "/api/ai/data"
  }
}
```

**Jak aktualizovat:**
1. Otevři `public/.well-known/ai.json`
2. Uprav brand informace
3. URLs v capabilities jsou automaticky dostupné

---

### 2. Business Data API

**Soubor:** `src/app/api/ai/data/route.ts`  
**URL:** `https://your-domain.com/api/ai/data`  
**Typ:** Next.js API Route (dynamický)

**Účel:** Poskytuje kompletní business data v JSON formátu

**Obsahuje:**
- Organization info
- Services catalog
- Pages inventory
- FAQs
- Capabilities
- Metadata

**Jak aktualizovat:**
1. Otevři `src/app/api/ai/data/route.ts`
2. Uprav `aiData` objekt v `GET()` funkci
3. Změny jsou okamžitě dostupné po redeployu

**Příklad updatu:**
```typescript
// src/app/api/ai/data/route.ts
export async function GET() {
  const aiData = {
    organization: {
      name: 'NOVÝ NÁZEV FIRMY',  // ← Změň zde
      email: 'novy@email.cz',     // ← Změň zde
      // ...
    },
    services: [
      {
        id: 'nova-sluzba',
        name: 'Nová Služba',
        // ...
      }
    ]
  }
  return NextResponse.json(aiData)
}
```

---

### 3. Actions Manifest

**Soubor:** `src/app/api/ai/manifest/route.ts`  
**URL:** `https://your-domain.com/api/ai/manifest`  
**Typ:** Next.js API Route (dynamický)

**Účel:** Definuje interaktivní akce pro AI

**Typ akce:** `web-intent` (bez backendu!)

**Jak funguje:**
1. AI sbírá data od uživatele
2. Vytvoří URL podle `prefill.mapping`
3. Vrátí uživateli předvyplněný formulář

**Příklad akce:**
```json
{
  "id": "prefill_contact_form",
  "kind": "web-intent",
  "method": "GET",
  "endpoint": "https://your-domain.com/contact",
  "prefill": {
    "via": "query",
    "mapping": {
      "name": "name",
      "email": "email",
      "message": "message"
    }
  }
}
```

**Přidání nové akce:**
```typescript
// src/app/api/ai/manifest/route.ts
const manifest = {
  actions: [
    // Existující akce...
    {
      id: 'nova_akce',
      name: 'Nová Akce',
      kind: 'web-intent',
      method: 'GET',
      endpoint: 'https://your-domain.com/nova-stranka',
      prefill: {
        via: 'query',
        mapping: {
          param1: 'param1',
          param2: 'param2'
        }
      },
      params: [
        {
          name: 'param1',
          type: 'string',
          required: true
        }
      ]
    }
  ]
}
```

---

### 4. AI Endpoint Page

**Soubor:** `src/app/ai-endpoint/page.tsx`  
**URL:** `https://your-domain.com/ai-endpoint`  
**Typ:** Next.js SSR Page

**Účel:** Human-readable dokumentace AI endpointů

**Features:**
- Zobrazení JSON dat
- Download JSON souboru
- Copy to clipboard
- Odkazy na API endpointy

## 🔧 Implementace v Kontaktním Formuláři

### Client Component s URL Prefilling

**Soubor:** `src/components/ContactForm.tsx`

```tsx
'use client'

export default function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  // Automatické předvyplnění z URL
  useEffect(() => {
    setFormData({
      name: searchParams.get('name') || '',
      email: searchParams.get('email') || '',
      service: searchParams.get('service') || '',
      message: searchParams.get('message') || '',
    })
  }, [searchParams])

  // ...rest of component
}
```

### Testování Web-Intent

**Manuální test:**
```
https://your-domain.com/contact?name=Jan%20Novák&email=jan@example.cz&service=ai-seo&message=Zájem%20o%20služby
```

**AI assistant flow:**
```
User: "Chci kontaktovat firmu"
AI: "Jak se jmenujete?"
User: "Jan Novák"
AI: "Jaký je váš email?"
User: "jan@example.cz"
AI: "O jakou službu máte zájem?"
User: "AI SEO"

→ AI vytvoří URL s prefill parametry
→ Vrátí uživateli: https://your-domain.com/contact?...
```

## 📊 Metadata a SEO

### Next.js Metadata API

Každá stránka má server-side metadata:

```tsx
// src/app/page.tsx
export const metadata: Metadata = {
  title: 'Titulek Stránky',
  description: 'Popis pro SEO',
  other: {
    'ai-accessible': 'true',
    'ai-content-type': 'business-website',
  },
}
```

### JSON-LD Structured Data

Každá stránka obsahuje Schema.org markup:

```tsx
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Page Title',
  description: 'Page description',
}

return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    {/* Page content */}
  </>
)
```

## 🧪 Testování

### 1. Test Discovery Endpoint
```bash
curl https://your-domain.com/.well-known/ai.json | jq
```

### 2. Test Data API
```bash
curl https://your-domain.com/api/ai/data | jq
```

### 3. Test Manifest
```bash
curl https://your-domain.com/api/ai/manifest | jq
```

### 4. Test Prefilled Form
```
https://your-domain.com/contact?name=Test&email=test@test.cz
```

### 5. Validate Structured Data
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)

## 🚀 Deployment Checklist

- [ ] Aktualizuj URLs ve všech souborech na production URL
- [ ] Nastav správnou domain v `next.config.js`
- [ ] Updatuj `public/.well-known/ai.json` s production URLs
- [ ] Updatuj `src/app/api/ai/data/route.ts` URLs
- [ ] Updatuj `src/app/api/ai/manifest/route.ts` endpoints
- [ ] Updatuj `public/sitemap.json` URLs
- [ ] Otestuj všechny AI endpointy
- [ ] Zkontroluj robots.txt
- [ ] Validuj structured data

## 📝 Maintenance

### Pravidelné aktualizace:

**Měsíčně:**
- Aktualizuj `lastUpdated` v AI data
- Zkontroluj funkčnost všech endpointů
- Validuj structured data

**Při změnách:**
- Nová služba → updatuj `/api/ai/data`
- Nová stránka → updatuj sitemap.json
- Nové kontaktní info → updatuj všechny endpointy

## 🔍 AI Bot Detection

Template podporuje tyto AI crawlery v `robots.txt`:

- GPTBot (OpenAI)
- ClaudeBot (Anthropic)
- PerplexityBot
- Google-Extended
- Všechny standardní search engines

## ✅ Best Practices

1. **Keep URLs consistent** - Používej stejné URLs všude
2. **Update timestamps** - Aktualizuj `lastUpdated` při změnách
3. **Validate JSON** - Zkontroluj syntax před deployem
4. **Test endpoints** - Otestuj po každé změně
5. **Monitor logs** - Sleduj AI bot traffic
6. **Cache properly** - Nastav správné cache headers

## 🆘 Common Issues

### Issue: 404 na /.well-known/ai.json
**Solution:** Next.js automaticky servíruje soubory z `public/` folder

### Issue: CORS errors na API routes
**Solution:** Zkontroluj headers v `next.config.js`

### Issue: Structured data not validated
**Solution:** Použij validator a oprav syntax errors

### Issue: Form prefill nefunguje
**Solution:** Zkontroluj `useSearchParams()` implementaci v Client Component

---

**Verze:** 1.0  
**Datum:** 2025-09-30  
**Framework:** Next.js 14 + React 18 + TypeScript
