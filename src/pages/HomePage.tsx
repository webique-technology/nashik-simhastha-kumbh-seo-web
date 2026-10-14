import React, { useState, useEffect } from "react";
import { PageRoute } from "../types";
import slide1 from "../img/slide1.jpg";
import slide2 from "../img/slide2.webp";
import slide3 from "../img/slide3.webp";
import imageKumbh from "../img/image-kumbh.jpg";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Sparkles,
  ShieldCheck,
  Flame,
  Droplets,
  Heart,
  Sun,
  Users,
  ChevronLeft,
  ChevronRight,
  Crown,
  Car,
  Phone,
  ExternalLink,
  Star,
  CheckCircle2,
  Compass,
  Award,
  Building,
} from "lucide-react";

import ramkundaGhat from "../img/ramkund-2.webp";
import kushavartaKund from "../img/kushavarta-kund.webp";
import trimbakeshwarTemple from "../img/triambakeshwar-tempel-2.webp";
import kalaramMandir from "../img/kalaram-tempal-2.webp";
import muktidhamTemple from "../img/sacred-destination-5.webp";
import anjaneri from "../img/anjaneri-3.jpg";

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenPlanner?: () => void;
}

interface HeroSlide {
  id: number;
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnRoute: PageRoute;
  secondaryBtnText: string;
  secondaryBtnRoute: PageRoute;
}

