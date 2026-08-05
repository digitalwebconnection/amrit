import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
  {
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=600",
    date: "Aug 12, 2026",
    category: "Solar Energy",
    title: "How Commercial Solar Drastically Reduces Overhead Costs",
    excerpt: "Discover the financial benefits of transitioning your manufacturing unit to a captive solar power plant."
  },
  {
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&q=80&w=600",
    date: "Jul 28, 2026",
    category: "Electrical Safety",
    title: "The Importance of Routine Electrical Safety Audits",
    excerpt: "Why neglecting industrial electrical maintenance can lead to catastrophic failures and severe compliance penalties."
  },
  {
    image: "https://images.unsplash.com/photo-1565439399435-010abfb9d4cf?auto=format&fit=crop&q=80&w=600",
    date: "Jul 15, 2026",
    category: "Company News",
    title: "Amrit Electricals Completes 100th EPC Solar Project",
    excerpt: "A major milestone achieved as we successfully commission a 500kW ground-mounted solar project for our latest client."
  }
];

export const BlogPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        <div className="text-center mb-16">
          <h4 className="text-[#d46337] font-bold tracking-widest uppercase text-sm mb-3">News & Insights</h4>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Latest Updates from <span className="text-primary-blue">Amrit Electricals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-[#d46337] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-3">
                  <Calendar size={14} />
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#d46337] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 font-bold text-primary-blue text-sm">
                  READ MORE <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
