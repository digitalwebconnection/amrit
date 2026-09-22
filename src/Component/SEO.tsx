import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Amrit Electricals | Tier-1 Solar EPC & Heavy Electrical Solutions',
  description = 'Authorized Channel Partner for Adani Solar, Polycab & Secure Meters. Turnkey commercial solar EPC, wholesale BOS supply, and HT/LT substations with 25-year performance warranty.',
  keywords = 'solar epc, adani solar distributor, polycab solar cables, dlms net meter, commercial rooftop solar, industrial solar plant, ht lt substation, solar installer pune maharashtra, 1-box solar kit',
  canonical,
  ogImage = 'https://www.amritelectricals.com/images/commercial_solar_rooftop.webp',
  ogType = 'website',
  schema
}) => {
  const location = useLocation();
  const currentUrl = canonical || `https://www.amritelectricals.com${location.pathname}`;

  // Default Primary Schema (LocalBusiness & Organization)
  const defaultSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.amritelectricals.com/#organization",
        "name": "Amrit Electricals",
        "url": "https://www.amritelectricals.com/",
        "logo": "https://www.amritelectricals.com/logo.webp",
        "description": "Authorized Channel Partner for Adani Solar, Polycab, and Secure Meters.",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-97007-05020",
            "contactType": "sales",
            "areaServed": "IN",
            "availableLanguage": ["English", "Hindi", "Marathi"]
          }
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.amritelectricals.com/#localbusiness",
        "name": "Amrit Electricals & Solar Solutions",
        "url": "https://www.amritelectricals.com/",
        "image": "https://www.amritelectricals.com/images/commercial_solar_rooftop.webp",
        "telephone": "+91-97007-05020",
        "email": "info@amritelectricals.com",
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Solar EPC & Electrical BOS Supply",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial & Industrial Rooftop Solar EPC"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tier-1 BOS Wholesale Distribution"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "11kV/33kV Substation & Transformer Works"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.amritelectricals.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What products and brands does Amrit Electricals supply?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are an authorised channel partner supplying Adani Solar PV Panels (Mono PERC & TOPCon), Polycab Inverters (On-Grid & Hybrid), ACDB & DCDB Distribution Panels, DLMS Class 0.5S Energy Meters (Secure & L&T), Ashmor CTs, Polycab DC Cables, CITEL SPDs, and maintenance-free Chemical Earthing."
            }
          },
          {
            "@type": "Question",
            "name": "What is the 1-Box Solar KIT and who is it for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our pre-packaged Solar KITs (available from 1 kW to 25 kW) are designed for solar installers and system integrators. You get all required components—panels, inverter, ACDB/DCDB, DC cables, and protection devices—in one single delivery ready for instant installation."
            }
          },
          {
            "@type": "Question",
            "name": "How much can I cut my electricity bills with rooftop solar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With a high-efficiency Adani Solar rooftop system and Polycab on-grid inverter, residential and commercial clients typically cut their electricity bills by up to 80% with quick 3 to 4-year capital payback."
            }
          },
          {
            "@type": "Question",
            "name": "What performance warranties are provided?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All Adani Solar PV modules carry a 25-Year Linear Performance Warranty. Polycab inverters include comprehensive 5 to 10-year OEM warranties, supported by our in-house team of trained solar engineers."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply DISCOM-approved net-metering equipment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we supply DISCOM-compliant 3-Phase HT TOD Class 0.5S DLMS Net-Meters (Secure & L&T) along with Ashmor CTs, ensuring smooth statutory testing and bidirectional grid export clearance."
            }
          }
        ]
      }
    ]
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph Tags for WhatsApp, LinkedIn, Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Amrit Electricals" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