/* Subtle Devotional SVG Mandala Watermark (Mirroring Dharma Reference Template) */
const DevotionalMandala: React.FC<{ className?: string }> = ({
  className = "w-96 h-96 text-[#F59E0B] opacity-[0.06]",
}) => (
  <svg
    viewBox="0 0 200 200"
    className={`${className} pointer-events-none select-none`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="100"
      cy="100"
      r="95"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeDasharray="3 3"
    />
    <circle cx="100" cy="100" r="84" stroke="currentColor" strokeWidth="1" />
    <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.8" />
    <circle
      cx="100"
      cy="100"
      r="56"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="2 2"
    />
    <circle cx="100" cy="100" r="42" stroke="currentColor" strokeWidth="1" />
    <circle cx="100" cy="100" r="26" stroke="currentColor" strokeWidth="0.8" />
    <circle cx="100" cy="100" r="8" fill="currentColor" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 100 100)`}>
        <line
          x1="100"
          y1="5"
          x2="100"
          y2="92"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M 100 42 C 92 56, 92 70, 100 84 C 108 70, 108 56, 100 42 Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        <circle cx="100" cy="16" r="2.2" fill="currentColor" />
      </g>
    ))}
  </svg>
);

/* Card Miniature Mandala Watermark */
const CardMiniMandala: React.FC<{ className?: string }> = ({
  className = "w-36 h-36 text-[#F59E0B] opacity-[0.05]",
}) => (
  <svg
    viewBox="0 0 100 100"
    className={`${className} pointer-events-none select-none`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle
      cx="50"
      cy="50"
      r="46"
      stroke="currentColor"
      strokeWidth="0.75"
      strokeDasharray="2 2"
    />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.75" />
    <circle cx="50" cy="50" r="26" stroke="currentColor" strokeWidth="0.75" />
    <circle cx="50" cy="50" r="14" stroke="currentColor" strokeWidth="0.75" />
    <circle cx="50" cy="50" r="4" fill="currentColor" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <g key={angle} transform={`rotate(${angle} 50 50)`}>
        <line
          x1="50"
          y1="4"
          x2="50"
          y2="46"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        <path
          d="M 50 14 C 45 22, 45 30, 50 38 C 55 30, 55 22, 50 14 Z"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </g>
    ))}
  </svg>
);

/* Temple Corner Flourish Ornament */
const TempleCorner: React.FC<{
  position: "tl" | "tr" | "bl" | "br";
  className?: string;
}> = ({ position, className = "w-5 h-5 text-[#F59E0B]" }) => {
  const rotation = {
    tl: "",
    tr: "rotate-90",
    br: "rotate-180",
    bl: "-rotate-90",
  }[position];

  return (
    <svg
      viewBox="0 0 24 24"
      className={`${className} ${rotation} pointer-events-none select-none`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2 14V2H14" strokeLinecap="round" />
      <path d="M6 6L2 2" strokeLinecap="round" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Hero Slider State with Creative Animation
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      image: slide1,
      badge: "SACRED CELESTIAL GATHERING 2027–2028",
      title: "Nashik Simhastha Kumbh",
      subtitle:
        "Welcome to the 2027 Maha Kumbh Mela, worlds largest congregation of people! Join us in this grand spiritual gathering to experience the vibrant culture, devotion, and unity.",
      primaryBtnText: "Explore Holy Places",
      primaryBtnRoute: "/sacred-places",
      secondaryBtnText: "Shahi Snan Dates",
      secondaryBtnRoute: "/shahi-snan-dates",
    },
    {
      id: 2,
      image: slide2,
      badge: "THE ROYAL SACRED DIP",
      title: "Auspicious Shahi Snan",
      subtitle:
        "Witness the royal ceremonial bath of 13 ancient Akhadas at holy Ramkund and Kushavarta Kund.",
      primaryBtnText: "View Parvani Schedule",
      primaryBtnRoute: "/shahi-snan-dates",
      secondaryBtnText: "Pilgrim Travel Guide",
      secondaryBtnRoute: "/pilgrim-guide",
    },
    {
      id: 3,
      image: slide3,
      badge: "10TH REVERED JYOTIRLINGA",
      title: "Trimbakeshwar Temple",
      subtitle:
        "The eternal sanctuary of the three-faced Shiva lingam and source of River Godavari at Brahmagiri.",
      primaryBtnText: "Temple Darshan Guide",
      primaryBtnRoute: "/sacred-places",
      secondaryBtnText: "About Simhastha",
      secondaryBtnRoute: "/about",
    },
  ];

  // Auto-play hero slider with creative progress ticker
  useEffect(() => {
    setSlideProgress(0);
    const intervalTime = 60; // 60ms increments
    const totalDuration = 6000;
    const step = (intervalTime / totalDuration) * 100;

    const progressTimer = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % heroSlides.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(progressTimer);
  }, [currentSlide, heroSlides.length]);

  const handlePrevSlide = () => {
    setSlideProgress(0);
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setSlideProgress(0);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // Important Shahi Snan dates (Home Page: STRICTLY ONLY Date and Title)
  const importantShahiSnans = [
    {
      id: "dhwajarohan",
      title: "Kumbh Mela Begins (Flag Hoisting)",
      date: "October 31, 2026",
      isMajor: false,
    },
    {
      id: "first-shahi-snan",
      title: "Nagar Pradakshina (Nashik)",
      date: "July 29, 2027",
      isMajor: false,
    },
    {
      id: "second-shahi-snan",
      title: "First Amrit Snan",
      date: "August 2, 2027",
      isMajor: true,
    },
    {
      id: "third-shahi-snan",
      title: "Second Amrit Snan",
      date: "August 31, 2027",
      isMajor: false,
    },
    {
      id: "dhwaja-avtaran",
      title: "Third Amrit Snan (Nashik)",
      date: "September 11, 2027",
      isMajor: false,
    },
    {
      id: "dhwajarohan",
      title: "Third Amrit Snan (Trimbakeshwar)",
      date: "September 12, 2027",
      isMajor: false,
    },
    {
      id: "kumbh-ends",
      title: "Kumbh Mela Ends (Flag Lowering)",
      date: "July 24, 2028",
      isMajor: false,
    },
  ];

  // Nashik Holy Places: Image, Title, Location, and max 4-line description
  const holyPlacesCurated = [
    {
      id: "ramkund-ghat",
      title: "Ramkund Sacred Ghat",
      tag: "Primary Holy Snan Ghat",
      location: "Nashik Riverfront",
      image: ramkundaGhat,
      description:
        "The sacred bathing pool on the banks of River Godavari where Lord Rama bathed and performed ancestral rites. Believed to dissolve mortal ashes immediately in its holy current. It serves as the primary holy dip venue for Vaishnava Akhadas during Simhastha Kumbh.",
    },
    {
      id: "trimbakeshwar-temple",
      title: "Trimbakeshwar Jyotirlinga",
      tag: "10th Sacred Jyotirlinga",
      location: "Trimbakeshwar Town",
      image: trimbakeshwarTemple,
      description:
        "Historic black basalt temple enshrining the unique three-faced lingam representing Brahma, Vishnu, and Shiva. Built by Peshwa Nana Saheb at the base of sacred Brahmagiri mountain. It forms the supreme spiritual sanctuary for Shaiva sadhus during Simhastha.",
    },
    {
      id: "kushavarta-kund",
      title: "Kushavarta Holy Kund",
      tag: "Shaiva Royal Bath Centre",
      location: "Trimbakeshwar",
      image: kushavartaKund,
      description:
        "The hallowed stone water reservoir where Sage Gautama held River Godavari with sacred grass. Enclosed by sculpted stone pavilions built in 1750 by the Peshwas. It is the exclusive ceremonial bathing pond for Shaiva Akhadas during royal Shahi Snan days.",
    },
    {
      id: "kalaram-mandir",
      title: "Panchavati & Kalaram Mandir",
      tag: "Ramayana Heritage",
      location: "Panchavati, Nashik",
      image: kalaramMandir,
      description:
        "The sanctified precinct of five ancient banyan trees where Lord Rama, Sita, and Lakshmana resided during exile. Features the majestic 1782 black stone Kalaram Mandir and Sita Gufa caves. A peaceful sanctuary filled with daily Vedic recitations and river aartis.",
    },
    {
      id: "brahmagiri-mountain",
      title: "Brahmagiri & Anjaneri Hills",
      tag: "Godavari Origin & Hanuman Janmasthan",
      location: "Sahyadri Range",
      image: anjaneri,
      description:
        "The majestic Sahyadri mountain from which River Godavari emerges onto earth at Gangadwar. The neighboring Anjaneri hill is revered across India as the birthplace of Lord Hanuman. Thousands of devotees undertake the holy circumambulation trek for blessings.",
    },
    {
      id: "muktidham-temple",
      title: "Muktidham Marble Temple",
      tag: "Pure Makrana Marble",
      location: "Nashik Road",
      image: muktidhamTemple,
      description:
        "A resplendent Hindu temple complex built entirely from pure white Makrana marble from Rajasthan. It houses authentic replicas of all twelve sacred Jyotirlinga shrines across India. The entire eighteen chapters of the holy Bhagavad Gita are carved along its walls.",
    },
  ];

  return (
    <div className="bg-[#FAF5EE]">
      {/* 1. HERO SLIDER SECTION (Creative Animation Effect, High Visual Impact) */}
      <section className="relative h-[540px] sm:h-[600px] lg:h-[660px] bg-[#140E0A] text-white overflow-hidden group">
        {/* Slides Images with Ken Burns Zoom & Subtle Pan Animation */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center ${
                idx === currentSlide
                  ? "animate-kenburns scale-105"
                  : "scale-100"
              }`}
            />
            {/* Cinematic Multilayer Vignette & Temple Night Hue */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A]" />
            <div className="absolute inset-0 bg-radial from-transparent via-[#140E0A]/35 to-[#140E0A]" />
          </div>
        ))}

        {/* Slide Content Box with Animated Entrance */}
        <div className="relative z-20 max-w-4xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
          <div
            key={currentSlide}
            className="animate-slide-up flex flex-col items-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F59E0B]/50 text-[#FDE68A] text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-4 shadow-xl">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B] animate-spin" />
              <span>{heroSlides[currentSlide].badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 leading-tight drop-shadow-lg">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-sm sm:text-base text-stone-200 mb-8 font-normal leading-relaxed drop-shadow-md">
              {heroSlides[currentSlide].subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() =>
                  onNavigate(heroSlides[currentSlide].primaryBtnRoute)
                }
                className="gradient-saffron-gold text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-xl shadow-[#FF6B00]/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-[#FDE68A]/40"
              >
                <Flame className="w-4 h-4 fill-white" />
                <span>{heroSlides[currentSlide].primaryBtnText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() =>
                  onNavigate(heroSlides[currentSlide].secondaryBtnRoute)
                }
                className="bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/30 font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#F59E0B]" />
                <span>{heroSlides[currentSlide].secondaryBtnText}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Animated Progress Bar along the bottom of the slider */}
        <div className="absolute z-30 bottom-0 left-0 right-0 h-1 bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-[#FF6B00] to-[#F59E0B] transition-all duration-75 ease-linear"
            style={{ width: `${slideProgress}%` }}
          />
        </div>

        {/* Slider Controls: Arrows & Indicators */}
        <div className="absolute z-30 bottom-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Slide Indicator Count */}
          <div className="text-xs font-mono font-bold text-[#FDE68A] bg-black/50 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-[#F59E0B]/30 flex items-center gap-1.5">
            <span>0{currentSlide + 1}</span>
            <span className="text-stone-400">/</span>
            <span className="text-stone-400">0{heroSlides.length}</span>
          </div>

          {/* Dots with Active Glow */}
          <div className="flex items-center gap-2.5">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSlideProgress(0);
                  setCurrentSlide(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === currentSlide
                    ? "w-9 bg-[#FF6B00] shadow-md shadow-[#FF6B00]/60 ring-2 ring-[#F59E0B]/40"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Left / Right Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-[#FF6B00] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextSlide}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-[#FF6B00] text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. WELCOME SECTION (Tab section removed - Single Pure Devotional Image Frame + Editorial Narrative) */}
      <section className="relative py-20 sm:py-24 bg-[#FAF5EE] overflow-hidden">
        {/* Subtle Devotional Background Mandalas */}
        <div className="absolute -top-24 -left-24 pointer-events-none">
          <DevotionalMandala className="w-[420px] h-[420px] text-[#D97706] opacity-[0.05]" />
        </div>
        <div className="absolute -bottom-28 -right-28 pointer-events-none">
          <DevotionalMandala className="w-[460px] h-[460px] text-[#800000] opacity-[0.04]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Editorial Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1914] tracking-tight leading-tight mb-3">
              Welcome to Nashik Simhastha Kumbh Mela
            </h2>

            {/* Temple Style Ornate Divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-px w-14 sm:w-24 bg-gradient-to-r from-transparent to-[#F59E0B]" />
              <span className="text-sm text-[#FF6B00] font-serif">✧ ॐ ✧</span>
              <span className="h-px w-14 sm:w-24 bg-gradient-to-l from-transparent to-[#F59E0B]" />
            </div>
          </div>

          {/* Spacious Editorial Two-Column Layout (Pure High-Impact Single Devotional Image) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            {/* Left Column: Authentic Kumbh Mela High-Resolution Photograph in Gilded Temple Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#E7D6C2] bg-stone-900 group aspect-4/3">
                <img
                  src={imageKumbh}
                  alt="Maha Godavari Aarti at Ramkund Nashik"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Decorative Temple Corner Accents */}
                <TempleCorner
                  position="tl"
                  className="absolute top-3.5 left-3.5 w-6 h-6 text-[#F59E0B]"
                />
                <TempleCorner
                  position="tr"
                  className="absolute top-3.5 right-3.5 w-6 h-6 text-[#F59E0B]"
                />
                <TempleCorner
                  position="bl"
                  className="absolute bottom-3.5 left-3.5 w-6 h-6 text-[#F59E0B]"
                />
                <TempleCorner
                  position="br"
                  className="absolute bottom-3.5 right-3.5 w-6 h-6 text-[#F59E0B]"
                />
              </div>
            </div>

            {/* Right Column: Editorial Narrative & Devotional Guidance */}
            <div className="lg:col-span-6 space-y-6">
              {/* Storytelling Text */}
              <div className="space-y-3 text-stone-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Welcome to{" "}
                  <span className="font-semibold text-[#800000]">
                    SimhasthaKumbhMela.org
                  </span>
                  , your trusted official travel and accommodation partner for
                  the world's largest spiritual gathering. Held once every 12
                  years along the sacred banks of the{" "}
                  <span className="font-semibold text-[#800000]">
                    Godavari River
                  </span>{" "}
                  and the holy{" "}
                  <span className="font-semibold text-[#800000]">
                    Kushavarta Kund
                  </span>
                  , the divine Nashik Simhastha Kumbh Mela returns to
                  Maharashtra from October 31, 2026, to July 24, 2028, with core
                  auspicious events peak-loading in 2027.
                </p>
                <p>
                  As millions of pilgrims and tourists converge upon the sacred
                  soil of Panchavati and Trimbakeshwar, our official partner
                  network—comprising{" "}
                  <span className="font-semibold text-[#800000]">
                    Mahakumbh Tours and Travels
                  </span>
                  ,{" "}
                  <span className="font-semibold text-[#800000]">
                    Meera Tours and Travels
                  </span>
                  , and{" "}
                  <span className="font-semibold text-[#800000]">
                    NashikMumbaiCabs
                  </span>
                  —is dedicated to making your spiritual journey seamless, safe,
                  and deeply enriching.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate("/about")}
                  className="gradient-saffron-gold text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer border border-[#FDE68A]/30"
                >
                  <span>About 4 Sacred Kumbh Places</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate("/sacred-places")}
                  className="bg-white hover:bg-stone-50 text-[#1F1914] font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all cursor-pointer border border-[#D5C2AD] shadow-xs flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#FF6B00]" />
                  <span>Explore Holy Places</span>
                </button>
              </div>
            </div>
          </div>

          {/* Key Figures Strip */}
          <div className="mt-8 pt-10 border-t border-[#E7D6C2] relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              <div className="bg-white p-5 rounded-2xl border border-[#E7D6C2] text-center hover:border-[#FF6B00] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] text-[#FF6B00] flex items-center justify-center mx-auto mb-2">
                  <Sun className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#1F1914]">
                  12 Years
                </div>
                <div className="text-[11px] font-bold text-[#FF6B00] uppercase mt-0.5">
                  Celestial Cycle
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  Jupiter in Leo
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E7D6C2] text-center hover:border-[#800000] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FFF1F2] text-[#800000] flex items-center justify-center mx-auto mb-2">
                  <Crown className="w-5 h-5 text-[#800000]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#800000]">
                  3 Dips
                </div>
                <div className="text-[11px] font-bold text-[#800000] uppercase mt-0.5">
                  Shahi Snans
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  Royal Parvani Days
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E7D6C2] text-center hover:border-[#D97706] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 text-[#D97706]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#D97706]">
                  13 Akhadas
                </div>
                <div className="text-[11px] font-bold text-[#D97706] uppercase mt-0.5">
                  Monastic Orders
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  Shaiva &amp; Vaishnava
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E7D6C2] text-center hover:border-[#0D7377] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] text-[#0D7377] flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-5 h-5 text-[#0D7377]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D7377]">
                  2 Cities
                </div>
                <div className="text-[11px] font-bold text-[#0D7377] uppercase mt-0.5">
                  Twin Centres
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  Nashik &amp; Trimbak
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E7D6C2] text-center hover:border-[#7C3AED] transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-5 h-5 text-[#7C3AED]" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#7C3AED]">
                  10M+
                </div>
                <div className="text-[11px] font-bold text-[#7C3AED] uppercase mt-0.5">
                  Devotees
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  Expected Pilgrims
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-[#E7D6C2] text-center hover:border-emerald-600 transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">
                  24/7
                </div>
                <div className="text-[11px] font-bold text-emerald-700 uppercase mt-0.5">
                  Helplines
                </div>
                <p className="text-[10px] text-stone-500 mt-0.5">
                  Emergency 112 &amp; 108
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHAHI SNAN DATES: Clean Editorial Grid of Cards (STRICTLY Date & Event Title Only) */}
      <section className="relative py-20 sm:py-24 bg-[#140E0A] text-white overflow-hidden">
        {/* Subtle Devotional Background Mandalas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <DevotionalMandala className="w-[850px] h-[850px] text-[#F59E0B] opacity-[0.04]" />
        </div>
        <div className="absolute -top-32 -right-32 pointer-events-none">
          <DevotionalMandala className="w-[450px] h-[450px] text-[#F59E0B] opacity-[0.05]" />
        </div>
        <div className="absolute -bottom-32 -left-32 pointer-events-none">
          <DevotionalMandala className="w-[450px] h-[450px] text-[#FF6B00] opacity-[0.04]" />
        </div>

        <div className="px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-[#F59E0B]/30 text-[#FDE68A] text-[11px] sm:text-xs font-bold tracking-widest uppercase mb-3">
              <span className="font-devanagari text-xs text-[#F59E0B]">
                ॥ शुभ मुहूर्त एवं पर्व ॥
              </span>
              <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
              <span>SACRED PARVANI CALENDAR · 2027–2028</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Important Shahi Snan Dates
            </h2>

            {/* Temple Style Ornate Divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-px w-14 sm:w-24 bg-gradient-to-r from-transparent to-[#F59E0B]" />
              <span className="text-sm text-[#F59E0B] font-serif">✧ 🪔 ✧</span>
              <span className="h-px w-14 sm:w-24 bg-gradient-to-l from-transparent to-[#F59E0B]" />
            </div>
          </div>

          {/* CLEAN EDITORIAL GRID OF CARDS: Strictly DATE and EVENT TITLE ONLY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {importantShahiSnans.map((snan,i) => (
              <div
                key={i}
                onClick={() => onNavigate("/shahi-snan-dates")}
                className={`group relative rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 cursor-pointer overflow-hidden ${
                  snan.isMajor
                    ? "bg-gradient-to-b from-[#241710] to-[#1A1009] border-[#FF6B00] shadow-xl shadow-[#FF6B00]/20 ring-1 ring-[#FF6B00]/60"
                    : "bg-[#1C130D] border-[#382417] hover:border-[#F59E0B]/80 shadow-lg hover:shadow-amber-500/10"
                }`}
              >
                {/* Subtle Devotional Background Pattern Watermark in Card */}
                <div className="absolute -bottom-8 -right-8 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  <CardMiniMandala className="w-36 h-36 text-[#F59E0B] opacity-[0.05] group-hover:opacity-[0.09]" />
                </div>

                {/* Subtle Corner Flourishes */}
                <TempleCorner
                  position="tl"
                  className="absolute top-2.5 left-2.5 w-4 h-4 text-[#F59E0B]/40 group-hover:text-[#F59E0B] transition-colors"
                />
                <TempleCorner
                  position="tr"
                  className="absolute top-2.5 right-2.5 w-4 h-4 text-[#F59E0B]/40 group-hover:text-[#F59E0B] transition-colors"
                />

                <div className="pt-2">
                  {/* 1. DATE (Calendar Icon + Formatted Auspicious Date) */}
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#F59E0B] mb-4">
                    <Calendar className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span className="tracking-wide">{snan.date}</span>
                  </div>

                  {/* 2. EVENT TITLE (Sophisticated Editorial Font) */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug group-hover:text-[#FDE68A] transition-colors">
                    {snan.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Full Schedule Link */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("/shahi-snan-dates")}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#F59E0B] hover:text-white transition-all cursor-pointer border border-[#3E291E] bg-[#221610] px-7 py-3.5 rounded-full hover:bg-[#2F1F17] hover:border-[#F59E0B]/50 shadow-md"
            >
              <span>
                View Complete 2027–2028 Parvani &amp; Ghat Allocation Schedule
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. ONE PLATFORM. EVERY SACRED JOURNEY - SERVICES SECTION (ABOVE HOLY PLACES) */}
      <section className="py-20 sm:py-24 bg-[#FAF5EE] relative overflow-hidden border-t border-[#E7D6C2]">
        {/* Subtle Devotional Background Mandalas */}
        <div className="absolute -top-24 -right-24 pointer-events-none">
          <DevotionalMandala className="w-[450px] h-[450px] text-[#F59E0B] opacity-[0.04]" />
        </div>
        <div className="absolute -bottom-24 -left-24 pointer-events-none">
          <DevotionalMandala className="w-[450px] h-[450px] text-[#FF6B00] opacity-[0.04]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF1E6] text-[#800000] border border-[#FED7AA]/60 text-xs font-bold tracking-widest uppercase mb-3 shadow-xs">
              <span className="font-devanagari text-xs text-[#FF6B00]">
                ॥ सर्व तीर्थ सेवा ॥
              </span>
              <span className="w-1 h-1 rounded-full bg-[#FF6B00]" />
              <span>Explore Our Services</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1F1914] tracking-tight leading-tight">
              Your Faith Deserves a Beautiful Journey.
            </h2>

            {/* Temple Style Ornate Divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-px w-14 sm:w-24 bg-gradient-to-r from-transparent to-[#F59E0B]" />
              <span className="text-sm text-[#FF6B00] font-serif">✧ 🪔 ✧</span>
              <span className="h-px w-14 sm:w-24 bg-gradient-to-l from-transparent to-[#F59E0B]" />
            </div>
          </div>

          {/* Explore Our Services - 6 Cards Grid */}
          <div className="mb-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {/* Service 1: Tour Packages */}
              <div className="bg-white rounded-2xl p-7 border border-[#E7D6C2] shadow-sm hover:shadow-xl hover:border-[#FF6B00] transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-[#FF6B00] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                    <Compass className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1914] group-hover:text-[#FF6B00] transition-colors mb-2">
                    Tour Packages
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Discover journeys worth remembering with curated pilgrim
                    packages, certified guides, and personalized temple darshan
                    circuits.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#FF6B00]">
                  <span>Discover Journeys</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 2: Accommodation */}
              <div className="bg-white rounded-2xl p-7 border border-[#E7D6C2] shadow-sm hover:shadow-xl hover:border-[#800000] transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF1F2] text-[#800000] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                    <Building className="w-6 h-6 text-[#800000]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1914] group-hover:text-[#800000] transition-colors mb-2">
                    Accommodation
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Find comfort along your spiritual path with pre-verified
                    hotel rooms, deluxe Swiss tents, clean ashrams, and trusted
                    dharamshalas.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#800000]">
                  <span>Find Comfort</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 3: Cab Services */}
              <div className="bg-white rounded-2xl p-7 border border-[#E7D6C2] shadow-sm hover:shadow-xl hover:border-[#D97706] transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                    <Car className="w-6 h-6 text-[#D97706]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1914] group-hover:text-[#D97706] transition-colors mb-2">
                    Cab Services
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Travel comfortably, from pickup to destination, with clean
                    AC cabs, experienced chauffeurs, and transparent car rental
                    fares.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#D97706]">
                  <span>Travel Comfortably</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 4: Char Dham Yatra */}
              <div className="bg-white rounded-2xl p-7 border border-[#E7D6C2] shadow-sm hover:shadow-xl hover:border-[#0D7377] transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F0FDFA] text-[#0D7377] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                    <Crown className="w-6 h-6 text-[#0D7377]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1914] group-hover:text-[#0D7377] transition-colors mb-2">
                    Char Dham Yatra
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Journey towards the sacred Himalayan shrines — Yamunotri,
                    Gangotri, Kedarnath, and Badrinath — with comprehensive
                    end-to-end guidance.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#0D7377]">
                  <span>Sacred Himalayan Shrines</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 5: Spiritual Yatra */}
              <div className="bg-white rounded-2xl p-7 border border-[#E7D6C2] shadow-sm hover:shadow-xl hover:border-[#7C3AED] transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                    <Sun className="w-6 h-6 text-[#7C3AED]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1914] group-hover:text-[#7C3AED] transition-colors mb-2">
                    Spiritual Yatra
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Explore India's timeless faith and traditions through the 12
                    Jyotirlingas, Panchavati, Shirdi, and holy pilgrimage
                    circuits.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#7C3AED]">
                  <span>Timeless Faith &amp; Traditions</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Service 6: Wellness & Rejuvenation */}
              <div className="bg-white rounded-2xl p-7 border border-[#E7D6C2] shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4 group-hover:scale-110 transition-transform">
                    <Droplets className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F1914] group-hover:text-emerald-700 transition-colors mb-2">
                    Wellness &amp; Rejuvenation
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Make time for peace, balance, and renewal with peaceful
                    nature retreats, Ayurvedic stays, and tranquil spiritual
                    reflection.
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Peace, Balance &amp; Renewal</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* 'Your Journey Begins Here' Banner with 3 CTAs & Partners */}
          <div className="bg-gradient-to-br from-[#1C120B] via-[#2A180F] to-[#1C120B] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border-2 border-[#F59E0B]/40 relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FDE68A] text-xs font-bold uppercase border border-[#FF6B00]/40">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>Start Your Sacred Yatra</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Your Journey Begins Here.
                </h3>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                  Tell us where you wish to go. We'll help you explore the right
                  travel options for your next spiritual journey.
                </p>

                {/* Our Travel Partners Bar */}
                <div className="pt-4 border-t border-white/10">
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

              {/* 3 CTAs: Enquire on WhatsApp | Explore Tour Packages | Book a Cab */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
                {/* 1. Enquire on WhatsApp */}
                <a
                  href="https://wa.me/919822012345?text=Namaste!%20I%20would%20like%20to%20enquire%20about%20spiritual%20tour%20packages%20and%20travel%20options."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Enquire on WhatsApp</span>
                </a>

                {/* 2. Explore Tour Packages */}
                <a
                  href="https://mahakumbhtourstravelsnashik.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-saffron-gold text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 border border-[#FDE68A]/40"
                >
                  <Compass className="w-4 h-4" />
                  <span>Explore Tour Packages</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* 3. Book a Cab */}
                <a
                  href="https://nashikmumbaicabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 border border-amber-300/30"
                >
                  <Car className="w-4 h-4" />
                  <span>Book a Cab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NASHIK HOLY PLACES SECTION (Image, Title, Max 4-line description) */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#FF6B00] uppercase mb-2">
              <MapPin className="w-4 h-4" />
              <span>SACRED SANCTUARIES · NASHIK &amp; TRIMBAK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#1F1914] tracking-tight">
              Nashik Holy Places to Visit
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Explore the sacred river ghats, ancient Jyotirlinga temple, and
              Ramayana heritage sites.
            </p>
          </div>

          <button
            onClick={() => onNavigate("/sacred-places")}
            className="text-xs font-bold text-[#FF6B00] hover:text-[#D84D00] flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <span>View All Holy Places</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Holy Places Cards: Image, Title, Max 4-line description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {holyPlacesCurated.map((place) => (
            <div
              key={place.id}
              onClick={() => onNavigate("/sacred-places")}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-xs text-[#FDE68A] text-[11px] font-bold px-2.5 py-1 rounded-full">
                    {place.location}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#FF6B00] text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md">
                    {place.tag}
                  </div>
                </div>

                {/* Content: Title & Max 4 Line Description */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1F1914] group-hover:text-[#FF6B00] transition-colors mb-2">
                    {place.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-4">
                    {place.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#FF6B00]">
                <span>Explore Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. OUR TRUSTED PARTNERS SECTION (CREATIVELY PLACED ABOVE FOOTER) */}
      <section className="relative py-20 sm:py-24 bg-gradient-to-b from-[#180E08] via-[#24140C] to-[#120A05] text-white border-t-4 border-[#FF6B00] overflow-hidden">
        {/* Subtle Devotional Background Mandalas */}
        <div className="absolute -top-32 -left-32 pointer-events-none">
          <DevotionalMandala className="w-[520px] h-[520px] text-[#F59E0B] opacity-[0.05]" />
        </div>
        <div className="absolute -bottom-32 -right-32 pointer-events-none">
          <DevotionalMandala className="w-[520px] h-[520px] text-[#FF6B00] opacity-[0.05]" />
        </div>

        {/* Ambient Warm Golden Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-72 bg-radial from-[#FF6B00]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Creative Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#F59E0B]/40 text-[#FDE68A] text-xs font-bold uppercase tracking-widest mb-3 shadow-lg">
              <span className="font-devanagari text-xs text-[#F59E0B]">
                ॥ विश्वासी यात्रा साथी ॥
              </span>
              <span className="w-1 h-1 rounded-full bg-[#F59E0B]" />
              <span>OFFICIAL DEVOTIONAL TRAVEL PARTNERS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Our Trusted Partners
            </h2>

            {/* Temple Style Ornate Divider */}
            <div className="flex items-center justify-center gap-3 my-4">
              <span className="h-px w-14 sm:w-24 bg-gradient-to-r from-transparent to-[#F59E0B]" />
              <span className="text-sm text-[#F59E0B] font-serif">✧ 🪔 ✧</span>
              <span className="h-px w-14 sm:w-24 bg-gradient-to-l from-transparent to-[#F59E0B]" />
            </div>
          </div>

          {/* Creative Dual-Partner Showcase Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Partner 1: Mahakumbh Tours & Travels */}
            <div className="relative bg-gradient-to-br from-[#20140D] to-[#2B170E] rounded-3xl p-8 sm:p-9 border-2 border-[#F59E0B]/30 hover:border-[#F59E0B] shadow-2xl transition-all duration-300 group flex flex-col justify-between overflow-hidden">
              {/* Card Mini Mandala Watermark */}
              <div className="absolute -bottom-8 -right-8 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <CardMiniMandala className="w-44 h-44 text-[#F59E0B] opacity-[0.05] group-hover:opacity-[0.09]" />
              </div>

              {/* Corner Accents */}
              <TempleCorner
                position="tl"
                className="absolute top-3 left-3 w-4 h-4 text-[#F59E0B]/50"
              />
              <TempleCorner
                position="tr"
                className="absolute top-3 right-3 w-4 h-4 text-[#F59E0B]/50"
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FDE68A] text-xs font-bold uppercase border border-[#FF6B00]/30">
                    <Award className="w-3.5 h-3.5 text-[#FF6B00]" />
                    <span>12 Years of Devotional Trust</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#F59E0B] font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
                    <span>Best Tour Operators</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#FDE68A] transition-colors">
                    Mahakumbh Tours &amp; Travels
                  </h3>
                  <p className="text-xs text-[#F59E0B] font-semibold mt-0.5 uppercase tracking-wide">
                    Car Rental Company in Nashik, Maharashtra · Mahakumbh travel
                    agency Nashik Simhastha
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                  Experience the divine with{" "}
                  <strong>Mahakumbh Tours &amp; Travels Nashik</strong>, your
                  trusted car rental company in Nashik, Maharashtra. With{" "}
                  <strong>12 years of expertise</strong>, we specialize in{" "}
                  <strong>Trimbakeshwar Joytirling Darshan</strong>,{" "}
                  <strong>Nashik Darshan</strong>,{" "}
                  <strong>Panchavti Tapovan</strong>,{" "}
                  <strong>Shirdi Shani Shingnpur Darshan</strong>, and{" "}
                  <strong>Grishneshwar Joytirling darshan</strong>.
                </p>

                {/* Popular Yatra Badges with Target SEO Phrases */}
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Trimbakeshwar Joytirling Darshan
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Nashik Darshan &amp; Panchavati Tapovan
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Mumbai to Nashik Simhastha taxi service
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Pune to Nashik Simhastha tour operator
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Nashik Simhastha local sightseeing cabs
                  </span>
                </div>
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="pt-6 mt-6 border-t border-[#3B2519] flex items-center justify-between text-xs text-stone-300">
                <span className="flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-[#FF6B00]" />
                  <span>Transparent Car Rental Price</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Drivers</span>
                </span>
                <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                  <span>+91 98220 12345</span>
                </span>
              </div>
            </div>

            {/* Partner 2: Meera Tours & Travels */}
            <div className="relative bg-gradient-to-br from-[#20140D] to-[#2B170E] rounded-3xl p-8 sm:p-9 border-2 border-[#F59E0B]/30 hover:border-[#F59E0B] shadow-2xl transition-all duration-300 group flex flex-col justify-between overflow-hidden">
              {/* Card Mini Mandala Watermark */}
              <div className="absolute -bottom-8 -right-8 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                <CardMiniMandala className="w-44 h-44 text-[#FF6B00] opacity-[0.05] group-hover:opacity-[0.09]" />
              </div>

              {/* Corner Accents */}
              <TempleCorner
                position="tl"
                className="absolute top-3 left-3 w-4 h-4 text-[#F59E0B]/50"
              />
              <TempleCorner
                position="tr"
                className="absolute top-3 right-3 w-4 h-4 text-[#F59E0B]/50"
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#800000]/40 text-[#FDE68A] text-xs font-bold uppercase border border-[#F59E0B]/30">
                    <Crown className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Meera tours and travels Simhastha reviews</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#F59E0B] font-bold">
                    <Star className="w-3.5 h-3.5 fill-[#F59E0B]" />
                    <span>5.0 Pilgrim Rating</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#FDE68A] transition-colors">
                    Meera Tours &amp; Travels
                  </h3>
                  <p className="text-xs text-[#F59E0B] font-semibold mt-0.5 uppercase tracking-wide">
                    Meera Tours and Travels Nashik Simhastha Kumbh Mela · Tour
                    Packages
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
                  Trusted pilgrim fleet partner offering{" "}
                  <strong>Meera travels Nashik Simhastha tour packages</strong>{" "}
                  and <strong>Simhastha Kumbh Mela tour package booking</strong>
                  . Providing premium sedans, spacious SUVs (Innova, Ertiga),
                  and Tempo Travellers for families and yatra groups visiting
                  Nashik, Trimbakeshwar, Shirdi, and Grishneshwar.
                </p>

                {/* Popular Yatra Badges with Target SEO Phrases */}
                <div className="flex flex-wrap gap-2 pt-1 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Nashik Trimbakeshwar Shirdi Simhastha tour packages
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Mumbai to Nashik Simhastha Kumbh Mela tour package
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Pune to Nashik Simhastha travel package
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-black/40 text-amber-200 border border-[#F59E0B]/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                    Simhastha Kumbh Mela 2027 Nashik car rental
                  </span>
                </div>
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="pt-6 mt-6 border-t border-[#3B2519] flex items-center justify-between text-xs text-stone-300">
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#FF6B00]" />
                  <span>Group &amp; Family Yatra Cabs</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Holy Ghat Routes</span>
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Instant Booking</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
