import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppWidget: React.FC = () => {
  const phoneNumber = "1234567890"; // Placeholder phone number
  const message = "Hello Amrit Electricals, I am interested in your services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3 bg-green-500 text-white rounded-full shadow-xl hover:bg-green-600 transition-colors focus:outline-none"
      aria-label="Contact on WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default WhatsAppWidget;
