/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, Star, Shield, ArrowRight, Zap, MessageSquare } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onOpenBooking, onScrollToSection }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-slate-50 font-sans overflow-hidden">
      {/* Decorative vector background grid layout */}
      <div className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none bg-[radial-gradient(#3b82f6_1.2px,transparent_1.2px)] [background-size:24px_24px]"></div>
      
      {/* Visual background gradient blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Certification capsule / Hot Offer tag */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/60 rounded-full px-3.5 py-1.5 mb-8 animate-fade-in">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[11px] font-bold text-blue-800 tracking-wider uppercase flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
            ISO 9001:2015 Approved Process
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-[11px] font-semibold text-gray-600 flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            500+ Prototypes Delivered
          </span>
        </div>

        {/* Headings */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] text-slate-900 tracking-tight max-w-5xl mx-auto mb-6">
          Best Lead Generation Service For <br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            MBBS Abroad Consultants! 🚀📈
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          We help MBBS Abroad consultancies build a strong, professional presence online—from <span className="font-semibold text-slate-900">high-conversion admission websites</span> to <span className="font-semibold text-slate-900">qualified student lead systems</span>. Attract serious, NEET-qualified aspirants for Russia, Georgia, Uzbekistan, Kyrgyzstan, and Philippines to fill your 2026 batches!
        </p>

        {/* Dynamic Trust Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          <div className="bg-white/70 backdrop-blur-sm border border-slate-100 p-3.5 rounded-xl flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">72h Draft Turnaround</span>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-slate-100 p-3.5 rounded-xl flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-blue-500 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">₹500 Booking Deposit</span>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-slate-100 p-3.5 rounded-xl flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-amber-500 shrink-0" />
            <span className="text-xs font-semibold text-slate-700">2 rounds Free Edits</span>
          </div>
          <div className="bg-white/70 backdrop-blur-sm border border-slate-100 p-3.5 rounded-xl flex items-center justify-center gap-2">
            <span className="text-xs font-bold text-emerald-600">100% Risk-Free</span>
            <span className="text-[10px] text-slate-500 font-normal">Approve First</span>
          </div>
        </div>

        {/* Main CTA Elements */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
          <button 
            onClick={onOpenBooking}
            className="hover-pulse-btn w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-md font-bold tracking-tight shadow-xl shadow-blue-500/10 hover:shadow-blue-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="hero-cta-booking"
          >
            <span>Get Started — Pay Just ₹500</span>
            <ArrowRight className="w-5 h-5 text-white/90" />
          </button>
          
          <a 
            href="https://wa.me/919696775989?text=Hi%20ByteDepth!%20I'm%20an%20MBBS%20Abroad%20Consultant.%20I%20would%20like%20to%20discuss%20a%20high-converting%20student%20recruitment%20web%20system%20and%20professional%20digital%20lead%20gen%20assets%20for%2520my%2520consultancy."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300 text-slate-800 px-8 py-4 rounded-xl text-md font-bold transition-all inline-flex items-center justify-center gap-2"
            id="hero-cta-call"
          >
            <MessageSquare className="w-4.5 h-4.5 text-emerald-500 fill-emerald-500/10" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Small trust assurance subtitle */}
        <p className="text-xs text-slate-400 mt-5 leading-normal">
          No complicated contracts. Plan retainer balance payable only after you authorize and approve your live mockup.
        </p>

        {/* Quick link trigger */}
        <div className="mt-14">
          <button
            onClick={() => onScrollToSection('services')}
            className="text-xs text-blue-600 font-medium hover:underline inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Explore niche portfolios & interactive mockups</span>
            <span className="text-lg">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
