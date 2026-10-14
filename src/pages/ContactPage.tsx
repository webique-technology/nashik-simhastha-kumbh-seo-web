import React, { useState } from 'react';
import { PageRoute } from '../types';
import {
  Phone,
  Send,
  CheckCircle2,
  Building,
  HeartHandshake,
  MapPin,
  Mail,
  Clock,
  Car,
  ExternalLink,
  MessageCircle,
  Calendar,
  Users,
  Shield,
  LifeBuoy,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPlanner?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Trimbakeshwar Joytirling Darshan',
    travelDate: '',
    pilgrimsCount: '2 to 4 Persons',
    message: '',
  });

  const partnerWhatsAppNumber = '919822012345'; // Official Mahakumbh Tours & Travels WhatsApp

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format WhatsApp message text cleanly with devotee information
    const textLines = [
      '🙏 *Namaste Mahakumbh Tours & Travels Nashik / Pilgrim Support Desk*',
      '',
      `*Devotee Name:* ${formData.name}`,
      `*Mobile Phone:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Service / Yatra:* ${formData.service}`,
      formData.travelDate ? `*Travel Date:* ${formData.travelDate}` : null,
      `*Pilgrims Count:* ${formData.pilgrimsCount}`,
      formData.message ? `*Special Request:* ${formData.message}` : null,
      '',
      'Please assist me with booking / travel guidance for Simhastha Kumbh Mela.',
    ]
      .filter(Boolean)
      .join('\n');

    const encoded = encodeURIComponent(textLines);
    const targetUrl = `https://wa.me/${partnerWhatsAppNumber}?text=${encoded}`;
    setWhatsappUrl(targetUrl);
    setFormSubmitted(true);

    // Open WhatsApp directly
    window.open(targetUrl, '_blank');
  };

  // Top & Bottom Helpline Committee Members
  const topHelplineMembers = [
    {
      role: 'Police Emergency Control',
      number: '112',
      incharge: 'Central Police Commissionerate',
      badge: '24/7 Immediate Dispatch',
      color: '#800000',
    },
    {
      role: 'Ambulance Trauma Response',
      number: '108',
      incharge: 'District Civil Hospital Health Cell',
      badge: 'Medical Emergency',
      color: '#FF6B00',
    },
    {
      role: 'Kumbh Pilgrim Helpline',
      number: '1800-233-1982',
      incharge: 'Nashik Municipal Corporation (NMC)',
      badge: 'Toll-Free Info',
      color: '#0D7377',
    },
    {
      role: 'Women & Senior Safety',
      number: '1090',
      incharge: 'Damini Squad & Elder Assistance',
      badge: 'Dedicated Cell',
      color: '#D97706',
    },
  ];

  // const zonalHelplineMembers = [
  //   {
  //     zone: 'Ramkund & Godavari Ghats',
  //     incharge: 'Inspector S. K. Deshmukh',
  //     phone: '0253-2575100',
  //     timing: '24 Hours Active',
  //     services: 'Ghat crowd regulation, lost person tracing, life-jacket coordination',
  //   },
  //   {
  //     zone: 'Trimbakeshwar Jyotirlinga Sanctum',
  //     incharge: 'Officer R. B. Patil',
  //     phone: '0253-294233',
  //     timing: '24 Hours Active',
  //     services: 'Temple queue management, Kushavarta Kund safety, senior citizen queue',
  //   },
  //   {
  //     zone: 'Nashik Road Railway Station Hub',
  //     incharge: 'Chief Station Superintendent',
  //     phone: '0253-2465160',
  //     timing: 'Platform 1 Helpdesk',
  //     services: 'Special pilgrim trains, luggage cloak rooms, city shuttle tokens',
  //   },
  //   {
  //     zone: 'Tapovan & Sadhugram Akhada Camps',
  //     incharge: 'Mela Officer V. M. Jadhav',
  //     phone: '0253-2512345',
  //     timing: '24 Hours Active',
  //     services: 'Sadhugram tent allotments, free Anna Chhatra water & sanitation',
  //   },
  // ];

  return (
    <div className="bg-[#FAF5EE] min-h-screen">
      {/* Top Breadcrumb & Hero Banner */}
      <section className="bg-gradient-to-r from-[#140E0A] via-[#2A160A] to-[#140E0A] text-white py-14 border-b-4 border-[#FF6B00] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F59E0B] uppercase tracking-wider mb-3">
            <button onClick={() => onNavigate('/')} className="hover:underline cursor-pointer">
              Home
            </button>
            <span>/</span>
            <span>Contact &amp; Helplines</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
            Contact Office &amp; Pilgrim Helplines
          </h1>
          <p className="max-w-2xl text-xs sm:text-sm text-stone-300 leading-relaxed">
            Reach our pilgrimage travel desk, send instant inquiries on WhatsApp, or connect directly with 24/7 verified Kumbh Mela emergency teams.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        

        {/* MAIN SECTION: LEFT OFFICE ADDRESS & DETAILS, RIGHT CONTACT FORM FILLED ON WHATSAPP */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT SIDE: OFFICE ADDRESS, CONTACT DETAILS, EMAIL ID, SOCIAL MEDIA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#E7D6C2] shadow-lg space-y-6">
              <div className="border-b border-stone-100 pb-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] uppercase mb-1">
                  <Building className="w-4 h-4 text-[#FF6B00]" />
                  <span>SIMHASTHA KUMBH MELA NASHIK TOUR AND TRAVELS DESK</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#1F1914]">
                  Mahakumbh Tours &amp; Travels Nashik
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  Associated with <strong>Meera Tours and Travels Nashik Simhastha Kumbh Mela</strong> · 12 Years of Devotional Travel Experience
                </p>
              </div>

              {/* Office Address */}
              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-bold mb-0.5">
                      Main Office Address:
                    </strong>
                    <a
                      href="https://maps.app.goo.gl/jmXZeK4ETp27DPaq9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      <p className="text-stone-600 leading-relaxed text-xs">
                        Office Shop No 11, NYSA Business Centre, Makhmalabad Rd, Ghadge Nagar, Nashik, Maharashtra 422003
                      </p>
                    </a>
  
                  </div>
                </div>

                {/* Contact Numbers */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF1F2] text-[#800000] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#800000]" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-bold mb-0.5">
                      Mahakumbh Tours and Travels Nashik Contact Number:
                    </strong>
                    <div className="space-y-0.5 text-xs">
                      <a href="tel:7507778088" className="text-blue-600 hover:text-blue-800 underline">
                        <p className="font-semibold text-[#800000]">
                          7507778088
                        </p>
                      </a>
                      
                    </div>
                  </div>
                </div>

                {/* Email ID */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-bold mb-0.5">
                      Official Email IDs:
                    </strong>
                    <div className="space-y-0.5 text-xs">
                      <a href="mailto:kumbhtourstravels@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                        kumbhtourstravels@gmail.com
                      </a> <br></br>
                      <a href="mailto:mahakumbhtourstravels@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                        mahakumbhtourstravels@gmail.com
                      </a>
              
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <strong className="block text-stone-900 font-bold mb-0.5">
                      Office Working Hours:
                    </strong>
                    <p className="text-stone-600 text-xs">
                      Monday to Sunday: 6:00 AM – 11:30 PM (24/7 Telephone &amp; Cab Dispatch)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Integration */}
              <div className="pt-4 border-t border-stone-100">
                <span className="block text-xs font-bold text-stone-600 uppercase tracking-wider mb-3">
                  Connect on Social Media:
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.facebook.com/people/Mahakumbh-Tours-Travels/61585265510417/?ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-all cursor-pointer shadow-xs"
                    title="Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/mahakumbh_tours_travels/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:opacity-90 transition-all cursor-pointer shadow-xs"
                    title="Instagram"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@mahakumbhtourstravels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-all cursor-pointer shadow-xs"
                    title="YouTube"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.threads.com/@mahakumbh_tours_travels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center hover:opacity-90 transition-all cursor-pointer shadow-xs font-bold text-sm"
                    title="X"
                  >
                    𝕏
                  </a>
                  <a
                    href={`https://wa.me/${partnerWhatsAppNumber}?text=Namaste%20Mahakumbh%20Tours%20and%20Travels!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-all cursor-pointer shadow-xs"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>

              {/* Direct Partner Web link */}
              <div className="pt-2">
                <a
                  href="https://mahakumbhtourstravelsnashik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B00] hover:text-[#D84D00] hover:underline"
                >
                  <span>Visit mahakumbhtourstravelsnashik.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: CONTACT FORM (SUBMITTED INFORMATION SENT TO WHATSAPP) */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border-2 border-[#FF6B00]/40 shadow-xl space-y-5">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] uppercase">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>DIRECT WHATSAPP INQUIRY &amp; BOOKING</span>
              </div>
              <h3 className="text-2xl font-extrabold text-stone-900">
                Book Yatra Cab / Inquire on WhatsApp
              </h3>
              <p className="text-xs text-stone-600">
                Fill the form below and click submit to send your travel inquiry directly to our WhatsApp booking desk.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-emerald-950">
                    Form Information Sent to WhatsApp!
                  </h4>
                  <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your query for <strong>{formData.service}</strong> has been generated for WhatsApp. If WhatsApp did not open automatically, click the button below.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-stone-700 underline cursor-pointer py-2"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Name */}
                <div>
                  <label className="font-bold text-stone-800 block mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#FF6B00] bg-[#FAF5EE]"
                  />
                </div>

                {/* Mobile & Email in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="font-bold text-stone-800 block mb-1">
                      WhatsApp Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#FF6B00] bg-[#FAF5EE]"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-800 block mb-1">
                      Email ID (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#FF6B00] bg-[#FAF5EE]"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="font-bold text-stone-800 block mb-1">
                    Select Darshan / Travel Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#FF6B00] bg-[#FAF5EE] font-medium"
                  >
                    <option value="Trimbakeshwar Joytirling Darshan">
                      Trimbakeshwar Joytirling Darshan (Car Rental)
                    </option>
                    <option value="Nashik Darshan & Panchavti Tapovan">
                      Nashik Darshan &amp; Panchavti Tapovan
                    </option>
                    <option value="Shirdi Shani Shingnpur Darshan">
                      Shirdi Shani Shingnpur Darshan
                    </option>
                    <option value="Grishneshwar Joytirling darshan">
                      Grishneshwar Joytirling darshan
                    </option>
                    <option value="Simhastha Kumbh Mela tour package booking">
                      Simhastha Kumbh Mela tour package booking (2027)
                    </option>
                    <option value="Nashik Simhastha Kumbh Mela accommodation booking">
                      Nashik Simhastha Kumbh Mela accommodation booking
                    </option>
                    <option value="Simhastha Kumbh Mela 2027 Nashik car rental">
                      Simhastha Kumbh Mela 2027 Nashik car rental
                    </option>
                    <option value="Mumbai to Nashik Simhastha taxi service">
                      Mumbai to Nashik Simhastha taxi service
                    </option>
                    <option value="Pune to Nashik Simhastha travel package">
                      Pune to Nashik Simhastha travel package
                    </option>
                    <option value="Simhastha Kumbh Mela Nashik VIP darshan package">
                      Simhastha Kumbh Mela Nashik VIP darshan package
                    </option>
                    <option value="General Pilgrim Travel Inquiry">
                      General Pilgrim Inquiry / Custom Package
                    </option>
                  </select>
                </div>

                {/* Date & Pilgrims Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="font-bold text-stone-800 block mb-1">
                      Preferred Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#FF6B00] bg-[#FAF5EE]"
                    />
                  </div>

                  <div>
                    <label className="font-bold text-stone-800 block mb-1">
                      Number of Pilgrims
                    </label>
                    <select
                      value={formData.pilgrimsCount}
                      onChange={(e) => setFormData({ ...formData, pilgrimsCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#FF6B00] bg-[#FAF5EE]"
                    >
                      <option value="1 Solo Pilgrim">1 Solo Pilgrim</option>
                      <option value="2 to 4 Persons (Sedan)">2 to 4 Persons (Sedan Cab)</option>
                      <option value="5 to 7 Persons (SUV / Ertiga / Innova)">
                        5 to 7 Persons (Innova / Ertiga SUV)
                      </option>
                      <option value="8 to 17 Persons (Tempo Traveller)">
                        8 to 17 Persons (Tempo Traveller)
                      </option>
                      <option value="Large Yatra Group (Bus)">Large Yatra Sangha / Bus</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-bold text-stone-800 block mb-1">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Senior citizens in family, need early morning pickup at Nashik Road railway station..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:border-[#FF6B00] bg-[#FAF5EE]"
                  />
                </div>

                {/* Submit button directly launching WhatsApp */}
                <button
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-emerald-400"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>

                <p className="text-[11px] text-stone-500 text-center">
                  Clicking will open WhatsApp with your prefilled details for instant assistance.
                </p>
              </form>
            )}
          </div>
        </section>
        
        {/* TOP HELPLINE MEMBERS MATRIX */}
        <section className="space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#FF6B00]" />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                Top Emergency &amp; Helpline Members
              </h2>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ● All Lines 24/7 Active
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topHelplineMembers.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-stone-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                      {item.badge}
                    </span>
                    <Phone className="w-4 h-4 text-[#FF6B00]" />
                  </div>
                  <h3 className="font-bold text-sm text-stone-900 mb-1">{item.role}</h3>
                  <div className="text-2xl font-extrabold text-[#800000] tracking-tight mb-1">
                    {item.number}
                  </div>
                  <div className="text-xs text-stone-500">{item.incharge}</div>
                </div>

                <div className="pt-3 border-t border-stone-100 mt-3 text-[11px] text-stone-400">
                  Immediate emergency response
                </div>
              </div>
            ))}
          </div>
        </section>       
      </div>
    </div>
  );
};
