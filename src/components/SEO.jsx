import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url = '', isArticle = false }) => {
  const siteName = 'Runtime Studio';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const defaultDesc = 'High-performance software infrastructure, extensions, and automated digital tools built for developer workloads.';
  const metaDesc = description || defaultDesc;
  const canonicalUrl = `https://runtimestudio.dev${url}`;
  const type = isArticle ? 'article' : 'website';

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={metaDesc} />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
