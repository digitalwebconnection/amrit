import React, { useState } from 'react';
import { Send, Phone, X, CheckCheck } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hello, I need an EPC solar & electrical consultation.");
  const phoneNumber = "+919700705020"; // Official Amrit Electricals support number

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
      {isOpen && (
        <div className="w-80 sm:w-90 bg-white rounded-2xl shadow-xl overflow-hidden mb-3 flex flex-col border border-slate-200">
          {/* HEADER */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.002 2c-7.714 0-13.969 6.255-13.969 13.97 0 2.457.644 4.852 1.868 6.969l-1.996 7.29 7.458-1.956c2.036 1.121 4.343 1.71 6.638 1.711 7.71 0 13.965-6.255 13.965-13.97 0-3.738-1.455-7.248-4.098-9.89-2.643-2.643-6.155-4.098-9.893-4.098h.027v-.026zM15.998 27.56c-2.072 0-4.108-.557-5.882-1.609l-.422-.25-4.372 1.147 1.168-4.262-.275-.436c-1.157-1.84-1.767-3.977-1.767-6.177 0-6.38 5.191-11.571 11.575-11.571 3.093 0 5.998 1.205 8.184 3.393s3.393 5.093 3.393 8.184c0 6.381-5.194 11.571-11.574 11.571h-.028v.01zM22.348 18.895c-.347-.174-2.057-1.016-2.375-1.132-.319-.116-.55-.174-.783.174-.231.348-.899 1.131-1.102 1.363-.203.232-.405.262-.752.088-.348-.174-1.468-.541-2.796-1.724-1.033-.921-1.731-2.059-1.934-2.408-.203-.347-.022-.534.152-.708.156-.156.348-.406.522-.609.174-.204.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.783-1.886-1.072-2.583-.283-.679-.571-.586-.783-.597-.198-.01-.43-.012-.662-.012s-.609.087-.927.435c-.319.348-1.218 1.19-1.218 2.899s1.247 3.364 1.421 3.596c.174.232 2.451 3.743 5.94 5.251.83.359 1.478.574 1.984.734.832.264 1.589.227 2.188.137.671-.101 2.057-.841 2.347-1.653.289-.811.289-1.508.203-1.653-.087-.145-.319-.232-.667-.406h.001z" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-white">Amrit Support</h3>
                  <CheckCheck size={14} className="text-emerald-200" />
                </div>
                <p className="text-[11px] text-emerald-100">
                  Online • Instant Response
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close widget"
            >
              <X size={16} />
            </button>
          </div>

          {/* CHAT BODY */}
          <div className="bg-slate-50 p-4 flex flex-col max-h-72 overflow-y-auto">
            <div className="bg-white p-3.5 rounded-xl shadow-2xs text-xs text-slate-800 border border-slate-200 mb-3">
              <p className="font-semibold text-primary-blue text-xs mb-1">
                Amrit Technical Desk
              </p>
              <p className="leading-relaxed">
                Namaste! How can our solar EPC and electrical engineers assist your project today?
              </p>
            </div>

            {/* Quick Replies */}
            <div className="space-y-1.5">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Suggested inquiries:</p>
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickReply(reply)}
                  className="w-full bg-white border border-slate-200 hover:border-emerald-500 rounded-lg px-3 py-1.5 text-xs text-slate-700 hover:text-emerald-700 transition-colors text-left cursor-pointer"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT AREA */}
          <div className="bg-white p-3 border-t border-slate-100 flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                id="whatsapp_message"
                name="whatsapp_message"
                autoComplete="off"
                className="flex-1 rounded-lg px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-emerald-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your query..."
              />
              <button
                onClick={handleSend}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Send size={12} />
                <span>Send</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
              <span>End-to-end encrypted</span>
              <a 
                href={`tel:${phoneNumber}`}
                className="text-emerald-700 font-bold hover:underline flex items-center gap-1"
              >
                <Phone size={11} />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
          aria-label="Open WhatsApp Chat"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.002 2c-7.714 0-13.969 6.255-13.969 13.97 0 2.457.644 4.852 1.868 6.969l-1.996 7.29 7.458-1.956c2.036 1.121 4.343 1.71 6.638 1.711 7.71 0 13.965-6.255 13.965-13.97 0-3.738-1.455-7.248-4.098-9.89-2.643-2.643-6.155-4.098-9.893-4.098h.027v-.026zM15.998 27.56c-2.072 0-4.108-.557-5.882-1.609l-.422-.25-4.372 1.147 1.168-4.262-.275-.436c-1.157-1.84-1.767-3.977-1.767-6.177 0-6.38 5.191-11.571 11.575-11.571 3.093 0 5.998 1.205 8.184 3.393s3.393 5.093 3.393 8.184c0 6.381-5.194 11.571-11.574 11.571h-.028v.01zM22.348 18.895c-.347-.174-2.057-1.016-2.375-1.132-.319-.116-.55-.174-.783.174-.231.348-.899 1.131-1.102 1.363-.203.232-.405.262-.752.088-.348-.174-1.468-.541-2.796-1.724-1.033-.921-1.731-2.059-1.934-2.408-.203-.347-.022-.534.152-.708.156-.156.348-.406.522-.609.174-.204.232-.348.348-.58.116-.232.058-.435-.029-.609-.087-.174-.783-1.886-1.072-2.583-.283-.679-.571-.586-.783-.597-.198-.01-.43-.012-.662-.012s-.609.087-.927.435c-.319.348-1.218 1.19-1.218 2.899s1.247 3.364 1.421 3.596c.174.232 2.451 3.743 5.94 5.251.83.359 1.478.574 1.984.734.832.264 1.589.227 2.188.137.671-.101 2.057-.841 2.347-1.653.289-.811.289-1.508.203-1.653-.087-.145-.319-.232-.667-.406h.001z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default WhatsAppWidget;
