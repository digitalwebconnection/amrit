import React from 'react';
import Herohm from './Herohm';
// import Scrooling from './Scrooling';
import CompanyOverview from './CompanyOverview';
import CompanyHighlights from './CompanyHighlights';
import BusinessVerticals from './BusinessVerticals';
import WhyChooseSection from './WhyChooseSection';
import OurProcess from './OurProcess';
import RecentProjects from './RecentProjects';
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
      {/* 1. Hero Banner */}
      <Herohm onOpenContact={onOpenContact} />

      {/* 2. Top Marquee Ticker */}
      {/* <Scrooling /> */}

      {/* 4. Company Highlights / Stats */}
      <CompanyHighlights />

        {/* 5. Business Verticals / Services */}
      <BusinessVerticals onOpenContact={onOpenContact} />

      {/* 3. About Company Overview */}
      <CompanyOverview />

      

    

      {/* 6. Why Choose Us */}
      <WhyChooseSection />

      {/* 7. Working Process / 4 Stages */}
      <OurProcess />

      {/* 8. Flagship Projects / Portfolio */}
      <RecentProjects onOpenContact={onOpenContact} />


      {/* 10. Authorized Channel Partners */}
      <ChannelPatner />
      
      {/* 9. Video Section */}
      <VideoSection />

      {/* 11. Certifications & Accreditations */}
      <Certifications onOpenContact={onOpenContact} />

      

      {/* 12. Testimonials & Client Reviews */}
      <Testimonials />

      {/* 13. Executive Leadership */}
      <Leadership />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Contact & Inquiry Form */}
      <CallToAction />
    </main>
  );
};

export default HomeMain;
