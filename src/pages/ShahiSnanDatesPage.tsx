import React from 'react';
import { PageRoute } from '../types';
import { PARVANI_DATES } from '../data/kumbhData';
import {
  Calendar,
  Clock,
  Droplets,
  ShieldCheck,
  CheckCircle,
  Compass,
  ArrowRight,
  Flame,
  Crown,
  Sun,
} from 'lucide-react';

interface ShahiSnanDatesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPlanner: () => void;
}

export const ShahiSnanDatesPage: React.FC<ShahiSnanDatesPageProps> = ({
  onNavigate,
  onOpenPlanner,
}) => {
  return (
    <div className="bg-[#FAF5EE] min-h-screen">
      {/* Top Banner (Pure English) */}
      <section className="bg-gradient-to-r from-[#140E0A] via-[#2A160A] to-[#140E0A] text-white py-14 border-b-4 border-[#FF6B00] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F59E0B] uppercase tracking-wider mb-3">
            <button
              onClick={() => onNavigate('/')}
              className="hover:underline cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span>Shahi Snan Dates</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            Nashik Simhastha Kumbh Mela 2027 Shahi Snan Dates Itinerary
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm text-stone-300 leading-relaxed">
            The complete <strong>Nashik Simhastha bathing dates itinerary</strong> for royal astronomical snans at Ramkund and Kushavarta Kund during Simhastha Kumbh 2027–2028.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Important Astrological Notice & VIP Pass Assistance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FFFDF9] rounded-2xl p-6 border-l-4 border-[#F59E0B] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 font-bold">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs text-stone-600">
              <div className="font-bold text-sm text-stone-900">
                Astronomical Formulation &amp; Gazette Notice
              </div>
              <p>
                The Simhastha Parvani dates are calculated according to traditional Hindu astronomical
                panchang cycles (Jupiter entering Leo and Solar entries) verified by the Akhada Parishad.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFDF9] rounded-2xl p-6 border-l-4 border-[#FF6B00] shadow-xs flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#FF6B00] flex items-center justify-center shrink-0 font-bold">
              <Crown className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs text-stone-600">
              <div className="font-bold text-sm text-stone-900">
                Simhastha Kumbh Mela Nashik VIP Darshan Package &amp; Passes
              </div>
              <p>
                Need priority assistance for senior citizens and families? Inquire about <strong>Nashik Simhastha VIP pass booking</strong>, guided <strong>Trimbakeshwar Jyotirlinga Simhastha travel guide</strong>, and special royal snan viewing arrangements.
              </p>
            </div>
          </div>
        </div>

        {/* Parvani Timeline Cards */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-[#FF6B00]" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              Ceremonial Parvani Schedule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PARVANI_DATES.map((item, idx) => (
              <div
                key={item.id}
                className={`bg-white rounded-2xl p-6 border-2 transition-all flex flex-col justify-between shadow-md hover:shadow-xl ${
                  item.isMajorParvani
                    ? 'border-[#FF6B00]/40'
                    : 'border-stone-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-[#800000] uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>{item.dateStr}</span>
                    </span>
                    {item.isMajorParvani ? (
                      <span className="bg-[#FFF1F2] text-[#800000] text-[10px] font-extrabold uppercase px-2 py-0.5 rounded border border-rose-200">
                        Major Shahi Snan
                      </span>
                    ) : (
                      <span className="bg-stone-100 text-stone-600 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                        Ritual Observance
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.eventName}</h3>

                  <div className="bg-[#FAF5EE] p-3 rounded-xl border border-stone-200 text-xs mb-3">
                    <div className="font-bold text-stone-800 mb-0.5">Hindu Tithi:</div>
                    <div className="text-stone-600">{item.hinduTithi}</div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4 line-clamp-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Location: <strong>{item.location}</strong></span>
                  <span className="font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {item.status.split('/')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Snan Rituals & Step-by-Step Protocols */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-[#FF6B00]" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              Traditional Holy Bathing Rituals &amp; Invocation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Taking a holy dip during the Simhastha Kumbh is known as <strong>Punya Snan</strong>.
                Devotees traditionally meditate upon the sacred rivers of India and take three gentle
                immersions facing the rising sun.
              </p>

              <div className="bg-[#FFF7ED] p-5 rounded-2xl border border-[#FED7AA] space-y-2">
                <div className="text-xs font-bold text-[#9A3412] uppercase tracking-wider">
                  The Sacred River Invocation (English Meaning)
                </div>
                <p className="text-sm font-semibold text-[#800000] leading-relaxed italic">
                  "O holy waters of Ganga, Yamuna, Godavari, Saraswati, Narmada, Sindhu, and Kaveri!
                  Kindly bless these sacred waters and bestow spiritual peace, purity, and inner awakening."
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-sm text-stone-900">Step-by-Step Snan Protocols:</h3>
              <ul className="space-y-2 text-xs text-stone-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>1. Sacred Resolution (Sankalpa):</strong> Stand facing the morning sun with folded hands.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>2. Three Gentle Dips:</strong> Immerse three times within designated chained shallow steps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>3. Surya Arghya:</strong> Offer water offerings in cupped hands to the sun.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                  <span><strong>4. Evening Diya Offering:</strong> Float eco-friendly leaf diya lamps at sunset.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Clean River Godavari Commitment */}
        <section className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-[#6EE7B7] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>CLEAN &amp; SACRED RIVER COMMITMENT</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold">
            Keep Mother Godavari Pure: Strict Pilgrim Code
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-emerald-100 pt-2">
            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-xs">
              <strong className="text-white block mb-1">🚫 No Chemical Soaps or Detergents:</strong>
              Never use chemical soaps, detergents, or oil shampoos inside Ramkund or any ghat waters.
            </div>

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-xs">
              <strong className="text-white block mb-1">🚫 Zero Plastic Disposal:</strong>
              Carry cloth bags. Dispose of flower garlands only in marked bio-compost bins.
            </div>

            <div className="bg-white/10 p-4 rounded-xl backdrop-blur-xs">
              <strong className="text-white block mb-1">✅ Safe Step Barricades:</strong>
              Stay strictly within designated chained enclosures; never cross safety buoys into deep waters.
            </div>
          </div>
        </section>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('/pilgrim-guide')}
            className="gradient-saffron-gold text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Read Transit &amp; Accommodation Guide</span>
          </button>
          <button
            onClick={() => onNavigate('/sacred-places')}
            className="bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all cursor-pointer shadow-xs inline-flex items-center gap-2"
          >
            <span>Explore Holy Ghats &amp; Temples</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
