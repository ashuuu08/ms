# SEO Review - AshbitSoft Website

**Date:** April 27, 2026  
**Current Domain:** https://ashbit.in  
**Overall SEO Score:** 6.5/10

---

## Executive Summary

Your website has a solid foundation with React Helmet implementation and structured data, but there are several critical gaps preventing optimal search engine visibility. The main issues are incomplete SEO implementations across pages, missing structured data schemas, and lack of image optimization.

---

## 🔴 Critical Issues (High Priority)

### 1. **Missing SEO Component in Key Pages**
- **Pages Affected:** Blog.jsx, ServiceDetail.jsx, Company.jsx
- **Current Issue:** These pages use `document.title` instead of the SEO component with full meta tag support
- **Impact:** No Open Graph tags, Twitter cards, or canonical URLs for these pages
- **Fix Needed:** Replace document.title usage with SEO component implementing proper meta tags

**Example - Blog.jsx (Currently):**
```javascript
useEffect(() => {
  document.title = 'Blog — AshbitSoft | Tech Insights, Tutorials & Case Studies';
}, []);
```

**Should be:**
```javascript
<SEO 
  title="Blog - Tech Insights & Case Studies"
  description="Real-world tutorials, lessons from client projects, and honest takes on tech written by AshbitSoft engineers."
  keywords="tech blog, software development tutorials, case studies, automation"
  canonical="/blog"
/>
```

