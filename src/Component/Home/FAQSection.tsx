import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What types of solar panels and inverters do you supply and install?",
      answer: "We supply and install Tier-1 high-efficiency N-Type TOPCon and Mono-PERC bifacial solar panels from leading manufacturers including Adani Solar and Goldi Solar, paired with high-yield smart string inverters from Polycab and Sungrow with 98.8%+ MPPT efficiency."
    },
    {
      question: "How long does turnkey solar EPC execution take from design to grid sync?",
      answer: "Residential rooftop installations typically take 2 to 4 days. Commercial and industrial solar projects (50 kW to 1 MW+) generally take 2 to 4 weeks, including DISCOM net-metering sanctions, CEIG inspections, and structural load erection."
    },
    {
      question: "What warranty and performance guarantee do you provide?",
      answer: "All solar PV modules come with a 25-Year Linear Power Output Warranty backed directly by the OEM. Inverters carry a 5 to 10-year warranty, and our turnkey EPC craftsmanship and structure carry comprehensive lifetime after-sales O&M support."
    },
    {
      question: "Do you handle government subsidies and DISCOM net-metering approvals?",
      answer: "Yes! As an MNRE-approved channel partner and Grade-A licensed electrical contractor, we manage end-to-end statutory approvals, DISCOM net-metering applications, bi-directional meter synchronization, and applicable subsidy disbursement documentation."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 lg:py-16 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden selection:bg-primary-orange selection:text-white">
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Eyebrow Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-primary-orange animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Clear Answers // Technical Clarifications
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-slate-900 mb-4"
          >
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-blue-700 to-primary-orange">Questions</span>
          </motion.h2>

          {/* Shimmer Line */}
          <div className="relative w-32 h-1 bg-gradient-to-r from-primary-blue via-primary-orange to-amber-400 rounded-full mx-auto shadow-[0_0_12px_rgba(241,130,35,0.6)] overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
              className="w-1/2 h-full bg-white/80"
            />
          </div>
        </div>

        {/* FAQs List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen
                    ? 'border-primary-orange/60 shadow-[0_10px_30px_-8px_rgba(241,130,35,0.25)] bg-white ring-1 ring-primary-orange/20'
                    : 'border-slate-200/80 bg-white hover:border-slate-300 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Left Active Glow Stripe */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary-orange to-amber-500 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left bg-transparent transition-colors cursor-pointer"
                >
                  <span className={`font-bold text-base sm:text-lg transition-colors font-sans pr-4 ${
                    isOpen ? 'text-primary-orange' : 'text-slate-800 group-hover:text-primary-blue'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-gradient-to-tr from-primary-orange to-amber-500 text-white shadow-md shadow-orange-500/30 scale-105'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-primary-blue'
                  }`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 font-normal">
                        <div className="pt-3.5">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

