// Main Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ashbit Soft",
  "url": "https://ashbit.in",
  "logo": "https://ashbit.in/logo.png",
  "description": "Custom software development and IT solutions for startups, SMEs, and enterprises across Anuppur, Shahdol, and Madhya Pradesh",
  "sameAs": [
    "https://www.facebook.com/ashbitsoft",
    "https://www.linkedin.com/company/ashbit-soft",
    "https://twitter.com/ashbitsoft"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+91-9691207533",
    "email": "info@ashbit.in"
  },
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Anuppur",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "484223",
      "addressCountry": "India",
      "streetAddress": "Anuppur, Madhya Pradesh, 484223"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Shahdol",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "484001",
      "addressCountry": "India",
      "streetAddress": "Shahdol, Madhya Pradesh, 484001"
    }
  ]
};

// Local Business Schema - Anuppur
export const localBusinessAnuppur = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ashbit.in#anuppur",
  "name": "Ashbit Soft - Anuppur",
  "description": "Custom software development, web applications, and IT solutions in Anuppur, Madhya Pradesh",
  "url": "https://ashbit.in",
  "image": "https://ashbit.in/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Anuppur",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "484223",
    "addressCountry": "India"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Anuppur"
    },
    {
      "@type": "City",
      "name": "Shahdol"
    },
    {
      "@type": "State",
      "name": "Madhya Pradesh"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "serviceType": [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Automation & Scripting",
    "Cloud Solutions",
    "ERP Solutions",
    "Custom Software"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+91-9691207533",
    "email": "info@ashbit.in"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "8",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Local Business Schema - Shahdol
export const localBusinessShahdol = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ashbit.in#shahdol",
  "name": "Ashbit Soft - Shahdol",
  "description": "Software development and IT solutions serving Shahdol and surrounding areas in Madhya Pradesh",
  "url": "https://ashbit.in",
  "image": "https://ashbit.in/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Shahdol",
    "addressRegion": "Madhya Pradesh",
    "postalCode": "484001",
    "addressCountry": "India"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Shahdol"
    },
    {
      "@type": "City",
      "name": "Anuppur"
    },
    {
      "@type": "State",
      "name": "Madhya Pradesh"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "serviceType": [
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Automation & Scripting",
    "Cloud Solutions",
    "ERP Solutions",
    "Custom Software"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+91-9691207533",
    "email": "info@ashbit.in"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "8",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// Service Schema (for services offered)
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development",
  "description": "Bespoke software solutions for your business needs",
  "serviceType": "Software Development",
  "areaServed": [
    {
      "@type": "City",
      "name": "Anuppur"
    },
    {
      "@type": "City",
      "name": "Shahdol"
    },
    {
      "@type": "State",
      "name": "Madhya Pradesh"
    }
  ],
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://ashbit.in",
    "servicePhone": "+91-9691207533"
  },
  "provider": {
    "@type": "Organization",
    "name": "Ashbit Soft"
  }
};

// Website Schema with search action
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ashbit Soft",
  "url": "https://ashbit.in",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://ashbit.in/blog?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};