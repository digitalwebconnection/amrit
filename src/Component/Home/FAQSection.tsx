import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onOpenContact?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenContact }) => {
  const faqs = [
    {
      question: "What products and brands does Amrit Electricals supply?",
      answer: "We are an authorised channel partner supplying Adani Solar PV Panels (Mono PERC & TOPCon), Polycab Inverters (On-Grid & Hybrid), ACDB & DCDB Distribution Panels, DLMS Class 0.5S Energy Meters (Secure & L&T), Ashmor CTs, Polycab DC Cables, CITEL SPDs, and maintenance-free Chemical Earthing."
    },
    {
      question: "What is the 1-Box Solar KIT and who is it for?",
      answer: "Our pre-packaged Solar KITs (available from 1 kW to 25 kW) are designed for solar installers and system integrators. You get all required components—panels, inverter, ACDB/DCDB, DC cables, and protection devices—in one single delivery ready for instant installation."
    },
    {
      question: "How much can I cut my electricity bills with rooftop solar?",
      answer: "With a high-efficiency Adani Solar rooftop system and Polycab on-grid inverter, residential and commercial clients typically cut their electricity bills by up to 80% with quick 3 to 4-year capital payback."
    },
    {
      question: "What performance warranties are provided?",
      answer: "All Adani Solar PV modules carry a 25-Year Linear Performance Warranty. Polycab inverters include comprehensive 5 to 10-year OEM warranties, supported by our in-house team of trained solar engineers."
    },
    {
      question: "Do you supply DISCOM-approved net-metering equipment?",
      answer: "Yes, we supply DISCOM-compliant 3-Phase HT TOD Class 0.5S DLMS Net-Meters (Secure & L&T) along with Ashmor CTs, ensuring smooth statutory testing and bidirectional grid export clearance."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-primary-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200 inline-block mb-3">
            FAQs
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our solar equipment, turnkey kits, warranties, and DISCOM net-metering.
          </p>
        </div>

        {/* FAQs List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className={`font-semibold text-base sm:text-lg transition-colors pr-4 ${
                    isOpen ? 'text-primary-orange' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <ChevronDown
                    size={20}
                    className={`text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-primary-orange' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    <div className="pt-3">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
};

export default FAQSection;
