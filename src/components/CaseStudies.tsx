/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { TrendingUp, ArrowRight, ShieldCheck, Ban, Sparkles } from 'lucide-react';
import { NICHES_DATA } from '../data';

interface CaseStudyItem {
  id: string;
  nicheId: string;
  clientName: string;
  location: string;
  metricBefore: string;
  metricAfter: string;
  metricChange: string;
  beforeLabel: string;
  afterLabel: string;
  storyText: string;
  featuresAdded: string[];
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'cs-legal',
    nicheId: 'legal-finance',
    clientName: 'Verma Tax Chambers & Audit Services',
    location: 'Mumbai, India',
    metricBefore: '2 leads / mo',
    metricAfter: '28 high-tier retainers / mo',
    metricChange: '+1,300%',
    beforeLabel: 'Cluttered PDF brochure link on a slow WordPress template with stale maps listing.',
    afterLabel: 'ByteDepth Secure Triage Portal with encrypted intake, direct Calendly integration, and verified Google reviews.',
    storyText: 'Verma Tax Chambers needed corporate retainers but was losing premium prospects due to a slow, unoptimized landing layout. By deploying our ISO-standard client generation flow, we consolidated security badges, configured Calendly, and increased booking rates immediately.',
    featuresAdded: ['Encrypted client intake form', 'Automated Calendly scheduler', 'Live Tax Deadline Calendar']
  },
  {
    id: 'cs-consulting',
    nicheId: 'consulting',
    clientName: 'Apex Overseas Study & Immigration',
    location: 'Delhi NCR',
    metricBefore: '1.2% Conversion Rate',
    metricAfter: '4.8% Active Scorers',
    metricChange: '4x Lead Volume',
    beforeLabel: 'Static Contact Us form requiring manual resume uploads and returning dead-end thank you pages.',
    afterLabel: 'Interactive study-abroad eligibility assessment scorer with automatic milestone roadmapping.',
    storyText: 'Apex Overseas was wasting consultation resources on unqualified visa applicants. Bytedepth replaced static text grids with a frictionless interactive eligibility score sheet, filtering low-intent leads and delivering complete documents automatically.',
    featuresAdded: ['Interactive Eligibility Calculator', 'Milestone Journey Timelines', 'Automated document checklists']
  },
  {
    id: 'cs-realestate',
    nicheId: 'real-estate',
    clientName: 'Siddharth & Sons Premium Brokerage',
    location: 'Bengaluru, India',
    metricBefore: 'Manual followups only',
    metricAfter: '80+ Verified Site Visits',
    metricChange: '+280% Site Tours',
    beforeLabel: 'Standard property lists spread across external classified portals with high broker pollution.',
    afterLabel: 'Fast-loading immersive virtual showroom with 1-click WhatsApp map coordinates.',
    storyText: 'Siddharth & Sons was struggling to capture local HNIs for prime pre-launches. We built a beautiful single-screen focus showroom that locked high-resolution brochures behind a verified contact barrier, routing tours to site coordinators via WhatsApp APIs.',
    featuresAdded: ['Visual grid of current available properties', '1-Click WhatsApp site sync', 'Locked high-res brochure PDF']
  },
  {
    id: 'cs-health',
    nicheId: 'health-wellness',
    clientName: 'Dr. Ritu’s Core Physiotherapy Clinic',
    location: 'Pune, India',
    metricBefore: 'No online bookings',
    metricAfter: '44 Patient slot trials / mo',
    metricChange: 'Full capacity',
    beforeLabel: 'Standard practice description on generic local business directories with zero conversion call to actions.',
    afterLabel: 'Frictionless 3-day VIP clinical assessment program pass with automated SMS confirmations.',
    storyText: 'Dr. Ritu wanted to fill direct clinical assessment slots during weekday generic low-hours. Our health framework centered an emotional "VIP assessment pass" opt-in, establishing immediate physician trust and booking patient loops smoothly.',
    featuresAdded: ['3-Day VIP Studio Pass offer', 'Dynamic clinical staff biographies', 'Interactive treatment sliders']
  },
  {
    id: 'cs-b2b',
    nicheId: 'specialized-b2b',
    clientName: 'Sovereign ISO Audits & Compliance',
    location: 'Chennai, India',
    metricBefore: '90-day RFP cycles',
    metricAfter: '14-day average close',
    metricChange: '-76% Sales Friction',
    beforeLabel: 'Corporate decks sent over static attachments that files got marked as spam by enterprise filters.',
    afterLabel: 'Secure NDA-protected procurement portal with concrete ISO corporate case statistics.',
    storyText: 'Sovereign was bogged down by endless corporate procurement questions. Bytedepth structured a modern, compliant B2B layout with dynamic retainer grids, clear NDA locks, and 1-click execution request forms.',
    featuresAdded: ['Corporate Deck secure download', 'Three-tier Enterprise Retainer Cards', 'NDA Protected Intake Portal']
  },
  {
    id: 'cs-creative',
    nicheId: 'creative-portfolio',
    clientName: 'Devyani Soundreels & Brand Voice',
    location: 'Mumbai, India',
    metricBefore: 'Low-budget gig offers',
    metricAfter: '₹45,000 corporate retainers',
    metricChange: 'Premium pricing power',
    beforeLabel: 'Messy Linktree link with separate Google Drive audio clips causing client friction.',
    afterLabel: 'Pristine, premium bilingual HTML5 audio player soundreel dashboard with instant calendar check.',
    storyText: 'Devyani was losing high-end brand commercial voices because agency producers hated navigating disorganized folders. We consolidated her soundreels into a polished, gorgeous single page with 1-click studio availability checks.',
    featuresAdded: ['Built-in Soundreel Players', 'Direct Studio Availability checker', 'Transparent corporate rate-scale card']
  }
];

