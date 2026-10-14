import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SACRED_GHATS, SACRED_PLACES } from '../data/kumbhData';
import {
  MapPin,
  Clock,
  Droplets,
  Flame,
  Sun,
  ShieldCheck,
  Compass,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

interface SacredPlacesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPlanner: () => void;
}

export const SacredPlacesPage: React.FC<SacredPlacesPageProps> = ({ onNavigate, onOpenPlanner }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ghats' | 'temples' | 'hills'>('all');

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
            <span>Holy Places</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            Sacred Ghats, Shrines &amp; Temples
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm text-stone-300 leading-relaxed">
            Discover the revered bathing ghats along Mother Godavari and the ancient temples of Nashik and Trimbakeshwar.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-stone-200">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              All Holy Places
            </button>
            <button
              onClick={() => setActiveTab('ghats')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'ghats'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Droplets className="w-3.5 h-3.5" />
              <span>Sacred Ghats &amp; Kunds</span>
            </button>
            <button
              onClick={() => setActiveTab('temples')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'temples'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Historic Temples</span>
            </button>
            <button
              onClick={() => setActiveTab('hills')}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'hills'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Sacred Hills &amp; Nature</span>
            </button>
          </div>

          <div className="text-xs text-stone-500 font-medium">
            Nashik &amp; Trimbakeshwar Sanctuaries
          </div>
        </div>

        {/* 1. SACRED GHATS (Image, Title, Max 4-line description) */}
        {(activeTab === 'all' || activeTab === 'ghats') && (
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FFF7ED] text-[#FF6B00] flex items-center justify-center font-bold">
                <Droplets className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Sacred Bathing Ghats &amp; Kunds
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SACRED_GHATS.map((ghat) => (
                <div
                  key={ghat.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={ghat.imageUrl}
                        alt={ghat.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-xs text-[#FDE68A] text-xs font-bold px-3 py-1 rounded-full">
                        {ghat.location}
                      </div>
                      <div className="absolute bottom-3 left-3 bg-[#FF6B00] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md">
                        Holy Ghat
                      </div>
                    </div>

                    {/* Title & Max 4 Line Description */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#1F1914] mb-2">{ghat.name}</h3>
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-4">
                        {ghat.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>{ghat.coordinatesHint}</span>
                    </span>
                    <span className="text-[11px] font-bold text-[#0D7377] bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      Safe Steps
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 2. SACRED TEMPLES (Image, Title, Max 4-line description) */}
        {(activeTab === 'all' || activeTab === 'temples') && (
          <section className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FFF1F2] text-[#800000] flex items-center justify-center font-bold">
                <Flame className="w-4 h-4 fill-[#800000]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Historic Temples &amp; Jyotirlinga
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SACRED_PLACES.filter(
                (p) => p.locationType === 'Temple' || p.locationType === 'Sacred Grove'
              ).map((place) => (
                <div
                  key={place.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={place.imageUrl}
                        alt={place.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-[#800000] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {place.distanceFromNashikCenter}
                      </div>
                    </div>

                    {/* Title & Max 4 Line Description */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#1F1914] mb-2">{place.name}</h3>
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-4">
                        {place.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="flex items-center gap-1 text-[11px] text-stone-600">
                      <Clock className="w-3.5 h-3.5 text-[#FF6B00]" />
                      <span>Open for Darshan</span>
                    </span>
                    <span className="text-[11px] font-bold text-[#800000] bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Mandatory Dress Code
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. SACRED HILLS (Image, Title, Max 4-line description) */}
        {(activeTab === 'all' || activeTab === 'hills') && (
          <section className="space-y-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold">
                <Sun className="w-4 h-4" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Sacred Hills &amp; Nature Shrines
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SACRED_PLACES.filter(
                (p) =>
                  p.locationType === 'Sacred Hill' ||
                  p.locationType === 'River Source' ||
                  p.locationType === 'Heritage Cave'
              ).map((place) => (
                <div
                  key={place.id}
                  className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={place.imageUrl}
                        alt={place.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-black/80 text-[#FDE68A] text-xs font-bold px-3 py-1 rounded-full">
                        {place.distanceFromNashikCenter}
                      </div>
                    </div>

                    {/* Title & Max 4 Line Description */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#1F1914] mb-2">{place.name}</h3>
                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-4">
                        {place.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <span className="flex items-center gap-1 text-[11px] text-stone-600">
                      <MapPin className="w-3.5 h-3.5 text-[#0D7377]" />
                      <span>Scenic Pilgrimage</span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Walking Steps
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DAILY DARSHAN TIMETABLE (English) */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#FF6B00]" />
            <h3 className="text-lg sm:text-xl font-bold text-stone-900">
              Daily Temple Darshan &amp; Aarti Timetable
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#FAF5EE] text-stone-700 font-bold uppercase tracking-wider border-b border-stone-200">
                <tr>
                  <th className="py-3 px-4">Temple / Ghat</th>
                  <th className="py-3 px-4">Morning Timings</th>
                  <th className="py-3 px-4">Evening Aarti</th>
                  <th className="py-3 px-4">Visitor Advisory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                <tr className="hover:bg-stone-50">
                  <td className="py-3 px-4 font-bold text-stone-900">Trimbakeshwar Jyotirlinga</td>
                  <td className="py-3 px-4">05:30 AM – 09:00 PM (Kakad Aarti: 05:30 AM)</td>
                  <td className="py-3 px-4">07:00 PM (Shej Aarti: 09:00 PM)</td>
                  <td className="py-3 px-4">Traditional dress mandatory; electronics deposited outside.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="py-3 px-4 font-bold text-stone-900">Ramkund Godavari Aarti</td>
                  <td className="py-3 px-4">Open 24 hours for prayer &amp; snan</td>
                  <td className="py-3 px-4">07:00 PM (Maha Godavari Aarti)</td>
                  <td className="py-3 px-4">Spectacular evening lamp offering with sacred chants.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="py-3 px-4 font-bold text-stone-900">Kalaram Mandir (Panchavati)</td>
                  <td className="py-3 px-4">05:30 AM – 12:00 PM</td>
                  <td className="py-3 px-4">07:30 PM (Closes 10:00 PM)</td>
                  <td className="py-3 px-4">Peshwa black stone architecture; peaceful prayer halls.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="py-3 px-4 font-bold text-stone-900">Sita Gufa (Panchavati)</td>
                  <td className="py-3 px-4">06:00 AM – 01:00 PM</td>
                  <td className="py-3 px-4">03:00 PM – 09:00 PM</td>
                  <td className="py-3 px-4">Narrow cave threshold; requires careful bending.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Trimbakeshwar Jyotirlinga Simhastha Travel Guide & Sadhugram Tour */}
        <section className="bg-gradient-to-br from-[#1E120A] to-[#2B170E] rounded-3xl p-8 sm:p-10 text-white shadow-xl border border-[#F59E0B]/30 space-y-6">
          <div className="flex items-center gap-2 text-[#F59E0B] text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4 text-[#FF6B00]" />
            <span>DARSHAN &amp; SIGHTSEEING GUIDANCE</span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Trimbakeshwar Jyotirlinga Simhastha Travel Guide &amp; Sadhugram Tour
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Planning your pilgrimage? Explore our comprehensive <strong>Trimbakeshwar Jyotirlinga Simhastha travel guide</strong> and guided <strong>Sadhugram Nashik Simhastha tour</strong> to meet venerable saints and sadhus. Book reliable <strong>Nashik Simhastha local sightseeing cabs</strong> and all-inclusive <strong>Nashik Trimbakeshwar Shirdi Simhastha tour packages</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <a
                href="https://mahakumbhtourstravelsnashik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-saffron-gold text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Book Local Sightseeing Cab</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Navigation to Pilgrim Transit & Accommodation Guide */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('/pilgrim-guide')}
            className="gradient-saffron-gold text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>View Pilgrim Travel &amp; Accommodation Guide</span>
          </button>
          <button
            onClick={() => onNavigate('/shahi-snan-dates')}
            className="bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all cursor-pointer shadow-xs inline-flex items-center gap-2"
          >
            <span>Shahi Snan Schedule</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
