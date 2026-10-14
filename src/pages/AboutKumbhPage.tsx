import React from 'react';
import { PageRoute } from '../types';
import {
  Sun,
  Flame,
  Droplets,
  Users,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles,
  Calendar,
  Car,
  ExternalLink,
  Crown,
} from 'lucide-react';

import trimbakeshwarTemple from "../img/triambakeshwar-tempel-2.webp";
import prayagraj from"../img/prayagraj.webp"
import haridwar from"../img/haridwar.webp"
import ujjain from"../img/ujjain.webp"


interface AboutKumbhPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPlanner?: () => void;
}

export const AboutKumbhPage: React.FC<AboutKumbhPageProps> = ({ onNavigate }) => {
  const fourKumbhPlaces = [
    {
      id: 'nashik',
      city: 'Nashik–Trimbakeshwar',
      state: 'Maharashtra',
      river: 'River Godavari (Dakshin Ganga)',
      ghats: 'Ramkund (Nashik) & Kushavarta Kund (Trimbakeshwar)',
      celestialAlignment: 'Jupiter enters Leo (Simha Rashi) & Sun in Leo/Cancer',
      jyotirlinga: 'Trimbakeshwar Jyotirlinga (10th Jyotirlinga)',
      significance:
        'Situated in Maharashtra along the sacred banks of the Godavari River, this unique dual-site hosts the renowned Simhastha Kumbh Mela when Jupiter enters Leo. Trimbakeshwar is globally revered for housing one of the twelve holy Jyotirlingas, while Nashik’s Ramkund and Panchavati areas carry deep spiritual ties to Lord Rama’s epic journey. During the 12-year planetary cycle, millions of pilgrims, Vaishnava akhadas, and Shaiva sadhus converge here to bathe in the nectar-charged waters to attain spiritual liberation.',
      image: trimbakeshwarTemple,
      badge: 'Simhastha Kumbh',
      highlightColor: '#FF6B00',
    },
    {
      id: 'prayagraj',
      city: 'Prayagraj (Allahabad)',
      state: 'Uttar Pradesh',
      river: 'Triveni Sangam (Ganga, Yamuna & Saraswati)',
      ghats: 'Triveni Sangam Ghats, Saraswati Ghat, Qila Ghat',
      celestialAlignment: 'Jupiter in Taurus (Vrishabha) & Sun/Moon in Capricorn (Makara)',
      jyotirlinga: 'Tirtharaj (King of all Holy Tirthas), Akshaya Vat',
      significance:
        'Located in Uttar Pradesh, this legendary city hosts the monumental Maha Kumbh Mela at the Triveni Sangam—the mystical confluence of the Ganga, Yamuna, and the mythical Saraswati rivers. Regarded as the king of all pilgrimage sites (Tirtharaj), it draws the largest gathering of humanity recorded on Earth, easily visible from space. Devotees flock to its expansive riverbanks to camp in massive temporary tent cities, seeking blessings from Naga Sadhus and taking the ultimate purifying holy dip.',
      image: prayagraj,
      badge: 'Maha Kumbh & Purna Kumbh',
      highlightColor: '#D97706',
    },
    {
      id: 'haridwar',
      city: 'Haridwar',
      state: 'Uttarakhand',
      river: 'Holy River Ganga',
      ghats: 'Har Ki Pauri (Brahmakund), Subhash Ghat, VIP Ghat',
      celestialAlignment: 'Jupiter in Aquarius (Kumbha) & Sun in Aries (Mesha)',
      jyotirlinga: 'Gateway to the Gods, Mansa Devi, Chandi Devi',
      significance:
        'Nestled in the emerald foothills of Uttarakhand, Haridwar marks the literal gateway where the holy River Ganga leaves the majestic Himalayan mountains to enter the northern plains. This ancient site hosts the Kumbh Mela along its fast-flowing, crystal-clear waters, centering heavily around the iconic Har Ki Pauri ghat. The destination is globally famous for its vibrant evening Ganga Aarti, grand floating lamps, and a deeply meditative atmosphere that acts as a magnetic hub for international spiritual seekers.',
      image: haridwar,
      badge: 'Haridwar Kumbh',
      highlightColor: '#800000',
    },
    {
      id: 'ujjain',
      city: 'Ujjain (Avantika)',
      state: 'Madhya Pradesh',
      river: 'Sacred River Shipra (Kshipra)',
      ghats: 'Ram Ghat, Mangalnath Ghat, Triveni Ghat',
      celestialAlignment: 'Jupiter in Leo (Simha Rashi) & Sun in Aries (Mesha)',
      jyotirlinga: 'Mahakaleshwar Jyotirlinga (Dakshinabhimukhi Shiva)',
      significance:
        'Resting peacefully in Madhya Pradesh along the banks of the holy Shipra River, Ujjain is a city steeped in absolute cosmic history and Vedic timekeeping. It hosts the spectacular Ardha and Purna Simhastha Kumbh Mela, deeply anchored by the presence of the self-manifested Mahakaleshwar Jyotirlinga temple. The event showcases a unique display of royal processions and grand nocturnal bathing rituals, where millions of devotees cleanse their karmic debt under rare planetary alignments.',
      image: ujjain,
      badge: 'Ujjain Simhastha',
      highlightColor: '#0D7377',
    },
  ];

  return (
    <div className="bg-[#FAF5EE] min-h-screen">
      {/* Top Breadcrumb & Hero Banner */}
      <section className="bg-gradient-to-r from-[#140E0A] via-[#2A160A] to-[#140E0A] text-white py-16 border-b-4 border-[#FF6B00] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F59E0B] uppercase tracking-wider mb-3">
            <button onClick={() => onNavigate('/')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>About Kumbh Mela</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Understanding the Divine Nashik Simhastha Kumbh Mela
          </h1>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Section 1: The Cosmic Legend of Samudra Manthan & The Drops of Amrit */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E7D6C2] shadow-sm relative overflow-hidden">
          <div className="space-y-5">

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1914] tracking-tight">
              What is Kumbh Mela?
            </h2>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              The Kumbh Mela is recognized globally as the world’s largest peaceful religious pilgrimage and festival, drawing tens of millions of Hindu pilgrims, saints, and international travelers to India's most sacred riverbanks. Inscribed on UNESCO’s Representative List of Intangible Cultural Heritage of Humanity, this unparalleled spiritual phenomenon is the only human gathering on Earth immense enough to be visible from space.
            </p>

            <div className="bg-[#FFF8F0] border-l-4 border-[#FF6B00] p-5 rounded-r-2xl mt-4">
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                🏺 The Sacred Legend: Samudra Manthan
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                The cosmic origins of the festival trace back to the ancient Vedic legend of Samudra Manthan—the churning of the primordial ocean of milk by the Devas (gods) and Asuras (demons) to extract Amrit, the nectar of immortality.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                During an intense twelve-day celestial battle over the Kumbh (the sacred pitcher containing the nectar), drops of the divine Amrit fell at four specific locations on Earth: Prayagraj, Haridwar, Ujjain, and Nashik-Trimbakeshwar. These four sacred coordinates became the eternal, rotating sites of the Kumbh Mela, charged with absolute cosmic energy.
              </p>
            </div>

            <div className="bg-[#e0f1ff] border-l-4 border-[#128ded] p-5 rounded-r-2xl mt-4">
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                Why is the Nashik-Trimbakeshwar Kumbh Special?
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                The gathering at Nashik is uniquely celebrated as the Simhastha Kumbh Mela. This specific title is given because the festival occurs precisely when Jupiter (Brihaspati) enters the zodiac sign of Leo (Simha). This rare 12-year planetary alignment is believed to deeply charge the holy waters of the Godavari River and the Kushavarta Kund with extraordinary, purifying spiritual frequencies.
              </p>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Furthermore, Nashik-Trimbakeshwar holds a unique dual-site tradition rooted in historical heritage. Prior to 1789, the entire festival was celebrated exclusively at the Trimbak shrine. Following a historical dispute between different ascetic orders, the Maratha Peshwa rulers officially designated Nashik as the separate holy site for the Vaishnava Akhadas (worshipers of Lord Vishnu) at Ramkund, while the Shaiva Akhadas (worshipers of Lord Shiva) remained at Trimbakeshwar. This structural harmony makes the Nashik Simhastha absolute in its cultural diversity.
              </p>
            </div>

            <div className="bg-[#c5f5c7] border-l-4 border-[#008d06] p-5 rounded-r-2xl mt-4">
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                Seamlessly Experience the Holy Simhastha
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Navigating a gathering of this cosmic scale requires trusted local expertise. As millions prepare their journey for the upcoming Nashik Kumbh Mela 2027, SimhasthaKumbhMela.org acts as your premier digital gateway. Through our centralized network of official partners—including Mahakumbh Tours and Travels, Meera Tours and Travels, and NashikMumbaiCabs—we offer hassle-free bookings for premium Kumbh Mela accommodation, luxury tent cities, certified local sightseeing tour guides, and smooth highway transit from major hubs like Mumbai and Pune.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Profiles of the 4 Sacred Kumbh Places */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF6B00] uppercase mb-2">
              <MapPin className="w-4 h-4" />
              <span>THE 4 SACRED SITES OF BHARAT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1914] tracking-tight">
              Detailed Guide to the 4 Holy Kumbh Mela Places
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              Each holy Kumbh venue is determined by precise planetary alignments of Jupiter (Brihaspati) and the Sun (Surya).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fourKumbhPlaces.map((place, idx) => (
              <div
                key={place.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E7D6C2] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Banner */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.city}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-xs text-[#FDE68A] text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                      0{idx + 1} · {place.badge}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-extrabold text-white">{place.city}</h3>
                      <p className="text-xs text-amber-200 font-medium">{place.state} · {place.river}</p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4 text-xs sm:text-sm text-stone-700">
                    

                    <div className="space-y-1.5">
                      <span className="font-bold text-stone-900 block text-xs uppercase tracking-wider text-stone-500">
                        Primary Bathing Ghats:
                      </span>
                      <p className="text-stone-700 text-xs">{place.ghats}</p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-bold text-stone-900 block text-xs uppercase tracking-wider text-stone-500">
                        Spiritual Legacy &amp; Significance:
                      </span>
                      <p className="text-stone-600 leading-relaxed text-xs">
                        {place.significance}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-stone-500">{place.jyotirlinga}</span>
                    {place.id === 'nashik' && (
                      <button
                        onClick={() => onNavigate('/shahi-snan-dates')}
                        className="font-bold text-[#FF6B00] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Nashik Dates</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: The 4 Kumbhs Astronomical Comparison Table */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E7D6C2] shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F1914]">
             The Samudra Manthan
            </h3>
          </div>
            <p>
              The history of the Kumbh Mela is inextricably linked to the Samudra Manthan (the churning of the cosmic ocean). According to the Puranas, the Devas and Asuras formed a temporary alliance to churn the Ocean of Milk to release the Amrita — the nectar of immortality.
            </p>
            <p>When the divine physician Dhanvantari finally emerged holding the Kumbh (pot) of nectar, a fierce struggle broke out. To protect the elixir, Lord Vishnu disguised himself as Mohini and flew away with the pot.</p>
            <p>His flight lasted for 12 days of the gods (equivalent to 12 human years). During the struggle, drops of the immortal nectar fell at four locations on Earth. These four sites became the sacred venues for the Kumbh Mela.</p>
        </section>

        {/* Section 4: The 13 Ancient Akhadas & Monastic Orders */}
        <section className="bg-gradient-to-br from-[#160F0A] to-[#251810] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#F59E0B]/30">
          <div className="max-w-3xl space-y-4 mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#F59E0B] uppercase">
              <Users className="w-4 h-4" />
              <span>MONASTIC ORDERS &amp; PESHWA TRADITION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              The 13 Ancient Akhadas of Simhastha Kumbh
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Established centuries ago by Adi Shankaracharya and ancient acharyas, the 13 Akhadas preserve spiritual wisdom and monastic discipline, participating in the royal Peshwai processions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-[#1C130D] p-5 rounded-2xl border border-[#3E291E] space-y-2">
              <h4 className="font-bold text-sm text-[#F59E0B]">7 Shaiva Akhadas</h4>
              <p className="text-amber-200/80 font-medium">Bathe at Kushavarta Kund, Trimbakeshwar</p>
              <p className="text-stone-300 leading-relaxed">
                Juna Akhada, Niranjani Akhada, Mahanirvani Akhada, Atal Akhada, Avahan Akhada, Anand Akhada, and Agni Akhada. Worshippers of Lord Shiva.
              </p>
            </div>

            <div className="bg-[#1C130D] p-5 rounded-2xl border border-[#3E291E] space-y-2">
              <h4 className="font-bold text-sm text-[#F59E0B]">3 Vaishnava Akhadas</h4>
              <p className="text-amber-200/80 font-medium">Bathe at Ramkund, Nashik</p>
              <p className="text-stone-300 leading-relaxed">
                Nirmohi Ani Akhada, Digambar Ani Akhada, and Nirvani Ani Akhada. Worshippers of Lord Rama and Lord Vishnu, camped at Tapovan.
              </p>
            </div>

            <div className="bg-[#1C130D] p-5 rounded-2xl border border-[#3E291E] space-y-2">
              <h4 className="font-bold text-sm text-[#F59E0B]">3 Udasi &amp; Nirmal Akhadas</h4>
              <p className="text-amber-200/80 font-medium">Sadhugram Camps in Nashik &amp; Trimbak</p>
              <p className="text-stone-300 leading-relaxed">
                Bada Udasi Akhada, Naya Udasi Akhada, and Nirmal Akhada. Known for continuous free community kitchens (Anna Chhatras) and Guru Granth Sahib recitations.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onNavigate('/shahi-snan-dates')}
            className="gradient-saffron-gold text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>View Shahi Snan Dates</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/sacred-places')}
            className="bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <span>Explore Holy Places</span>
          </button>
        </div>
      </div>
    </div>
  );
};
