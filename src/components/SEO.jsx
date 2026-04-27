import React from 'react';
import { Helmet } from 'react-helmet-async';
import { organizationSchema, localBusinessAnuppur, localBusinessShahdol, serviceSchema, websiteSchema } from '../schema';

const SEO = ({ title, description, keywords, ogImage, ogUrl, canonical, location = 'both' }) => {
  const siteTitle = 'AshbitSoft - IT Solutions & Custom Software Development';
  const defaultDesc = 'We design bespoke software ecosystems for startups, SMEs, and enterprises. Custom web applications, automation, and digital transformation solutions. Serving Anuppur, Shahdol, Madhya Pradesh.';
  const defaultKeywords = 'software development, IT solutions, custom software, web development, automation, AshbitSoft, Anuppur, Shahdol, Madhya Pradesh, India, software company, web applications, development services, remote work';
  const defaultOgImage = 'https://ashbit.in/logo.png';
  const siteUrl = 'https://ashbit.in';

  const seoTitle = title ? `${title} | AshbitSoft` : siteTitle;
  const seoDesc = description || defaultDesc;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = ogImage || defaultOgImage;
  const seoUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  const seoCanonical = canonical ? `${siteUrl}${canonical}` : seoUrl;

  // Build schema array based on page location
  const schemas = [
    organizationSchema,
    websiteSchema,
    location === 'anuppur' ? localBusinessAnuppur : location === 'shahdol' ? localBusinessShahdol : organizationSchema,
    serviceSchema
  ];

  // For homepage, include both location schemas
  if (location === 'both' || !location) {
    schemas.push(localBusinessAnuppur);
    schemas.push(localBusinessShahdol);
  }

  return (
    <Helmet>
      {/* Search Engine Optimization */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="en-US" />
      <meta name="revisit-after" content="7 days" />
      <meta property="og:locale" content="en_US" />

      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="AshbitSoft" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDesc} />
      <meta property="twitter:image" content={seoImage} />

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