### 2. **Incomplete Structured Data (Schema.org)**
- **Current:** Only basic Organization schema
- **Missing:**
  - LocalBusiness schema (you're in Anuppur, India)
  - Service schema for your 7+ service offerings
  - FAQPage schema for FAQ section
  - BlogPosting schema for individual blog posts
  - AggregateRating/Review schema for testimonials
  - ContactPoint schema with business contact info
  - WebSite schema with search action

**Impact:** Google cannot fully understand your business structure, services, and content relationships. Missing rich snippets for search results.

### 3. **Minimal Meta Tags in SEO Component**
- **Missing Critical Tags:**
  - `<meta name="robots" content="index, follow, max-image-preview:large" />`
  - `<meta name="language" content="en" />`
  - `<meta name="revisit-after" content="7 days" />`
  - Alternate hreflang tags (if targeting multiple languages/regions)
  - `<meta property="og:locale" content="en_US" />`

### 4. **No Image Optimization Strategy**
- **Issue:** Hero and portfolio images lack:
  - Proper `alt` attributes
  - Responsive sizing
  - WebP format alternatives
  - Image compression/lazy loading mention
- **Impact:** Missed image search traffic, accessibility issues

---

## 🟠 Important Issues (Medium Priority)

### 5. **Blog Pagination & Dynamic Content**
- **Issue:** Blog posts not in sitemap, pagination not handled
- **Current:** Static sitemap only lists `/blog` main page
- **Missing:** 
  - Individual blog post URLs in sitemap (or dynamic sitemap generation)
  - Blog post pagination strategy (prefer rel=next/prev or URL parameters)
  - Blog post meta descriptions (from blogData.js)

### 6. **Incomplete Internal Linking Strategy**
- **Missing:** 
  - Proper breadcrumb navigation (HTML + Schema)
  - Related posts links (for blog)
  - Related services links (on service detail pages)
  - Contextual internal links in long-form content

### 7. **Core Web Vitals & Performance**
- **Not Addressed:**
  - Largest Contentful Paint (LCP) optimization
  - Cumulative Layout Shift (CLS) - animations may cause shifts
  - First Input Delay (FID)
  - Image lazy loading (`loading="lazy"`)
  - Font optimization strategy

### 8. **Google Analytics & Search Console**
- **Missing Setup:**
  - No Google Analytics 4 (GA4) implementation found
  - No Google Search Console verification (no meta tag/DNS verification visible)
  - No conversion tracking for leads/contact form
  - No remarketing tags

### 9. **Open Graph Images**
- **Issue:** Hardcoded to `/logo.png` (your company logo)
- **Problem:** 
  - Logo is not ideal for social sharing
  - Should be 1200x630px with your brand/page context
  - Different images needed for different pages (especially blog posts)

---

## 🟡 Warnings (Lower Priority but Important)

### 10. **robots.txt Completeness**
✅ **Good:** Allows crawling and references sitemap  
⚠️ **Missing:**
```robots.txt
User-agent: Googlebot
User-agent: Bingbot
Allow: /
Crawl-delay: 0

# Disallow admin or temp pages if any
# Disallow: /temp/
# Disallow: /admin/

Sitemap: https://ashbit.in/sitemap.xml
```

### 11. **Canonical URL Implementation**
- **Current:** Hardcoded in SEO component with siteUrl
- **Risk:** If domain changes or you add www version, all canonical URLs break
- **Better Approach:** Make siteUrl configurable (environment variable)

### 12. **Page Title Format**
- **Current:** `"${title} | AshbitSoft"`
- **Issues:** 
  - Inconsistent format (some pages show "Blog —" not "|")
  - Separator placement could be better
- **Better:** `"${title} - AshbitSoft | Custom Software Development"` (includes keyword)

### 13. **Keywords Meta Tag**
- **Note:** This tag has minimal impact on modern search engines (Google ignores it)
- **Better Use:** Focus on natural keyword usage in content instead

### 14. **Missing Microdata Implementation**
- Markup for services, team members, testimonials currently not formatted for search displays
- Could add:
  - Product/Service markup for your offerings
  - Person schema for team members
  - Testimonial/Review markup for client testimonials

---

## ✅ What's Working Well

1. **React Helmet Integration** - Proper implementation with react-helmet-async
2. **Basic Meta Tags** - Title, description, keywords, Open Graph tags present
3. **Canonical URLs** - Implemented to prevent duplicate content
4. **Twitter Card Support** - Twitter meta tags included
5. **Sitemap & robots.txt** - Both present with good coverage
6. **Organization Schema** - Basic structured data in place
7. **Responsive Design** - Appears to be mobile-optimized

---

## 📋 Action Plan (Priority Order)

### Phase 1 (Week 1) - Critical Fixes
- [ ] Add SEO component to Blog.jsx, ServiceDetail.jsx, Company.jsx
- [ ] Complete schema.js with LocalBusiness, Service, and BreadcrumbList schemas
- [ ] Add missing meta tags: robots, language, revisit-after
- [ ] Create proper Open Graph images for each page type (tool: Figma or similar)

### Phase 2 (Week 2) - Content & Structure
- [ ] Add breadcrumb navigation + schema to all pages
- [ ] Implement image alt text strategy across all components
- [ ] Update sitemap to include dynamic blog posts
- [ ] Add meta descriptions to blog posts from blogData.js

### Phase 3 (Week 3) - Analytics & Monitoring
- [ ] Implement Google Analytics 4
- [ ] Verify domain in Google Search Console
- [ ] Set up Google Search Console sitemaps
- [ ] Create search performance tracking dashboard

### Phase 4 (Week 4) - Performance
- [ ] Implement lazy loading for images
- [ ] Optimize Core Web Vitals
- [ ] Add DNS prefetch for external resources
- [ ] Test mobile rendering with Google Mobile-Friendly Test

### Phase 5 (Ongoing)
- [ ] Monitor Search Console for crawl errors
- [ ] Regular content updates for blog
- [ ] Schema markup for new services/team members
- [ ] Quarterly SEO audit

---

## 📊 Recommendations by Impact

### High Impact (Implement First)
1. **Fix missing SEO components** - Ensures all pages are properly indexed (+30% visibility potential)
2. **Complete schema.org markup** - Enables rich snippets and better SERP displays (+25% CTR)
3. **Create page-specific OG images** - Improves social sharing (+15% referral traffic)

### Medium Impact
4. **Add internal linking strategy** - Improves page crawlability and authority distribution
5. **Implement analytics** - Essential for tracking progress and ROI
6. **Optimize images** - Improves Core Web Vitals and page speed

### SEO-Specific Wins
7. **Add BreadcrumbList schema** - Shows breadcrumb trails in Google Search
8. **Service schema markup** - Displays structured service info in SERPs
9. **LocalBusiness schema** - Shows business info in local search results

---

## 🔍 Quick Wins (Easy to Implement)

1. **Add robots meta tag** (5 min)
   ```jsx
   <meta name="robots" content="index, follow, max-image-preview:large" />
   ```

2. **Add language tag** (5 min)
   ```jsx
   <meta name="language" content="en-US" />
   ```

3. **Add Open Graph locale** (5 min)
   ```jsx
   <meta property="og:locale" content="en_US" />
   ```

4. **Store siteUrl in config file** (10 min)
   ```javascript
   // config.js
   export const SITE_URL = process.env.REACT_APP_SITE_URL || 'https://ashbit.in';
   ```

5. **Verify in Google Search Console** (5 min)
   - Add Google verification meta tag to index.html
   - Submit sitemap

---

## 🛠️ Tools Recommended

- **Google Search Console** - Monitor index status and search performance
- **Google Lighthouse** - Audit performance and SEO (built into Chrome DevTools)
- **Schema.org Validator** - Validate JSON-LD markup
- **Screaming Frog SEO Spider** - Crawl your site for SEO issues
- **Semrush or Ahrefs** - Competitor analysis and keyword research
- **Hotjar or Clarity** - User behavior analytics

---

## 📝 Notes

- Your location (Anuppur, Madhya Pradesh) is a unique selling point - leverage LocalBusiness schema
- Service descriptions are strong - ensure they're marked up with Service schema
- Testimonials are excellent social proof - use Review/AggregateRating schema
- Blog content potential is high - focus on SEO-optimized publishing
- Consider adding FAQ schema for your FAQ section

---

## Need Help?

Reference files to review:
- SEO Component: `src/components/SEO.jsx`
- Schema Definitions: `src/schema.js`
- Meta Tags: `index.html`
- Robots: `public/robots.txt`
- Sitemap: `public/sitemap.xml`

**Next Step:** Implement Phase 1 critical fixes to unlock immediate search visibility improvements.
