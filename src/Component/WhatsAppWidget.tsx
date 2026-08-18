import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, X,  Sparkles, CheckCheck } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hello, I need an EPC solar & electrical consultation.");
  const phoneNumber = "+919700705020"; // Official Amrit Electricals support number

  // Auto open after a short delay on initial visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickReply = (text: string) => {
    setMessage(text);
  };

  const quickReplies = [
    "☀️ Rooftop Solar Feasibility & Quote",
    "⚡ HT/LT Substation & Transformer Setup",
    "🏭 Industrial Plant Rewiring & Audit",
    "🔧 24/7 Emergency Electrical Support"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 320, damping: 25 }}
            className="w-90 sm:w-97.5 bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(16,185,129,0.35),0_0_30px_rgba(0,0,0,0.15)] overflow-hidden mb-4 flex flex-col border border-emerald-100"
          >
            {/* ================= HEADER WITH GLOWING SHIMMER ================= */}
            <div className="bg-linear-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white p-4.5 flex items-center justify-between shadow-md relative overflow-hidden">
              
              {/* Traveling Shimmer Accent */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-linear-to-r from-transparent via-white/80 to-transparent pointer-events-none overflow-hidden">
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-1/3 h-full bg-white shadow-[0_0_10px_#ffffff]"
                />
              </div>

              {/* Header Profile Info */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-11 h-11 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-inner">
                    <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.002 2c-7.714 0-13.969 6.255-13.969 13.97 0 2.457.644 4.852 1.868 6.969l-1.996 7.29 7.458-1.956c2.036 1.121 4.343 1.71 6.638 1.711 7.71 0 13.965-6.255 13.965-13.97 0-3.738-1.455-7.248-4.098-9.89-2.643-2.643-6.155-4.098-9.893-4.098h.027v-.026zM15.998 27.56c-2.072 0-4.108-.557-5.882-1.609l-.422-.25-4.372 1.147 1.168-4.262-.275-.436c-1.157-1.84-1.767-3.977-1.767-6.177 0-6.38 5.191-11.571 11.575-11.571 3.093 0 5.998 1.205 8.184 3.393s3.393 5.093 3.393 8.184c0 6.381-5.194 11.571-11.574 11.571h-.028v.01zM22.348 18.895c-.347-.174-2.057-1.016-2.375-1.132-.319-.116-.55-.174-.783.174-.231.348-.899 1.131-1.102 1.363-.203.232-.405.262-.752.088-.348-.174-1.468-.541-2.796-1.724-1.033-.921-1.731-2.059-1.934-2.408-.203-.347-.022-.534.152-.708.156-.156.348-.406.522-.609.174-.204.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.783-1.886-1.072-2.583-.283-.679-.571-.586-.783-.597-.198-.01-.43-.012-.662-.012s-.609.087-.927.435c-.319.348-1.218 1.19-1.218 2.899s1.247 3.364 1.421 3.596c.174.232 2.451 3.743 5.94 5.251.83.359 1.478.574 1.984.734.832.264 1.589.227 2.188.137.671-.101 2.057-.841 2.347-1.653.289-.811.289-1.508.203-1.653-.087-.145-.319-.232-.667-.406h.001z" />
                    </svg>
                  </div>
                  {/* Green Live Beacon */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-emerald-700 rounded-full animate-pulse" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-[15px] leading-tight text-white font-serif">Amrit Electricals Support</h3>
                    <CheckCheck size={14} className="text-emerald-300" />
                  </div>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                    <span>Online • Instant Engineering Response</span>
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors relative z-10 cursor-pointer"
                aria-label="Close widget"
              >
                <X size={18} />
              </button>
            </div>

            {/* ================= CHAT BODY ================= */}
            <div className="bg-slate-50/90 px-4 py-5 flex flex-col flex-1 relative border-b border-slate-100 max-h-80 overflow-y-auto">
              
              {/* Automated Assistant Bubble */}
              <motion.div
                initial={{ opacity: 0, x: -15, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="bg-white p-4 rounded-2xl rounded-tl-xs shadow-sm max-w-[92%] text-[13.5px] text-slate-800 border border-slate-200/80 origin-bottom-left"
              >
                <p className="font-semibold text-primary-blue text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Sparkles size={13} className="text-primary-orange" />
                  <span>Amrit Technical Desk</span>
                </p>
                <p className="leading-relaxed">
                  Namaste! 🙏 How can our solar EPC and electrical engineers assist your project today?
                </p>

                {/* Animated Typing Indicator */}
                <div className="flex gap-1.5 mt-3 items-center h-2.5">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span className="text-[10px] text-slate-400 font-mono ml-1.5">Connected</span>
                </div>
              </motion.div>

              {/* Quick Reply Pills */}
              <div className="mt-3.5 space-y-1.5">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">Suggested inquiries:</p>
                <div className="flex flex-col gap-1.5">
                  {quickReplies.map((reply, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.01, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickReply(reply)}
                      className="bg-white border border-slate-200/90 hover:border-emerald-500 rounded-xl px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 shadow-2xs hover:shadow-sm transition-all text-left flex items-center justify-between group cursor-pointer"
                    >
                      <span>{reply}</span>
                      <Send size={11} className="opacity-0 group-hover:opacity-100 text-emerald-600 transition-opacity shrink-0 ml-1" />
                    </motion.button>
                  ))}
                </div>
              </div>

            </div>

            {/* ================= INPUT AREA WITH GLOW BUTTON ================= */}
            <div className="bg-white px-4 py-3.5 flex flex-col z-10">
              <div className="flex gap-2 items-stretch">
                <textarea
                  id="whatsapp_message"
                  name="whatsapp_message"
                  autoComplete="off"
                  className="flex-1 resize-none rounded-xl p-3 text-xs sm:text-[13px] border border-slate-200 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50 shadow-inner transition-all leading-relaxed"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your electrical or solar query..."
                />

                <div className="flex flex-col gap-1.5 justify-center shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleSend}
                    className="bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.55)] transition-all cursor-pointer"
                  >
                    <Send size={13} />
                    <span>Send</span>
                  </motion.button>

                  <a 
                    href={`tel:${phoneNumber}`}
                    className="text-[11px] text-slate-600 hover:text-emerald-700 font-bold text-center flex items-center justify-center gap-1 py-1 hover:underline"
                  >
                    <Phone size={11} className="text-emerald-600" />
                    <span>Call Directly</span>
                  </a>
                </div>
              </div>

              <p className="text-[10.5px] text-slate-400 text-center mt-2 font-medium">
                🔒 Opens WhatsApp directly with end-to-end encrypted chat.
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= FLOATING LAUNCHER BUTTON WITH MULTI-LAYER GLOW RIPPLES ================= */}
      {!isOpen && (
        <div className="relative group">
          
          {/* Pulsing Emerald Halo Ripples */}
          <motion.div
            className="absolute -inset-2 bg-emerald-500/40 rounded-full blur-md"
            animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0.1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -inset-4 bg-teal-400/20 rounded-full blur-lg"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />

          {/* Floating Tooltip Pill */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={() => setIsOpen(true)}
            className="absolute right-18 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xl border border-white/20 hidden sm:flex items-center gap-2 cursor-pointer group-hover:scale-104 transition-transform"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Chat on WhatsApp</span>
          </motion.div>

          {/* Main Floating WhatsApp Button */}
          <motion.button
            onClick={() => setIsOpen(true)}
            className="relative w-15 h-15 bg-linear-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] border-2 border-white/40 flex items-center justify-center z-10 cursor-pointer"
            aria-label="Open WhatsApp Chat"
            whileHover={{ scale: 1.12, rotate: 6 }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
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
