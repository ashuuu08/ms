# Local SEO Implementation Guide - Anuppur & Shahdol

**Date Implemented:** April 27, 2026  
**Objective:** Make AshbitSoft appear in local search results for "software company in Anuppur", "software development in Shahdol", and related local searches.

---

## ✅ What's Been Implemented

### 1. **Enhanced Schema.org Markup** (src/schema.js)
- ✅ **Organization Schema** - Updated with multiple address locations (Anuppur & Shahdol)
- ✅ **LocalBusiness Schemas** - Created separate LocalBusiness schema for both:
  - Anuppur (postal code: 484223)
  - Shahdol (postal code: 484001)
- ✅ **Service Schema** - Defines services with location coverage
- ✅ **Website Schema** - Added with search action support
- ✅ **Contact Point** - Business contact information in schema

**Result:** Google & Bing can now understand you serve both locations and will show your business in local searches.

### 2. **JSON-LD Implementation** (src/components/SEO.jsx)
- ✅ **Automatic Schema Rendering** - All schemas automatically converted to JSON-LD and injected into page `<head>`
- ✅ **Location-Based Parameter** - Pages can specify `location="anuppur"` or `location="shahdol"` or `location="both"`
- ✅ **Homepage Coverage** - Both location schemas rendered on homepage automatically
- ✅ **Enhanced Meta Tags:**
  - robots meta tag (index, follow, max-image-preview)
  - language: en-US
  - revisit-after: 7 days
  - og:locale and og:site_name for social sharing

**Result:** Every page automatically includes proper structured data visible to search engines.

### 3. **Local SEO Keywords in Meta Tags** (index.html)
- ✅ **Title Tag:** "AshbitSoft - Software Development Company in Anuppur & Shahdol"
- ✅ **Meta Description:** Explicitly mentions both locations with services
- ✅ **Keywords:** Added local search keywords:
  - "software company Anuppur"
  - "software development Shahdol"
  - "software development Madhya Pradesh"
  - "custom software Anuppur"
  - "IT solutions Shahdol"
  - "web development Anuppur"
  - "software company near me"

**Result:** Better matching with local search queries and "near me" searches.

### 4. **Enhanced Sitemap** (public/sitemap.xml)
- ✅ **Priority Adjustments:** Fine-tuned priorities for better crawl allocation
- ✅ **Image Namespace:** Added for future image optimization
- ✅ **Contact Page:** Increased priority (0.95) as local calls-to-action

**Result:** Search engines crawl and index location-relevant pages more efficiently.

---

## 🎯 How This Helps Search Visibility

### Local Search Queries Now Covered:
```
❌ Before: "software company in Anuppur" - May not include AshbitSoft
✅ After: Schema shows LocalBusiness + keywords = Better ranking

❌ Before: "software development Shahdol" - Limited appearance
✅ After: Explicit Shahdol LocalBusiness schema = Higher visibility

❌ Before: "IT solutions near me" (from Anuppur/Shahdol)
✅ After: areaServed schema + local keywords = Appears in "near me" results

❌ Before: Google Maps might not show business location
✅ After: LocalBusiness schema + address = Can appear in Google Maps
```

---

## 📊 Implementation Details

### Schema Hierarchy
```
Organization (Parent - All locations)
├── LocalBusiness (Anuppur) - serviceType array
│   ├── address (Anuppur postal address)
│   ├── areaServed (Cities, States, Countries)
│   └── aggregateRating (from testimonials)
│
├── LocalBusiness (Shahdol) - serviceType array
│   ├── address (Shahdol postal address)
│   ├── areaServed (Cities, States, Countries)
│   └── aggregateRating (from testimonials)
│
├── Service Schema
│   └── areaServed (Both locations + Madhya Pradesh)
│
└── Website Schema
    └── potentialAction (Site search capability)
```

