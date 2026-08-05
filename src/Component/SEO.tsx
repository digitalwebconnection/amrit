import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = 'Amrit Electricals', 
  description = 'Leading provider of solar and electrical solutions. Experience quality and dedicated support.',
  keywords = 'solar, electrical, amrit electricals, solutions, installations'
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default SEO;
