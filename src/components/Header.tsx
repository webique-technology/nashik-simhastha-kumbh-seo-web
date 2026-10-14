import React, { useState } from 'react';
import { PageRoute } from '../types';
import logo from '../img/logo.png';
import {
  Menu,
  X,
  Phone,
  Clock,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenPlanner?: () => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
  };

  // Short, clear English navigation labels as requested
  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Holy Places', route: '/sacred-places' },
    { label: 'Shahi Snan', route: '/shahi-snan-dates' },
    { label: 'Guide', route: '/pilgrim-guide' },
    { label: 'Contact', route: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white">
      {/* Top Auspicious Bar (Regular Website Top Bar with Social Icons) */}
      <div className="bg-[#140E0A] text-[#FAF5EE] text-xs py-2 px-4 border-b border-[#2B1B12]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3  px-4 sm:px-6 lg:px-8">
          {/* Sacred Event Greeting & Timings */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:flex items-center gap-1.5 text-stone-300 text-[11px]">
              <Clock className="w-3 h-3 text-[#F59E0B]" />
              <span>Daily Godavari Aarti: 07:00 PM · Trimbakeshwar Darshan: 05:30 AM – 09:00 PM</span>
            </span>
          </div>

          {/* Top Right Corner: Emergency Helpline + Social Media Integration Icons */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto sm:ml-0">
            {/* Quick Helplines */}
            <div className="hidden sm:flex items-center gap-2 text-stone-300 text-[11px] pr-3 border-r border-[#2B1B12]">
              <Phone className="w-3 h-3 text-[#FF6B00]" />
              <span>Helpline: <strong className="text-white">112</strong></span>
              <span className="text-stone-600">|</span>
              <span>Ambulance: <strong className="text-white">108</strong></span>
            </div>

            {/* Social Media Integration Icons in Top Right Corner */}
            <div className="flex items-center gap-2 text-stone-300">
              <span className="text-[10px] text-stone-400 font-medium hidden md:inline">Connect:</span>
              
              {/* Facebook */}
              <a
                href="https://www.facebook.com/people/Mahakumbh-Tours-Travels/61585265510417/?ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Simhastha Kumbh on Facebook"
                className="w-6 h-6 rounded-full bg-[#241710] hover:bg-[#1877F2] text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#3E291E]"
                aria-label="Facebook"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/mahakumbh_tours_travels/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                className="w-6 h-6 rounded-full bg-[#241710] hover:bg-[#E1306C] text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#3E291E]"
                aria-label="Instagram"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@mahakumbhtourstravels"
                target="_blank"
                rel="noopener noreferrer"
                title="Watch Aarti & Rituals on YouTube"
                className="w-6 h-6 rounded-full bg-[#241710] hover:bg-[#FF0000] text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#3E291E]"
                aria-label="YouTube"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://www.threads.com/@mahakumbh_tours_travels"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow updates on X"
                className="w-6 h-6 rounded-full bg-[#241710] hover:bg-black text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-[#3E291E]"
                aria-label="X"
              >
                <span className="font-bold text-[10px]">𝕏</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar (Regular Website Look & Feel) */}
      <div className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo: in logo simhasth and bottom small font size kumbh mela nashik */}
            <button
              onClick={() => handleNavClick('/')}
              className="flex"
              aria-label="Simhastha Kumbh Mela Nashik Home"
            >
              {/* Sacred Amrit Kalash Emblem */}
              <img
                src={logo}
                alt="Simhastha Kumbh Mela Nashik Logo"
                className="w-[180px] h-auto"
              ></img>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      active
                        ? 'text-[#FF6B00] bg-[#FFF7ED] shadow-xs'
                        : 'text-stone-700 hover:text-[#FF6B00] hover:bg-stone-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action: Call button ONLY ICON (removed search and book/planner btn) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:7507778088"
                title="Pilgrim & Emergency Helpline: Call 112"
                aria-label="Call Pilgrim Helpline 112"
                className="w-11 h-11 rounded-full bg-[#FF6B00] hover:bg-[#E56000] text-white flex items-center justify-center shadow-md shadow-[#FF6B00]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#FDE68A]/40"
              >
                <Phone className="w-5 h-5 animate-pulse" />
              </a>
            </div>

            {/* Mobile Header Controls: Call Icon Button & Hamburger Menu */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Call button ONLY ICON */}
              <a
                href="tel:7507778088"
                title="Call 112"
                aria-label="Call Helpline"
                className="w-10 h-10 rounded-full bg-[#FF6B00] text-white flex items-center justify-center shadow-xs cursor-pointer"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open Navigation Menu"
                className="p-2 text-stone-700 hover:text-[#FF6B00] rounded-xl hover:bg-stone-100 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const active = currentRoute === link.route;
                return (
                  <button
                    key={link.route}
                    onClick={() => handleNavClick(link.route)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-sm transition-colors cursor-pointer ${
                      active
                        ? 'bg-[#FFF7ED] text-[#FF6B00]'
                        : 'text-stone-800 hover:bg-stone-50'
                    }`}
                  >
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between px-2 text-xs text-stone-600">
              <span className="flex items-center gap-1.5 font-medium">
                <Phone className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Helpline: <strong className="text-stone-900">112</strong></span>
              </span>
              <span>Ambulance: <strong className="text-stone-900">108</strong></span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
