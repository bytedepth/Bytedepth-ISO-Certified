/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ComponentType } from 'react';
import { 
  Sparkles, 
  Laptop,
  Megaphone,
  Users,
  MessageSquare,
  Search,
  Package,
  ArrowRight,
  ShieldAlert,
  CheckCircle2
} from 'lucide-react';
import { NICHES_DATA } from '../data';
import ScrollFadeIn from './ScrollFadeIn';

// Map string names to imported Lucide React icon components
const IconMap: Record<string, ComponentType<{ className?: string }>> = {
  Laptop: Laptop,
  Megaphone: Megaphone,
  Users: Users,
  MessageSquare: MessageSquare,
  Search: Search,
  Package: Package,
};

interface NichesProps {
  onSelectNicheForBooking: (nicheId: string) => void;
}

export default function Niches({ onSelectNicheForBooking }: NichesProps) {
  return (
    <section id="services" className="py-20 bg-white font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFadeIn>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Complete Digitalization Suite
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Best Lead Generation & Web Systems For MBBS Abroad Consultants
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Stop relying on slow, unoptimized sites and generic junk lead databases. We build interactive admission websites, run high-yield Meta/Google ads, manage authority social media, and configure bulk WhatsApp automation for 2026 batches.
            </p>
          </div>

          {/* Premium Showcase Grid of Niches */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NICHES_DATA.map((niche) => {
              const IconComponent = IconMap[niche.icon] || Laptop;
              
              return (
                <div
                  key={niche.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-xs hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
                  id={`niche-card-${niche.id}`}
                >
                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <IconComponent className="w-6 h-6 shrink-0" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono text-blue-600 font-extrabold tracking-wider block">
                          {niche.specialty.split(' ')[0]} Focus
                        </span>
                        <h3 className="font-black text-base text-slate-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                          {niche.title}
                        </h3>
                      </div>
                    </div>

                    {/* Specialty Tagline */}
                    <p className="text-xs font-semibold text-slate-700 mb-4 bg-slate-50 border border-slate-100 px-3 py-2 rounded-lg">
                      {niche.specialty}
                    </p>

                    {/* Short conversion copy */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-5">
                      {niche.conversionCopy}
                    </p>

                    {/* Core Features list */}
                    <div className="space-y-2 mb-6">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                        Key Deliverables:
                      </span>
                      {niche.mockPageLayout.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat.replace(/^✓\s*/, '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="pt-5 border-t border-slate-100 space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                      <span>Target Goal:</span>
                      <span className="text-slate-800 font-bold truncate max-w-[160px]">
                        {niche.focus.replace('Converting ', '')}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectNicheForBooking(niche.id)}
                      className="w-full bg-slate-900 text-white hover:bg-blue-600 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:hover:bg-blue-600 transition-all duration-300 shadow-sm cursor-pointer"
                    >
                      <span>Deploy this layout (₹500 Deposit)</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Helper Note & Guarantee */}
          <div className="mt-12 bg-slate-50 border border-slate-200/80 p-5 rounded-2xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-xl shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-sm font-bold text-slate-800 block">Get a Website Free Audit!</span>
                <span className="text-xs text-slate-500 block mt-0.5 leading-relaxed">
                  We will audit your existing consultancy website, review your current Google Maps SEO, and inspect your Meta pixel setup completely free. Just select any target system above and specify it in your ₹500 booking wizard!
                </span>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