### Key Schema Elements Added:
1. **@id** - Unique identifiers: `https://ashbit.in#anuppur`, `https://ashbit.in#shahdol`
2. **areaServed** - Array of served locations (City, State, Country)
3. **serviceType** - 7 service categories (Software Development, Web Dev, Mobile, etc.)
4. **aggregateRating** - 4.9 stars from 8 testimonials (example - update with real data)
5. **priceRange** - "$$" indicates mid-range pricing

---

## 🔧 How to Use Location Parameter in Your Pages

### Default (Both Locations):
```jsx
import SEO from '../components/SEO';

<SEO 
  title="Software Development Services"
  description="Custom software development for your business"
/>
// Automatically includes both Anuppur and Shahdol schemas
```

### Anuppur Specific:
```jsx
<SEO 
  title="Software Development in Anuppur"
  description="Custom software solutions for Anuppur businesses"
  location="anuppur"
/>
```

### Shahdol Specific:
```jsx
<SEO 
  title="Software Development in Shahdol"
  description="Custom software solutions for Shahdol businesses"
  location="shahdol"
/>
```

---

## 🚀 Next Steps for Maximum Local SEO Impact

### Phase 2: Create Location Landing Pages (High Priority)
```
Create two new pages:
- /locations/anuppur (or /anuppur-software-development)
- /locations/shahdol (or /shahdol-software-development)

Each page should:
- Focus on that specific location's search keywords
- Include local testimonials/case studies
- Add local business hours schema
- Mention nearby areas served
- Include local Google Map embed
```

**Example Structure:**
```jsx
// pages/Anuppur.jsx
import SEO from '../components/SEO';

export default function Anuppur() {
  return (
    <>
      <SEO 
        title="Custom Software Development in Anuppur"
        description="We're Anuppur's leading software development company..."
        keywords="software development Anuppur, web development Anuppur, custom software, IT solutions"
        location="anuppur"
      />
      {/* Page Content */}
    </>
  );
}

// Add to App.jsx routes:
import Anuppur from './pages/Anuppur';
<Route path="/anuppur" element={<Anuppur />} />
<Route path="/shahdol" element={<Shahdol />} />
```

### Phase 3: Google My Business Setup (Critical!)
1. **Create Google My Business profiles** for:
   - Anuppur location
   - Shahdol location (if operating there)
   
