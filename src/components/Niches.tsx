/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ComponentType } from 'react';
import { 
  Scale, 
  UserCheck, 
  Building2, 
  Activity, 
  Briefcase, 
  Compass, 
  Check, 
  Sparkles, 
  Smartphone, 
  ExternalLink,
  Laptop,
  CheckCircle2,
  Calendar,
  Contact
} from 'lucide-react';
import { NICHES_DATA } from '../data';
import { NicheCategory } from '../types';

// Map string names to imported Lucide React icon components
const IconMap: Record<string, ComponentType<{ className?: string }>> = {
  Scale: Scale,
  UserCheck: UserCheck,
  Building2: Building2,
  Activity: Activity,
  Briefcase: Briefcase,
  Compass: Compass,
};

interface NichesProps {
  onSelectNicheForBooking: (nicheId: string) => void;
}

export default function Niches({ onSelectNicheForBooking }: NichesProps) {
  const [selectedNicheId, setSelectedNicheId] = useState<string>('legal-finance');
  const [simulatorInteraction, setSimulatorInteraction] = useState<string | null>(null);

  const activeNiche = NICHES_DATA.find(n => n.id === selectedNicheId) || NICHES_DATA[0];

  const handleSimulateClick = (actionName: string) => {
    setSimulatorInteraction(`Client clicked: "${actionName}"! A secure scheduling or intake form instantly overlay here.`);
    setTimeout(() => {
      setSimulatorInteraction(null);
    }, 4500);
  };

  return (
    <section id="services" className="py-20 bg-white font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Tailored Industry Frameworks
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Websites Configured For Your Niche
          </h2>
          <p className="text-slate-500 text-base">
            We don't build generic brochure templates. We build professional, single-page client generation tunnels configured for your specific industry legalities, target audiences, and conversion triggers.
          </p>
        </div>

        {/* Dynamic Split Layout: Niches Grid left, Interactive Simulator right */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Niche Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
              Select Your Target Practice Niche
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {NICHES_DATA.map((niche) => {
                const IconComponent = IconMap[niche.icon] || Briefcase;
                const isSelected = niche.id === selectedNicheId;
                
                return (
                  <button
                    key={niche.id}
                    onClick={() => {
                        setSelectedNicheId(niche.id);
                        setSimulatorInteraction(null);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer text-slate-800 ${
                      isSelected 
                        ? 'border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-500/20' 
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                    id={`niche-card-${niche.id}`}
                  >
                    <div className="flex items-center space-x-3.5 mb-2">
                      <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        <IconComponent className="w-5 h-5 shrink-0" />
                      </div>
                      <span className="font-bold text-sm tracking-tight text-slate-900 block leading-tight">
                        {niche.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 pl-0.5 leading-relaxed">
                      {niche.specialty}
                    </p>
                  </button>
                );
              })}
            </div>
            
            {/* Quick Helper Note */}
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl mt-6">
              <div className="flex items-start space-x-2.5">
                <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Need custom e-commerce?</span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    We build robust online catalogs & dynamic checkout flows upon request. Simply check the design preferences parameter in our ₹500 booking wizard.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prototype Simulator */}
          <div className="lg:col-span-7">
            
            {/* Simulator Title and Header */}
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="flex items-center space-x-2">
                <Laptop className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-700 tracking-tight uppercase">
                  Live Wireframe Concept Preview
                </span>
              </div>
              <span className="text-[11px] bg-slate-100 text-slate-600 font-mono px-2 py-0.5 rounded">
                Prototype: {activeNiche.id}.preview
              </span>
            </div>

            {/* Simulated Browser Container */}
            <div className="border border-slate-200 rounded-2xl shadow-xl overflow-hidden bg-white">
              
              {/* Browser Window Controls Bar */}
              <div className="bg-slate-100/80 px-4 py-3 border-b border-slate-200 flex items-center justify-between select-none">
                <div className="flex items-center space-x-1.5 shrink-0">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                
                {/* Mock Address Bar */}
                <div className="bg-white text-[11px] font-mono text-slate-400 border border-slate-200 rounded-md px-3 py-1 text-center w-full max-w-sm mx-4 truncate">
                  https://www.yourpractice.com/
                </div>

                <div className="flex space-x-1">
                  <Smartphone className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>

              {/* Simulated Page Content Viewport */}
              <div className="p-6 md:p-8 bg-white min-h-[460px] flex flex-col justify-between">
                
                {/* 1. Header Portion */}
                <div className="flex justify-between items-center pb-5 border-b border-dashed border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="bg-slate-900 text-white w-6 h-6 rounded flex items-center justify-center font-bold text-xs">
                      P
                    </div>
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      {activeNiche.title} Group
                    </span>
                  </div>
                  
                  {/* Dynamic Nav pill */}
                  <div className="text-[10px] bg-slate-50 text-slate-500 font-semibold px-2.5 py-1 rounded border border-slate-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Accepting Consultations</span>
                  </div>
                </div>

                {/* 2. Page Content Body */}
                <div className="my-8">
                  {/* Headline */}
                  <h4 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug mb-3">
                    {activeNiche.mockPageLayout.heroTitle}
                  </h4>
                  
                  {/* Subtitle */}
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 max-w-xl">
                    {activeNiche.mockPageLayout.heroSubtitle}
                  </p>

                  {/* Trust badge */}
                  <div className="bg-blue-50/50 rounded-lg p-2.5 border border-blue-50 mb-6 inline-flex">
                    <span className="text-xs font-semibold text-blue-700 font-mono tracking-tight">
                      {activeNiche.mockPageLayout.trustStatement}
                    </span>
                  </div>

                  {/* Focus Checklist */}
                  <div className="space-y-2.5 mb-7">
                    {activeNiche.mockPageLayout.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Core Action CTA element inside mockup */}
                  <div className="relative">
                    <button
                      onClick={() => handleSimulateClick(activeNiche.mockPageLayout.primaryCTA)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-xs font-bold tracking-tight inline-flex items-center gap-2 shadow-md hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all text-left"
                    >
                      <Calendar className="w-3.5 h-3.5 text-white/90" />
                      <span>{activeNiche.mockPageLayout.primaryCTA}</span>
                    </button>

                    {/* Sim Action Popup notification overlays */}
                    {simulatorInteraction && (
                      <div className="absolute top-12 left-0 right-0 bg-slate-900 text-white text-xs font-medium p-3.5 rounded-xl border border-slate-800 shadow-2xl z-20 flex items-start gap-2.5 animate-fade-in">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{simulatorInteraction}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3. Conversion Mechanism Section (Simulated Footer & Triage) */}
                <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-mono">
                      PRIMARY SYSTEM FLOW
                    </span>
                    <span className="text-[11px] text-slate-800 font-bold block">
                      Target Goal: {activeNiche.focus}
                    </span>
                  </div>
                  <button 
                    onClick={() => onSelectNicheForBooking(activeNiche.id)}
                    className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                  >
                    <span>Deploy this layout (₹500 Deposit)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-500 group-hover:translate-x-0.5 transition" />
                  </button>
                </div>

              </div>
            </div>

            {/* Strategic Niche Copy Paragraph */}
            <div className="mt-5 px-3 py-4 bg-slate-50 border border-slate-100 rounded-xl">
              <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                Conversion Strategy
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {activeNiche.conversionCopy}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
