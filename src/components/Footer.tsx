import React from "react";
import { PageRoute } from "../types";
import footerlogo from "../img/footer-logo.png";
import {
  Phone,
  ShieldCheck,
  Car,
  ExternalLink,
  MapPin,
  Mail,
  Sparkles,
} from "lucide-react";

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPlanner?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#140E0A] text-[#FAF5EE] pt-12 pb-8 border-t-4 border-[#FF6B00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Standard Informational Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
          {/* Col 1: Logo & Mission */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate("/")}
              className="flex items-center gap-3 group cursor-pointer text-left focus:outline-hidden"
              aria-label="Simhastha Kumbh Mela Nashik"
            >
              <img
                src={footerlogo}
                alt="Simhastha Kumbh Mela Nashik Logo"
                className="w-[180px] h-auto"
              ></img>
            </button>

            <p className="text-xs text-stone-300 leading-relaxed">
              Verified informational portal dedicated to pilgrims and visitors
              travelling to the sacred twin holy centres of Nashik and
              Trimbakeshwar on the revered banks of River Godavari.
            </p>

            {/* Social Media Integration */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-2">
                Follow Official Updates:
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/people/Mahakumbh-Tours-Travels/61585265510417/?ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="w-8 h-8 rounded-lg bg-[#1F1510] hover:bg-[#1877F2] text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#3E291E]"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/mahakumbh_tours_travels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-8 h-8 rounded-lg bg-[#1F1510] hover:bg-[#E1306C] text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#3E291E]"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@mahakumbhtourstravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  className="w-8 h-8 rounded-lg bg-[#1F1510] hover:bg-[#FF0000] text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#3E291E]"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.threads.com/@mahakumbh_tours_travels"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="X (Twitter)"
                  className="w-8 h-8 rounded-lg bg-[#1F1510] hover:bg-black text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#3E291E]"
                  aria-label="X"
                >
                  <span className="font-bold text-xs">𝕏</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#F59E0B] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate("/")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/about")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  About Kumbh Mela
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/sacred-places")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  Holy Places &amp; Temples
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/shahi-snan-dates")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  Shahi Snan Dates
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/pilgrim-guide")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  Pilgrim &amp; Travel Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/contact")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Emergency Helplines
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Holy Shrines */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#F59E0B] uppercase tracking-wider">
              Holy Shrines
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button
                  onClick={() => onNavigate("/sacred-places")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  <strong className="text-white">Ramkund Ghat</strong> – Holy
                  Godavari Snan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/sacred-places")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  <strong className="text-white">Trimbakeshwar Temple</strong> –
                  10th Jyotirlinga
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/sacred-places")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  <strong className="text-white">Kushavarta Kund</strong> –
                  Shaiva Holy Bath
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/sacred-places")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  <strong className="text-white">
                    Panchavati &amp; Kalaram
                  </strong>{" "}
                  – Sacred Heritage
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/sacred-places")}
                  className="hover:text-[#FF6B00] transition-colors cursor-pointer text-left"
                >
                  <strong className="text-white">Brahmagiri Mountain</strong> –
                  Godavari Source
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified 24/7 Helplines */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#FF6B00]" />
              <span>24/7 Helplines</span>
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] text-[#FF6B00] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <strong className="block text-white font-bold mb-0.5">
                    Main Office Address:
                  </strong>
                  <a
                    href="https://maps.app.goo.gl/jmXZeK4ETp27DPaq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    <p className="text-[#d7d3d4] leading-relaxed text-xs">
                      Office Shop No 11, NYSA Business Centre, Makhmalabad Rd,
                      Ghadge Nagar, Nashik, Maharashtra 422003
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
                  <strong className="block text-white font-bold mb-0.5">
                    Contact Number:
                  </strong>
                  <div className="space-y-0.5 text-xs">
                    <a
                      href="tel:7507778088"
                      className="text-blue-600 hover:text-blue-800 underline"
                    >
                      <p className="font-semibold text-[#d7d3d4]">7507778088</p>
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
                  <strong className="block text-white font-bold mb-0.5">
                    Official Email IDs:
                  </strong>
                  <div className="space-y-0.5 text-xs">
                    <a
                      href="mailto:kumbhtourstravels@gmail.com"
                      className="text-[#d7d3d4] hover:text-blue-800 underline"
                    >
                      kumbhtourstravels@gmail.com
                    </a>{" "}
                    <br></br>
                    <a
                      href="mailto:mahakumbhtourstravels@gmail.com"
                      className="text-[#d7d3d4] hover:text-blue-800 underline"
                    >
                      mahakumbhtourstravels@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-white/10">
          {/* Our Travel Partners Bar */}
          <div className="pb-4">
            <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-2">
              Our Travel Partners:
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs">
              <a
                href="https://mahakumbhtourstravelsnashik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/10 hover:border-[#F59E0B]"
              >
                <span>Mahakumbh Tours &amp; Travels Nashik</span>
                <ExternalLink className="w-3 h-3 text-[#F59E0B]" />
              </a>
              <a
                href="https://nashikmumbaicabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-all border border-white/10 hover:border-[#F59E0B]"
              >
                <span>Nashik Mumbai Cabs</span>
                <ExternalLink className="w-3 h-3 text-[#F59E0B]" />
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Devotional Copyright & Travel Partner Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            <span>
              © 2027–2028 Simhastha Kumbh Mela Nashik. Travel Partners:{" "}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-stone-400">
            <ShieldCheck className="w-4 h-4 text-[#F59E0B]" />
            <span>
              Design & Developed By
              <a
                href="https://www.webique.in/"
                className="text-[#F59E0B] hover:text-[#FF6B00] font-semibold underline"
              >
                Webique Technologies
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