2. **In each profile, add:**
   - Correct address and postal code
   - Service categories: "Software Company", "Web Development", "IT Services"
   - Service area coverage
   - Photos of office/team
   - Business hours
   - Phone number
   - Website URL (https://ashbit.in)

3. **Get customer reviews** on Google My Business - This affects local ranking significantly

**Impact:** This is worth 30-40% of local search ranking!

### Phase 4: Local Citation Building
Add your business to:
- Local business directories (JustDial, Local.com in India)
- Industry directories (LinkedIn, Crunchbase)
- Review sites (Trustpilot, G2, Glassdoor)

**Citation Format Should Match:**
- Business Name: "Ashbit Soft" or "AshbitSoft"
- Address: Exact postal code matching (484223 for Anuppur, 484001 for Shahdol)
- Phone: Consistent across all listings
- Website: https://ashbit.in

### Phase 5: Optimize Testimonial Schema (Easy Quick Win)
```javascript
// In schema.js - Update aggregateRating with real data:
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.9",  // ← Use actual average
  "reviewCount": "8",     // ← Use actual count
  "bestRating": "5",
  "worstRating": "1"
}

// Also add individual review schema:
"review": [
  {
    "@type": "Review",
    "author": {"@type": "Person", "name": "Sneha Gupta"},
    "ratingValue": "5",
    "reviewBody": "AshbitSoft automated our entire client onboarding flow..."
  },
  // ... more reviews
]
```

### Phase 6: Blog Content Optimization
Add location-specific blog posts:
- "Top 5 Software Development Companies in Anuppur" (yours at #1!)
- "How to Choose a Software Developer in Shahdol"
- "Digital Transformation in Madhya Pradesh"
- "Case Study: Building ERP for Anuppur Manufacturing Business"

Each with:
- LocalBusiness schema
- Internal links to location pages
- Location keywords naturally in content

---

## 📈 Expected Results

### Timeline:
- **Week 1:** Schema validation + Google Search Console verification
- **Week 2-3:** Local search impressions start appearing
- **Month 1:** Ranking for basic local keywords like "software company Anuppur"
- **Month 2-3:** Strong ranking for "software development Shahdol", "IT solutions Anuppur"
- **Month 3+:** Featured in local search results, Google Maps, and "near me" searches

### Metrics to Track:
```
Track in Google Search Console:
- Clicks from queries: "software company Anuppur"
- Clicks from queries: "software development Shahdol"
- Impressions from local searches
- Click-through rate improvements

New metrics to monitor:
- Google My Business views
- Direction requests
- Phone calls from local searches
- Website clicks from local pack
```

---

## 🔍 Validation & Testing

### 1. Verify JSON-LD Schema
Go to: https://validator.schema.org/
Paste your homepage source code (Ctrl+U on the page, copy from <head>)
✅ Should show no errors, green checkmarks for Organization/LocalBusiness

### 2. Test Local Search
- Search Google for: "software company in Anuppur"
- Search Google for: "software development Shahdol"
- Search Google Maps for same terms
- Check if AshbitSoft appears (may take 1-3 weeks for full indexing)

### 3. Google Search Console
1. Go to: https://search.google.com/search-console
2. Add your website (if not already)
3. Submit sitemap: https://ashbit.in/sitemap.xml
4. Check "Coverage" for indexed pages
5. Monitor "Performance" for local search queries

### 4. Mobile-Friendly Test
Visit: https://search.google.com/test/mobile-friendly
Test your homepage for mobile performance (critical for local searches)

---

## ❗ Important Notes

### Update Before Going Live:
- [ ] Replace phone number placeholder `+91-XXXXXXXXXX` with actual business phone
- [ ] Replace email `hello@ashbit.in` with actual contact email
- [ ] Update postal codes if locations change (current: Anuppur 484223, Shahdol 484001)
- [ ] Verify all addresses are accurate and complete
- [ ] Update aggregateRating with real customer review data
- [ ] Add social media URLs to schema (Facebook, LinkedIn, Twitter)

### SEO Best Practices:
1. **Consistency is Key** - Business name, address, phone must be identical across all listings
2. **Update Regularly** - Keep schema data fresh, update reviews to show active business
3. **Local Content** - Location-specific pages outrank generic pages for local searches
4. **Google My Business** - This is where most local searches lead, set up ASAP
5. **Reviews Matter** - More positive reviews = Better local ranking

---

## 📚 Files Modified

- ✅ `src/schema.js` - Enhanced with LocalBusiness and Service schemas
- ✅ `src/components/SEO.jsx` - Added JSON-LD rendering and location parameter
- ✅ `index.html` - Updated with local SEO keywords for Anuppur & Shahdol
- ✅ `public/sitemap.xml` - Enhanced with proper priorities and image namespace

---

## 🎓 Learning Resources

- [LocalBusiness Schema Docs](https://schema.org/LocalBusiness)
- [Google Local SEO Guide](https://www.google.com/business/how-get-started.html)
- [JSON-LD Best Practices](https://json-ld.org/)
- [Yoast Local SEO Guide](https://yoast.com/local-seo/)

---

## 📞 Support

If you need help with:
1. **Google My Business** - Create profiles for each location
2. **Location-specific landing pages** - They significantly boost local ranking
3. **Schema testing** - Use validator.schema.org to verify markup
4. **Google Search Console** - To monitor local search performance

---

**Result:** Your website is now optimized for local searches in both Anuppur and Shahdol. When someone in those areas searches for "software company" or "software development," AshbitSoft has a much better chance of appearing!

🚀 **Next Action:** Set up Google My Business profiles to unlock full local SEO potential.
