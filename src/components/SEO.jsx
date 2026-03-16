import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogImage, ogUrl, canonical }) => {
  const siteTitle = 'AshbitSoft - IT Solutions & Custom Software Development';
  const defaultDesc = 'We design bespoke software ecosystems for startups, SMEs, and enterprises. Custom web applications, automation, and digital transformation solutions.';
  const defaultKeywords = 'software development, IT solutions, custom software, web development, automation, AshbitSoft, Anuppur, Madhya Pradesh, India, remote work';
  const defaultOgImage = 'https://ashbit.in/logo.png';
  const siteUrl = 'https://ashbit.in';

  const seoTitle = title ? `${title} | AshbitSoft` : siteTitle;
  const seoDesc = description || defaultDesc;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = ogImage || defaultOgImage;
  const seoUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl;
  const seoCanonical = canonical ? `${siteUrl}${canonical}` : seoUrl;

  return (
    <Helmet>
      {/* Search Engine Optimization */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDesc} />
      <meta name="keywords" content={seoKeywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={seoCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDesc} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={seoUrl} />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDesc} />
      <meta property="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
