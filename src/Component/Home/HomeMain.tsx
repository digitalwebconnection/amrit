import React from 'react';
import SEO from '../SEO';
import Herohm from './Herohm';
import CompanyHighlights from './CompanyHighlights';
import ProductShowcase from './ProductShowcase';
import BusinessVerticals from './BusinessVerticals';
import CompanyOverview from './CompanyOverview';
import WhyChooseSection from './WhyChooseSection';
import OurProcess from './OurProcess';
import VideoSection from './VideoSection';
import ChannelPatner from './ChannelPatner';
import Certifications from './Certifications';
import Testimonials from './Testimonials';
import Leadership from './Leadership';
import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

interface HomeMainProps {
  onOpenContact: () => void;
}

export const HomeMain: React.FC<HomeMainProps> = ({ onOpenContact }) => {
  return (
    <main>
      {/* Helmet Title & Meta for Home Page */}
      <SEO
        title="Amrit Electricals | Authorized Adani Solar & Polycab Distributor | Solar EPC"
        description="Amrit Electricals - Authorized Channel Partner for Adani Solar, Polycab & Secure Meters. Turnkey commercial rooftop solar EPC, 1-Box Solar KITs, and HT/LT electrical BOS supply with 25-year warranty."
      />

      {/* 1. Hero Banner */}
      <Herohm onOpenContact={onOpenContact} />

      {/* 2. Company Highlights / Stats */}
      <CompanyHighlights />

      {/* 3. Featured Solar Equipment Showcase */}
      <ProductShowcase onOpenContact={onOpenContact} />

      {/* 4. Business Verticals / Services */}
      <BusinessVerticals onOpenContact={onOpenContact} />

      {/* 5. About Company Overview */}
      <CompanyOverview onOpenContact={onOpenContact} />

      {/* 6. Why Choose Us */}
      <WhyChooseSection onOpenContact={onOpenContact} />

      {/* 7. Working Process / 4 Stages */}
      <OurProcess onOpenContact={onOpenContact} />



      {/* 10. Authorized Channel Partners */}
      <ChannelPatner />
      
      {/* 9. Video Section */}
      <VideoSection />

      {/* 11. Certifications & Accreditations */}
      <Certifications onOpenContact={onOpenContact} />

      {/* 12. Testimonials & Client Reviews */}
      <Testimonials />

      {/* 13. Executive Leadership */}
      <Leadership onOpenContact={onOpenContact} />

      {/* 14. Frequently Asked Questions */}
      <FAQSection onOpenContact={onOpenContact} />

      {/* 15. Contact & Inquiry Form */}
      <CallToAction />
    </main>
  );
};

export default HomeMain;