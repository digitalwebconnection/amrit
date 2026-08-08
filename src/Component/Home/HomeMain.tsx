import React from 'react';
import Herohm from './Herohm';
import Scrooling from './Scrooling';
import CompanyOverview from './CompanyOverview';
import VideoSection from './VideoSection';
import BusinessVerticals from './BusinessVerticals';
import OurProcess from './OurProcess';
import WhyChooseSection from './WhyChooseSection';
import CompanyHighlights from './CompanyHighlights';
import Products from './Products';
import ChannelPatner from './ChannelPatner';
import Certifications from './Certifications';
import RecentProjects from './RecentProjects';
import Leadership from './Leadership';
import Testimonials from './Testimonials';

import FAQSection from './FAQSection';
import CallToAction from './CallToAction';

interface HomeMainProps {
  onOpenContact: () => void;
}

export const HomeMain: React.FC<HomeMainProps> = ({ onOpenContact }) => {
  return (
    <main>
      <Herohm onOpenContact={onOpenContact} />
      <Scrooling />
      <CompanyOverview />
      <BusinessVerticals />
      <OurProcess />
      <VideoSection />
      <RecentProjects />
      <WhyChooseSection />
      <CompanyHighlights />
      <Products />
      <ChannelPatner />
      <Certifications />
      <Leadership />
      <Testimonials />
      <FAQSection />
      <CallToAction />
    </main>
  );
};

export default HomeMain;
