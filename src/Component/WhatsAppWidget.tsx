import React from 'react';
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
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.002 2c-7.714 0-13.969 6.255-13.969 13.97 0 2.457.644 4.852 1.868 6.969l-1.996 7.29 7.458-1.956c2.036 1.121 4.343 1.71 6.638 1.711 7.71 0 13.965-6.255 13.965-13.97 0-3.738-1.455-7.248-4.098-9.89-2.643-2.643-6.155-4.098-9.893-4.098h.027v-.026zM15.998 27.56c-2.072 0-4.108-.557-5.882-1.609l-.422-.25-4.372 1.147 1.168-4.262-.275-.436c-1.157-1.84-1.767-3.977-1.767-6.177 0-6.38 5.191-11.571 11.575-11.571 3.093 0 5.998 1.205 8.184 3.393s3.393 5.093 3.393 8.184c0 6.381-5.194 11.571-11.574 11.571h-.028v.01zM22.348 18.895c-.347-.174-2.057-1.016-2.375-1.132-.319-.116-.55-.174-.783.174-.231.348-.899 1.131-1.102 1.363-.203.232-.405.262-.752.088-.348-.174-1.468-.541-2.796-1.724-1.033-.921-1.731-2.059-1.934-2.408-.203-.347-.022-.534.152-.708.156-.156.348-.406.522-.609.174-.204.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.783-1.886-1.072-2.583-.283-.679-.571-.586-.783-.597-.198-.01-.43-.012-.662-.012s-.609.087-.927.435c-.319.348-1.218 1.19-1.218 2.899s1.247 3.364 1.421 3.596c.174.232 2.451 3.743 5.94 5.251.83.359 1.478.574 1.984.734.832.264 1.589.227 2.188.137.671-.101 2.057-.841 2.347-1.653.289-.811.289-1.508.203-1.653-.087-.145-.319-.232-.667-.406h.001z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppWidget;