const CATEGORIES = [
  { id: 'all', title: 'All Sectors' },
  { id: 'professional', title: 'Finance & Law', niches: ['legal-finance', 'specialized-b2b'] },
  { id: 'wellness', title: 'Health & Advisory', niches: ['health-wellness', 'consulting'] },
  { id: 'property-creative', title: 'Property & Media', niches: ['real-estate', 'creative-portfolio'] }
];

export default function CaseStudies() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [activeNicheId, setActiveNicheId] = useState<string>('legal-finance');
  const [isStudyLoading, setIsStudyLoading] = useState<boolean>(false);

  // Filter niches matching selected category
  const filteredNiches = activeCategoryId === 'all'
    ? NICHES_DATA
    : NICHES_DATA.filter(n => {
        const cat = CATEGORIES.find(c => c.id === activeCategoryId);
        return cat?.niches.includes(n.id);
      });

  // Load selection and prompt loading sequence
  const handleNicheSelect = (id: string) => {
    if (id === activeNicheId) return;
    setIsStudyLoading(true);
    setActiveNicheId(id);
    const timer = setTimeout(() => {
      setIsStudyLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  };

  const handleCategorySelect = (id: string) => {
    setActiveCategoryId(id);
    setIsStudyLoading(true);
    
    // Auto-select first niche matching current filtered list
    const updatedNiches = id === 'all'
      ? NICHES_DATA
      : NICHES_DATA.filter(n => {
          const cat = CATEGORIES.find(c => c.id === id);
          return cat?.niches.includes(n.id);
        });

    if (updatedNiches.length > 0) {
      // If current selected niche is not in filtered list, switch it
      const isStillAvailable = updatedNiches.some(n => n.id === activeNicheId);
      if (!isStillAvailable) {
        setActiveNicheId(updatedNiches[0].id);
      }
    }

    const timer = setTimeout(() => {
      setIsStudyLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  };

  const selectedStudy = CASE_STUDIES.find(cs => cs.nicheId === activeNicheId) || CASE_STUDIES[0];
  const relatedNicheData = NICHES_DATA.find(n => n.id === activeNicheId);

  return (
    <section id="case-studies" className="py-20 bg-slate-900 text-white border-b border-slate-800 font-sans relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950 border border-blue-900 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            Empirical Proof of Concept (Sprint Metrics)
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4 mb-4">
            Proven Performance & Over-Yielding Returns
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            See how converting static pages into compliance-verified, high-intent client acquisition portals transforms conversions and lead velocity.
          </p>
        </div>

        {/* High-Level Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6 max-w-3xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isCatActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isCatActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10 border border-blue-500'
                    : 'bg-slate-800/40 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Niche Tabs Selectors (filtered based on above category) */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto border-t border-slate-800/60 pt-5">
          {filteredNiches.map((n) => {
            const isActive = n.id === activeNicheId;
            return (
              <button
                key={n.id}
                onClick={() => handleNicheSelect(n.id)}
                className={`px-4.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-slate-800 text-blue-400 shadow-inner scale-102 border border-slate-700' 
                    : 'bg-slate-850/40 text-slate-500 border border-transparent hover:text-slate-350 hover:bg-slate-850'
                }`}
              >
                {n.title}
              </button>
            );
          })}
        </div>

        {/* Selected Case Study Storyboard (with animated loading skeleton state) */}
        <div className="max-w-5xl mx-auto min-h-[420px] transition-all duration-300">
          {isStudyLoading ? (
            /* Subtle Skeleton Loader Card Component */
            <div className="bg-slate-850 border border-slate-750 rounded-3xl p-6 md:p-10 shadow-2xl animate-pulse space-y-8">
              {/* Header skeleton */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-800">
                <div className="space-y-3 w-full md:w-2/3">
                  <div className="h-3 bg-slate-800 rounded-full w-1/4"></div>
                  <div className="h-6 bg-slate-850 bg-gradient-to-r from-slate-800 to-slate-750 rounded-full w-3/4"></div>
                  <div className="h-3 bg-slate-800 rounded-full w-1/3"></div>
                </div>
                <div className="h-14 bg-slate-800 rounded-2xl w-32 shrink-0"></div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8">
                {/* Story skeleton left */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <div className="h-3 bg-slate-800 rounded-full w-1/5"></div>
                    <div className="h-4 bg-slate-800 rounded-full w-full"></div>
                    <div className="h-4 bg-slate-800 rounded-full w-11/12"></div>
                    <div className="h-4 bg-slate-800 rounded-full w-5/6"></div>
                  </div>
                  <div className="space-y-3 pt-3">
                    <div className="h-3 bg-slate-800 rounded-full w-1/4"></div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-slate-800 rounded-lg w-28"></div>
                      <div className="h-8 bg-slate-800 rounded-lg w-36"></div>
                      <div className="h-8 bg-slate-800 rounded-lg w-32"></div>
                    </div>
                  </div>
                </div>

                {/* Metrics skeleton right */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="h-28 bg-slate-800/50 rounded-2xl p-4.5"></div>
                  <div className="h-28 bg-slate-800/80 rounded-2xl p-4.5"></div>
                </div>
              </div>
            </div>
          ) : (
            /* Fully rendered Card Content */
            <div className="bg-slate-850 border border-slate-750 rounded-3xl p-6 md:p-10 shadow-2xl transform transition-all duration-300 ease-out hover:border-slate-700">
              
              {/* Headline and location info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-slate-750/80 mb-8">
                <div>
                  <span className="text-blue-400 text-[10px] uppercase font-bold tracking-widest font-mono">
                    Featured Success Story &middot; {relatedNicheData?.title}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight mt-1">
                    {selectedStudy.clientName}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Location: {selectedStudy.location} &middot; Verified Case Study
                  </p>
                </div>
                
                {/* Main multiplier badge */}
                <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-2xl flex items-center gap-2 shrink-0">
                  <span className="text-2xl font-black font-mono leading-none">{selectedStudy.metricChange}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider block">Lead<br />Velocity</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Story & Features Added (Left 7-col) */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block font-mono">
                      Transformation Overview
                    </span>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                      {selectedStudy.storyText}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold text-slate-350 uppercase tracking-widest block font-mono">
                      Core Framework Features Deployed
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.featuresAdded.map((feat, index) => (
                        <span 
                          key={index}
                          className="bg-slate-900 border border-slate-755 text-slate-300 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Split Before vs After Comparison (Right 5-col) */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* Before Card */}
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4.5 space-y-2">
                    <div className="flex justify-between items-center bg-red-950/30 border border-red-900/40 px-2.5 py-1 rounded text-red-400 text-[10px] font-bold uppercase tracking-wider w-fit">
                      <Ban className="w-3.5 h-3.5 mr-1" />
                      <span>Before ByteDepth System</span>
                    </div>
                    <p className="text-2xl font-black text-slate-400 font-mono tracking-tight">
                      {selectedStudy.metricBefore}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {selectedStudy.beforeLabel}
                    </p>
                  </div>

                  {/* After Card */}
                  <div className="bg-blue-950/40 border-2 border-blue-600/30 rounded-2xl p-4.5 space-y-2 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full filter blur-md"></div>
                    
                    <div className="flex justify-between items-center bg-emerald-950/30 border border-emerald-950/40 px-2.5 py-1 rounded text-emerald-405 text-[10px] font-bold uppercase tracking-wider w-fit">
                      <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                      <span>After Deploying ByteDepth</span>
                    </div>
                    <p className="text-2xl font-black text-emerald-400 font-mono tracking-tight">
                      {selectedStudy.metricAfter}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedStudy.afterLabel}
                    </p>
                  </div>

                </div>

              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
