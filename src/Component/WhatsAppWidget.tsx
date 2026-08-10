import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hello, I need electrical services.");
  const phoneNumber = "1234567890"; // Placeholder phone number

  // Auto open after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickReply = (text: string) => {
    setMessage(text);
  };

  const quickReplies = [
    "Need an electrician ASAP",
    "Home wiring & repairs",
    "Commercial electrical services",
    "Get a quote for installation"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-100 bg-white rounded-2xl shadow-2xl overflow-hidden mb-4 flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="bg-green-600 text-white p-4 flex items-center justify-between shadow-sm z-10 relative overflow-hidden">
              {/* Subtle background animation for header */}
              <motion.div 
                className="absolute inset-0 bg-green-500 opacity-0"
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="flex items-center gap-3 relative z-10">
                <motion.div 
                  initial={{ rotate: -15, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0"
                >
                  <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.002 2c-7.714 0-13.969 6.255-13.969 13.97 0 2.457.644 4.852 1.868 6.969l-1.996 7.29 7.458-1.956c2.036 1.121 4.343 1.71 6.638 1.711 7.71 0 13.965-6.255 13.965-13.97 0-3.738-1.455-7.248-4.098-9.89-2.643-2.643-6.155-4.098-9.893-4.098h.027v-.026zM15.998 27.56c-2.072 0-4.108-.557-5.882-1.609l-.422-.25-4.372 1.147 1.168-4.262-.275-.436c-1.157-1.84-1.767-3.977-1.767-6.177 0-6.38 5.191-11.571 11.575-11.571 3.093 0 5.998 1.205 8.184 3.393s3.393 5.093 3.393 8.184c0 6.381-5.194 11.571-11.574 11.571h-.028v.01zM22.348 18.895c-.347-.174-2.057-1.016-2.375-1.132-.319-.116-.55-.174-.783.174-.231.348-.899 1.131-1.102 1.363-.203.232-.405.262-.752.088-.348-.174-1.468-.541-2.796-1.724-1.033-.921-1.731-2.059-1.934-2.408-.203-.347-.022-.534.152-.708.156-.156.348-.406.522-.609.174-.204.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.783-1.886-1.072-2.583-.283-.679-.571-.586-.783-.597-.198-.01-.43-.012-.662-.012s-.609.087-.927.435c-.319.348-1.218 1.19-1.218 2.899s1.247 3.364 1.421 3.596c.174.232 2.451 3.743 5.94 5.251.83.359 1.478.574 1.984.734.832.264 1.589.227 2.188.137.671-.101 2.057-.841 2.347-1.653.289-.811.289-1.508.203-1.653-.087-.145-.319-.232-.667-.406h.001z" />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-bold text-[15px] leading-tight">Amrit Electricals</h3>
                  <p className="text-[12px] text-white/90">Assistant is typing...</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/80 hover:text-white transition-colors relative z-10"
                aria-label="Close widget"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Body */}
            <div className="bg-gray-50 px-4 py-5 flex flex-col flex-1 relative border-b border-gray-100">
              {/* Chat Bubble */}
              <motion.div 
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2, type: "spring" }}
                className="bg-blue-50 p-4 rounded-2xl rounded-tl-sm shadow-sm max-w-[90%] text-[14px] text-blue-950 mb-2 border border-blue-100 origin-bottom-left"
              >
                Hi 👋 I'm Amrit Assistant — I can help with electrical repairs, installations, and quotes.
                <div className="flex gap-1.5 mt-3 items-center h-2.5">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                </div>
              </motion.div>

              {/* Quick Replies */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } },
                  hidden: {}
                }}
                className="flex flex-wrap gap-2 mt-4"
              >
                {quickReplies.map((reply, idx) => (
                  <motion.button 
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, y: 10 },
                      visible: { opacity: 1, scale: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleQuickReply(reply)}
                    className="bg-white border border-gray-200 rounded-full px-3.5 py-2 text-[13px] text-gray-700 shadow-sm hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors text-left"
                  >
                    {reply}
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Input Area */}
            <div className="bg-white px-4 py-3 flex flex-col z-10">
              <div className="flex gap-2">
                <textarea 
                  id="whatsapp_message"
                  name="whatsapp_message"
                  autoComplete="off"
                  className="flex-1 resize-none rounded-xl p-3 text-[14px] border border-gray-200 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-gray-50 shadow-inner transition-shadow" 
                  rows={2} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                />
                <div className="flex flex-col gap-2 justify-center shrink-0">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-1.5 shadow-md hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Send
                  </motion.button>
                  <a href={`tel:${phoneNumber}`} className="text-[13px] text-blue-600 font-medium text-center hover:underline">Call Us</a>
                </div>
              </div>
              <p className="text-[11.5px] text-gray-400 text-center mt-2.5">Clicking Send opens WhatsApp with your message.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button (when closed) */}
      {!isOpen && (
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-blue-500 rounded-full opacity-75"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.button
            onClick={() => setIsOpen(true)}
            className="relative bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-colors focus:outline-none flex items-center justify-center z-10"
            aria-label="Open Chat"
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
               <path d="M16.002 2c-7.714 0-13.969 6.255-13.969 13.97 0 2.457.644 4.852 1.868 6.969l-1.996 7.29 7.458-1.956c2.036 1.121 4.343 1.71 6.638 1.711 7.71 0 13.965-6.255 13.965-13.97 0-3.738-1.455-7.248-4.098-9.89-2.643-2.643-6.155-4.098-9.893-4.098h.027v-.026zM15.998 27.56c-2.072 0-4.108-.557-5.882-1.609l-.422-.25-4.372 1.147 1.168-4.262-.275-.436c-1.157-1.84-1.767-3.977-1.767-6.177 0-6.38 5.191-11.571 11.575-11.571 3.093 0 5.998 1.205 8.184 3.393s3.393 5.093 3.393 8.184c0 6.381-5.194 11.571-11.574 11.571h-.028v.01zM22.348 18.895c-.347-.174-2.057-1.016-2.375-1.132-.319-.116-.55-.174-.783.174-.231.348-.899 1.131-1.102 1.363-.203.232-.405.262-.752.088-.348-.174-1.468-.541-2.796-1.724-1.033-.921-1.731-2.059-1.934-2.408-.203-.347-.022-.534.152-.708.156-.156.348-.406.522-.609.174-.204.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.783-1.886-1.072-2.583-.283-.679-.571-.586-.783-.597-.198-.01-.43-.012-.662-.012s-.609.087-.927.435c-.319.348-1.218 1.19-1.218 2.899s1.247 3.364 1.421 3.596c.174.232 2.451 3.743 5.94 5.251.83.359 1.478.574 1.984.734.832.264 1.589.227 2.188.137.671-.101 2.057-.841 2.347-1.653.289-.811.289-1.508.203-1.653-.087-.145-.319-.232-.667-.406h.001z" />
            </svg>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;

