import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const StickyWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const defaultPhone = '919422000000'; // Nashik Pilgrim Support Helpline representation

  const handleOpenWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg ||
        userQuery ||
        'Hello, I would like guidance regarding Nashik Simhastha Kumbh 2027–2028.'
    );
    window.open(`https://wa.me/${defaultPhone}?text=${text}`, '_blank');
    setIsOpen(false);
    setUserQuery('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Chat Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border-2 border-emerald-500 overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Pilgrim WhatsApp Support</h4>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online · Simhastha 2027–28</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#ECE5DD] space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs text-stone-800 leading-relaxed max-w-[90%]">
              <p className="font-semibold text-[#075E54] mb-1">Namaste Pilgrim! 🙏</p>
              <p>
                Have a question about Shahi Snan dates, Ramkund bathing guidelines, or train
                connectivity to Nashik &amp; Trimbakeshwar? Chat with us directly on WhatsApp.
              </p>
            </div>

            {/* Quick Action Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-stone-500">
                Quick Inquiries:
              </p>
              <div className="flex flex-col gap-1">
                {[
                  'What are the 2027 Shahi Snan dates?',
                  'Book cab for Trimbakeshwar Joytirling Darshan',
                  'Nashik Darshan & Panchavati Tapovan tour package',
                  'Where to stay during Kumbh Mela?',
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleOpenWhatsApp(q)}
                    className="text-left text-[11px] bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-800 p-2 rounded-lg border border-stone-200 transition-colors cursor-pointer"
                  >
                    • {q}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Input & Send */}
          <div className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleOpenWhatsApp();
              }}
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-stone-300 focus:outline-none focus:border-emerald-600"
            />
            <button
              onClick={() => handleOpenWhatsApp()}
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white p-2.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white"
      >
        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-100 border-2 border-[#25D366]" />
        </span>

        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </button>
    </div>
  );
};
