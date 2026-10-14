/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';

// 6 Core Clean Pages
import { HomePage } from './pages/HomePage';
import { AboutKumbhPage } from './pages/AboutKumbhPage';
import { SacredPlacesPage } from './pages/SacredPlacesPage';
import { ShahiSnanDatesPage } from './pages/ShahiSnanDatesPage';
import { PilgrimGuidePage } from './pages/PilgrimGuidePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const normalizeRoute = (path: string): PageRoute => {
    switch (path) {
      case '/':
        return '/';
      case '/about':
      case '/about-kumbh':
      case '/history':
        return '/about';
      case '/sacred-places':
      case '/sacred-ghats':
      case '/trimbakeshwar-temple':
      case '/panchavati':
      case '/places-to-visit':
        return '/sacred-places';
      case '/shahi-snan-dates':
      case '/important-dates':
      case '/snan-guide':
      case '/calendar':
        return '/shahi-snan-dates';
      case '/pilgrim-guide':
      case '/how-to-reach':
      case '/local-transport':
      case '/stay':
      case '/food-and-culture':
      case '/safety':
        return '/pilgrim-guide';
      case '/contact':
      case '/faq':
      case '/updates':
        return '/contact';
      default:
        return '/';
    }
  };

  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    return normalizeRoute(window.location.pathname);
  });

  // Sync browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(normalizeRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (currentRoute) {
      case '/':
        return <HomePage onNavigate={handleNavigate} />;
      case '/about':
        return <AboutKumbhPage onNavigate={handleNavigate} onOpenPlanner={() => {}} />;
      case '/sacred-places':
        return <SacredPlacesPage onNavigate={handleNavigate} onOpenPlanner={() => {}} />;
      case '/shahi-snan-dates':
        return <ShahiSnanDatesPage onNavigate={handleNavigate} onOpenPlanner={() => {}} />;
      case '/pilgrim-guide':
        return <PilgrimGuidePage onNavigate={handleNavigate} onOpenPlanner={() => {}} />;
      case '/contact':
        return <ContactPage onNavigate={handleNavigate} onOpenPlanner={() => {}} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EE] text-[#1F1914] font-sans antialiased selection:bg-[#FF6B00]/20 selection:text-[#800000]">
      {/* Devotional Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Page Area */}
      <main className="flex-1">{renderActivePage()}</main>

      {/* Regular Website Authority Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Sticky Floating WhatsApp Button in Bottom Corner */}
      <StickyWhatsApp />
    </div>
  );
}
