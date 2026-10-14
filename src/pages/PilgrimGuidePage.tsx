import React from 'react';
import { PageRoute } from '../types';
import {
  Train,
  Bus,
  Plane,
  Home,
  CheckSquare,
  Users,
  ShieldAlert,
  Compass,
  ArrowRight,
} from 'lucide-react';

interface PilgrimGuidePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPlanner: () => void;
}

export const PilgrimGuidePage: React.FC<PilgrimGuidePageProps> = ({
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
            <span>Guide</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            Pilgrim Journey, Transit &amp; Stay Guide
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm text-stone-300 leading-relaxed">
            Essential transit routes, accommodation choices, packing checklists, and senior citizen care for Kumbh 2027–2028.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Section 1: How to Reach Nashik & Trimbakeshwar */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Train className="w-5 h-5 text-[#FF6B00]" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              How to Reach Nashik &amp; Trimbakeshwar (Car Rental &amp; Transit)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* By Train */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-[#FF6B00] flex items-center justify-center font-bold">
                <Train className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-stone-900">By Railway (Recommended)</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                <strong>Nashik Road (NK)</strong> is a principal railway station on the Central
                Railway zone. It handles high-frequency express trains connecting Mumbai
                (CSMT/Dadar ~ 3.5 hrs), Pune, New Delhi, Nagpur, and Kolkata.
              </p>
              <div className="text-[11px] text-[#800000] font-semibold bg-[#FFF1F2] p-2.5 rounded-lg border border-rose-200">
                Tip: Local shuttle buses connect Nashik Road Station directly to Panchavati and CBS.
              </div>
            </div>

            {/* By Road & Taxi Services */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FFF1F2] text-[#800000] flex items-center justify-center font-bold">
                <Bus className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-stone-900">Mumbai &amp; Pune Road Corridors</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Seamless connectivity via the 6-lane expressway. Reliable <strong>Mumbai to Nashik Simhastha taxi service</strong> and expert <strong>Pune to Nashik Simhastha tour operator</strong> connections allow hassle-free door-to-door transit for families.
              </p>
              <div className="text-[11px] text-[#FF6B00] bg-[#FFF7ED] p-2.5 rounded-lg border border-[#FED7AA] font-semibold">
                Available: Mumbai to Nashik Simhastha Kumbh Mela tour package &amp; Pune travel packages.
              </div>
            </div>

            {/* Car Rental & Local Cabs */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] text-[#0D7377] flex items-center justify-center font-bold">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-stone-900">Airport &amp; Local Cabs</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Nashik Ozar Airport (ISK) and Mumbai Airport (BOM) transfers. Book trusted <strong>Simhastha Kumbh Mela 2027 Nashik car rental</strong> and affordable <strong>Nashik Simhastha local sightseeing cabs</strong> for Panchavati and Trimbakeshwar.
              </p>
              <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 font-semibold">
                Compare verified <strong>Nashik Simhastha Kumbh Mela car rental price</strong> with transparent fares.
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Nashik to Trimbakeshwar Transit Corridor */}
        <section className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Bus className="w-5 h-5 text-[#FF6B00]" />
            <h3 className="text-xl font-bold text-stone-900">
              Nashik City to Trimbakeshwar (28 km Corridor &amp; Shirdi Yatra)
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Trimbakeshwar is situated 28 km southwest of Nashik along State Highway 30. Pilgrims frequently book comprehensive <strong>Nashik Trimbakeshwar Shirdi Simhastha tour packages</strong> operated by Mahakumbh Tours &amp; Travels Nashik and Meera Tours and Travels for a complete darshan circuit.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="bg-[#FFF7ED] p-4 rounded-xl border border-[#FED7AA]">
              <strong className="text-[#9A3412] block mb-1">MSRTC Special Feeder Fleet:</strong>
              Dedicated non-stop shuttle buses operate continuously between outer parking areas and
              Trimbakeshwar entry terminals.
            </div>
            <div className="bg-[#FAF5EE] p-4 rounded-xl border border-stone-200">
              <strong className="text-stone-800 block mb-1">Pedestrian Corridors:</strong>
              Inside Trimbakeshwar temple town, movement is exclusively pedestrian to ensure safety and smooth flow.
            </div>
          </div>
        </section>

        {/* Section 3: Accommodation Options */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-[#FF6B00]" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              Nashik Simhastha Kumbh Mela Accommodation Booking
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-2.5">
              <h4 className="font-bold text-base text-stone-900">
                Hotels Near Ramkund Nashik Simhastha Kumbh Mela
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Stay right next to the Godavari holy bathing ghats. Check premier <strong>Nashik Simhastha hotel packages</strong> in Panchavati, CBS, and Gangapur Road with direct access to Ramkund.
              </p>
              <div className="text-[11px] text-[#FF6B00] font-semibold bg-[#FFF7ED] p-2.5 rounded-lg border border-[#FED7AA]">
                Walking distance to royal snan ghats and Kalaram Mandir.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-2.5">
              <h4 className="font-bold text-base text-stone-900">
                Luxury Tents &amp; Tent City Nashik Booking
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Book <strong>Luxury tents in Nashik Simhastha Kumbh Mela</strong> through <strong>Simhastha Kumbh Mela tent city Nashik booking</strong> in Sadhugram with attached baths, dining, and 24/7 security.
              </p>
              <div className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                Equipped with primary health centers and lost person desks.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-2.5">
              <h4 className="font-bold text-base text-stone-900">
                Trimbakeshwar Simhastha Kumbh Mela Room Stay
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Reserve <strong>Hotels near Trimbakeshwar Simhastha Kumbh Mela</strong> and MTDC resort cottages close to Kushavarta Kund and the sacred Jyotirlinga temple.
              </p>
              <div className="text-[11px] text-[#800000] font-semibold bg-[#FFF1F2] p-2.5 rounded-lg border border-rose-200">
                Ideal for Shaiva pilgrims and holy parvani dips.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-2.5">
              <h4 className="font-bold text-base text-stone-900">
                Dharamshala Booking in Nashik Simhastha Kumbh Mela
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Traditional trust-managed community dharamshalas in Panchavati and Trimbakeshwar offering satvik meals and affordable family lodging.
              </p>
              <div className="text-[11px] text-amber-700 font-semibold bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                Nominal contribution with advance token booking.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-2.5">
              <h4 className="font-bold text-base text-stone-900">
                Budget Ashram Stay in Nashik Simhastha
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Quiet, spiritually vibrant ashrams along Godavari banks and Tapovan offering peaceful meditation halls, kirtan, and basic room stays.
              </p>
              <div className="text-[11px] text-[#0D7377] font-semibold bg-[#F0FDFA] p-2.5 rounded-lg border border-teal-200">
                Early booking recommended before peak parvani dates.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-md space-y-2.5">
              <h4 className="font-bold text-base text-stone-900">
                Partner Yatra Assistance &amp; Tour Booking
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Connect with <strong>Mahakumbh Tours &amp; Travels Nashik</strong> and <strong>Meera Tours and Travels</strong> for all-in-one stays, cabs, and VIP darshan assistance.
              </p>
              <div className="text-[11px] text-purple-700 font-semibold bg-purple-50 p-2.5 rounded-lg border border-purple-200">
                Helpline: +91 98220 12345 · 12 Years of Experience
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Senior Citizens & Family Care */}
        <section className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#FF6B00]" />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              Senior Citizens &amp; Family Care
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-stone-600">
            <div className="bg-[#FAF5EE] p-5 rounded-2xl border border-stone-200 space-y-2">
              <div className="font-bold text-stone-900 text-sm">Emergency ID Cards</div>
              <p>
                Keep a card in clothing pockets stating full name, emergency contact phone numbers,
                and your accommodation address in Nashik.
              </p>
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-2xl border border-stone-200 space-y-2">
              <div className="font-bold text-stone-900 text-sm">Resting Pavilions</div>
              <p>
                Take advantage of covered Senior Citizen Holding Pavilions situated along the approach
                routes to Ramkund and Trimbakeshwar with water and seating.
              </p>
            </div>

            <div className="bg-[#FAF5EE] p-5 rounded-2xl border border-stone-200 space-y-2">
              <div className="font-bold text-stone-900 text-sm">Prescription Medications</div>
              <p>
                Carry sufficient medicines for at least 7 days in original containers along with a
                doctor’s prescription note in waterproof pouches.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Packing Essentials & Dos / Don'ts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-emerald-600" />
              <h3 className="font-bold text-base text-stone-900">Packing Essentials</h3>
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>✔ Original Government ID (Aadhaar / Voter ID / Passport)</li>
              <li>✔ Comfortable, breathable cotton traditional attire</li>
              <li>✔ Non-slip footwear suitable for wet stone ghat steps</li>
              <li>✔ Waterproof waist pouch for mobile phone and cash</li>
              <li>✔ Reusable water bottle and hydration electrolyte packets</li>
              <li>✔ Portable power bank with charging cable</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-600" />
              <h3 className="font-bold text-base text-stone-900">Sacred Dos &amp; Don'ts</h3>
            </div>
            <ul className="space-y-2 text-xs text-stone-600">
              <li>✔ <strong>Do:</strong> Follow directional arrows and police barricade corridors.</li>
              <li>✔ <strong>Do:</strong> Deposit floral offerings only in marked bio-compost bins.</li>
              <li>❌ <strong>Don't:</strong> Wear valuable gold ornaments in dense crowds.</li>
              <li>❌ <strong>Don't:</strong> Venture beyond the chained safety barricades in the river.</li>
              <li>❌ <strong>Don't:</strong> Use chemical soaps or detergents in holy ghat waters.</li>
            </ul>
          </div>
        </section>

        {/* Footer Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('/contact')}
            className="gradient-saffron-gold text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Emergency Helplines &amp; Control Rooms</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/shahi-snan-dates')}
            className="bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all cursor-pointer shadow-xs inline-flex items-center gap-2"
          >
            <span>View Shahi Snan Dates</span>
          </button>
        </div>
      </div>
    </div>
  );
};
