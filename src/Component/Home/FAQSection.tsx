import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

interface FAQSectionProps {
  onOpenContact?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = () => {
  const faqs = [
    {
      question: "What products and brands does Amrit Electricals supply?",
      answer: "We are an authorized partner supplying Adani Solar panels, Polycab inverters, ACDB/DCDB boxes, DLMS net-meters (Secure & L&T), Ashmor CTs, Polycab DC cables, and CITEL SPDs."
    },
    {
      question: "What is the 1-Box Solar KIT and who is it for?",
      answer: "Pre-engineered 1 kW to 25 kW packages containing panels, inverter, distribution boxes, and cables—delivered together for instant rooftop installation."
    },
    {
      question: "How much can I cut my electricity bills with rooftop solar?",
      answer: "High-efficiency Adani systems with Polycab inverters typically reduce electricity bills by up to 80%, with a rapid 3 to 4-year capital payback."
    },
    {
      question: "What performance warranties are provided?",
      answer: "Adani Solar PV modules carry a 25-Year Linear Performance Warranty. Polycab inverters include 5 to 10-year OEM warranties supported by our team."
    },
    {
      question: "Do you supply DISCOM-approved net-metering equipment?",
      answer: "Yes, we supply DISCOM-approved 3-Phase DLMS Class 0.5S smart net-meters (Secure & L&T) with Ashmor CTs for seamless grid synchronization."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 lg:py-14 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2  text-primary-blue mb-3 ">
            <Sparkles size={23} className="text-primary-orange" />
            <span className="text-lg font-bold uppercase tracking-wider">
              Got Questions?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked <span className="text-primary-blue">Questions</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quick answers about our solar equipment, turnkey kits, DISCOM net-metering, and product warranties.
          </p>
        </div>

        {/* FAQs List: Simple, Plain & Bordered */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-primary-orange shadow-xs'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer transition-colors"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-semibold text-base sm:text-lg pr-4 transition-colors ${
                      isOpen ? 'text-primary-orange' : 'text-slate-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                      isOpen
                        ? 'border-primary-orange/30 bg-orange-50 text-primary-orange rotate-180'
                        : 'border-slate-200 bg-slate-50 text-slate-500'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
                    <p className="pt-3.5">
                      {faq.answer}
                    </p>
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

