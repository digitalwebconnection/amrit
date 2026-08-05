import React from 'react';
import Herohm from './Herohm';
import Scrooling from './Scrooling';
import CompanyOverview from './CompanyOverview';
import BusinessVerticals from './BusinessVerticals';
import WhyChooseSection from './WhyChooseSection';
import CompanyHighlights from './CompanyHighlights';
import Leadership from './Leadership';
import ChannelPatner from './ChannelPatner';
import Testimonials from './Testimonials';
import FAQSection from './FAQSection';

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
      <WhyChooseSection />
      <CompanyHighlights />
      <Leadership />
      <Testimonials />
      <ChannelPatner />
      <FAQSection />
    </main>
  );
};

export default HomeMain;
