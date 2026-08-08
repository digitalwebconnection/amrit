import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What types of solar panels do you install?",
      answer: "We install high-efficiency monocrystalline and polycrystalline solar panels from top-tier manufacturers. Our team will recommend the best option based on your energy needs and budget."
    },
    {
      question: "How long does a typical installation take?",
      answer: "A standard residential solar installation typically takes 1 to 3 days. Commercial projects vary depending on scale. We always provide a clear timeline before starting any work."
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes! We offer comprehensive maintenance and repair services for both solar and general electrical systems to ensure they operate at peak efficiency."
    },
    {
      question: "Are your electricians certified?",
      answer: "Absolutely. All our technicians and electricians are fully licensed, insured, and undergo regular training to stay updated with the latest safety standards."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-black text-gray-900 mb-4"
          >
            Frequently Asked <span className="text-primary-blue"><br />Questions</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-4 mb-4"
          >
            <div className="w-16 h-1 bg-primary-orange rounded-full"></div>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative p-0.5 rounded-xl overflow-hidden group shadow-sm"
            >
              {/* Default Border Background */}
              <div className="absolute inset-0 bg-gray-200"></div>

              {/* Running Gradient Border Background */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${openIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
              >
                <div
                  className="absolute -inset-full animate-spin bg-[conic-gradient(from_0deg,transparent_0_260deg,#3b82f6_310deg,#d46337_360deg)]"
                  style={{ animationDuration: '4s' }}
                ></div>
              </div>

              {/* Inner Content */}
              <div className="relative bg-white rounded-xl h-full overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === index ? 'bg-[#d46337] text-white rotate-180 shadow-md' : 'bg-gray-100 text-gray-500'}`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
