/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  CheckCircle, 
  TrendingUp, 
  Sparkles, 
  Eye, 
  ExternalLink, 
  Globe, 
  Smartphone, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { showToast } from './Toast';

interface KeywordItem {
  phrase: string;
  volume: string;
  intent: 'Commercial' | 'Informational';
  difficulty: 'Low' | 'Medium' | 'High';
  status: 'Injected' | 'Pending Setup';
}

export default function SeoHealthDashboard() {
  const [consultancyName, setConsultancyName] = useState<string>('AMBIFY Global Admission Consultancy');
  const [targetDestination, setTargetDestination] = useState<string>('Russia');
  const [selectedTab, setSelectedTab] = useState<'serp' | 'process' | 'keywords'>('serp');

  // Realistic Indian MBBS recruitment high-intent keywords
  const keywordsList: KeywordItem[] = [
    { phrase: 'best mbbs abroad consultants', volume: '12,500/mo', intent: 'Commercial', difficulty: 'Medium', status: 'Injected' },
    { phrase: `study mbbs in ${targetDestination || 'Russia'} for indian students`, volume: '8,400/mo', intent: 'Commercial', difficulty: 'Low', status: 'Injected' },
    { phrase: 'low cost mbbs abroad with neet score', volume: '6,200/mo', intent: 'Commercial', difficulty: 'Low', status: 'Injected' },
    { phrase: 'mci approved medical colleges overseas', volume: '4,500/mo', intent: 'Informational', difficulty: 'Medium', status: 'Injected' },
    { phrase: 'mbbs admission abroad whatsapp support', volume: '3,100/mo', intent: 'Commercial', difficulty: 'Low', status: 'Injected' },
    { phrase: 'overseas medical admissions timeline 2026', volume: '2,800/mo', intent: 'Informational', difficulty: 'Low', status: 'Injected' },
  ];

  const handleCopySnippet = () => {
    const snippetText = `Title: ByteDepth | Premium Web Assets for MBBS Abroad Consultants\nDescription: ByteDepth designs premium, high-converting MBBS Abroad recruitment websites and digital marketing student acquisition funnels. Double your MBBS student intake...`;
    navigator.clipboard.writeText(snippetText);
    showToast(
      'Copied to Clipboard!',
      'MBBS recruitment SEO metadata structure copied for your reference.',
      'seo',
      3000
    );
  };

  const handleTriggerSimulatorToast = (field: string, value: string) => {
    showToast(
      'SERP Preview Recompiled',
      `Google search listing simulated in real-time for "${value}"!`,
      'seo',
      2500
    );
  };

  return (
    <section id="seo-dashboard" className="py-20 bg-slate-950 text-white font-sans overflow-hidden relative border-t border-slate-900 border-b border-slate-900">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full filter blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950/80 border border-blue-900 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            STANDARDS-COMPLIANT DISCOVERABILITY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
            MBBS Recruiter SEO Health & Organic Lead Engine
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See how our tailored metadata injection and structural standards turn passive Google, Bing, and WhatsApp shared links into high-conversion pipelines for overseas medical aspirants.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls & Metrics Side (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-slate-900/60 border border-slate-800 p-6 md:p-8 rounded-3xl">
            
            {/* Top Interactive Controls */}
            <div className="space-y-5">
              <div className="border-b border-slate-850 pb-4">
                <h3 className="text-md font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  Live Simulator Controls
                </h3>
                <p className="text-[10px] text-slate-500 mt-1">
                  Customize the inputs below to live-test your metadata discoverability rating.
                </p>
              </div>

              {/* Input 1: Brand Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">Consultancy Display Name</label>
                <input 
                  type="text"
                  value={consultancyName}
                  onChange={(e) => {
                    setConsultancyName(e.target.value);
                    if (e.target.value.length % 5 === 0) {
                      handleTriggerSimulatorToast('Consultancy Name', e.target.value);
                    }
                  }}
                  placeholder="e.g. AMBIFY Global Admission"
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 px-3.5 py-2.5 rounded-xl text-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20"
                />
              </div>

              {/* Input 2: Target Country */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">Target Admissions Destination</label>
                <select 
                  value={targetDestination}
                  onChange={(e) => {
                    setTargetDestination(e.target.value);
                    handleTriggerSimulatorToast('Destination', e.target.value);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-200 px-3 py-2.5 rounded-xl text-xs focus:border-blue-500 focus:outline-none"
                >
                  <option value="Russia">Russia (e.g. Orenburg, Kazan)</option>
                  <option value="Georgia">Georgia (e.g. Tbilisi, Batumi)</option>
                  <option value="Philippines">Philippines (e.g. AMA, UV Gullas)</option>
                  <option value="Uzbekistan">Uzbekistan (e.g. Samarkand)</option>
                  <option value="Kazakhstan">Kazakhstan (e.g. Al-Farabi)</option>
                </select>
              </div>
            </div>

            {/* Visual Health Score Gauge */}
            <div className="pt-6 border-t border-slate-850 space-y-4">
              <span className="text-xs font-bold text-slate-300 block uppercase tracking-wider">
                Certified SEO Health Metrics
              </span>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-850 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-mono">Index Score</span>
                  <strong className="text-2xl font-black text-emerald-400 block font-mono mt-0.5">98.4 / 100</strong>
                  <span className="text-[9px] text-emerald-500/90 font-medium flex items-center gap-1 mt-1">
                    <CheckCircle className="w-3 h-3 shrink-0" />
                    Google Core Vitals Safe
                  </span>
                </div>
                {/* SVG Ring Gauge */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-slate-800"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-emerald-500"
                      strokeDasharray="98, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[11px] font-mono font-black text-slate-200">98%</span>
                </div>
              </div>

              {/* Small info label */}
              <p className="text-[10px] text-slate-500 leading-normal">
                ✓ Mobile responsiveness audited under strict Google crawler emulation standards. Pre-rendered server configurations ensure pages load instantly on tight rural networks.
              </p>
            </div>

          </div>

          {/* Interactive Screen Tabulator (8 cols) */}
          <div className="lg:col-span-8 bg-slate-900/40 border border-slate-800 rounded-3xl flex flex-col overflow-hidden">
            
            {/* Tabs Header */}
            <div className="flex border-b border-slate-850 bg-slate-900/80 p-1.5 select-none">
              <button 
                onClick={() => setSelectedTab('serp')}
                className={`flex-1 text-center py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedTab === 'serp' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Google SERP Preview</span>
              </button>
              <button 
                onClick={() => setSelectedTab('keywords')}
                className={`flex-1 text-center py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedTab === 'keywords' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>MBBS Keyword Matrix</span>
              </button>
              <button 
                onClick={() => setSelectedTab('process')}
                className={`flex-1 text-center py-3 px-4 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  selectedTab === 'process' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Standards Transparency</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              
              {/* Tab 1: Google SERP Preview */}
              {selectedTab === 'serp' && (
                <div className="space-y-6 animate-fade-in flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase bg-blue-950 border border-blue-900 px-2 py-0.5 rounded text-blue-400 font-bold">
                        DUMMY-SAFE ACTIVE PREVIEW
                      </span>
                      <button 
                        onClick={handleCopySnippet}
                        className="text-[10px] text-slate-400 hover:text-white transition flex items-center gap-1.5 font-semibold bg-slate-850 px-2.5 py-1 rounded-lg border border-slate-800"
                      >
                        Copy Core Snippet
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                    
                    <p className="text-xs text-slate-400 leading-normal">
                      Here is how your customized digital recruitment system appears to parents and medical aspirants searching for MBBS guidance on mobile and desktop google platforms. 
                    </p>
                  </div>

                  {/* Simulated Google Listing Card */}
                  <div className="bg-white text-slate-900 p-6 rounded-2xl border border-slate-200 shadow-xl space-y-2 text-left">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <Globe className="w-3.5 h-3.5 text-slate-400" />
                      <span>https://www.{(consultancyName || 'yourbrand').toLowerCase().replace(/[^a-z0-9]/g, '')}.com</span>
                      <span className="text-slate-300">›</span>
                      <span className="font-medium text-slate-500">mbbs-abroad-{targetDestination.toLowerCase()}</span>
                    </div>

                    <h4 className="text-xl text-blue-800 hover:underline cursor-pointer font-medium leading-tight font-sans">
                      {consultancyName || 'AMBIFY Global Admission Consultancy'} | Study MBBS in {targetDestination || 'Russia'} for Indian Students
                    </h4>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      <span className="text-slate-400 font-medium">May 2026 — </span>
                      Deploying high-converting {targetDestination} MBBS admission portals featuring NEET eligibility calculators, certified MCI college options, fee tables, and direct WhatsApp counseling guides...
                    </p>

                    {/* Rich snippets block */}
                    <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs mt-2">
                      <div className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition cursor-pointer">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Eligibility</span>
                        <strong className="text-slate-800 font-bold block mt-0.5">NEET Score Qualified</strong>
                      </div>
                      <div className="p-2 bg-slate-50 rounded-lg hover:bg-slate-100 transition cursor-pointer">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">Direct Helpline</span>
                        <strong className="text-emerald-700 font-bold block mt-0.5 flex items-center gap-1">
                          ● Instant WhatsApp Chat
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Trust indicator footer */}
                  <div className="mt-4 bg-slate-900/50 p-3 rounded-xl border border-slate-800/80 flex items-center gap-2 text-xs">
                    <Sparkles className="w-4 h-4 text-blue-400 shrink-0 animate-pulse" />
                    <span className="text-slate-300 font-medium">
                      ByteDepth embeds standard-compliant open graph and SEO markers directly inside your portal headers.
                    </span>
                  </div>
                </div>
              )}

              {/* Tab 2: MBBS Keyword Matrix */}
              {selectedTab === 'keywords' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-200">Primary Admission Recruitment Search Keywords</h4>
                    <p className="text-xs text-slate-400">
                      These organic terms are target-loaded into the page headers to secure direct impressions from parents actively searching for secure MBBS admission spaces.
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left text-slate-300 border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
                          <th className="py-2.5 px-2">Target Search Phrase</th>
                          <th className="py-2.5 px-2">Est. Vol</th>
                          <th className="py-2.5 px-2">Target Intent</th>
                          <th className="py-2.5 px-2">Rank Difficulty</th>
                          <th className="py-2.5 px-2 text-right">Injection Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-850">
                        {keywordsList.map((item, idx) => (
                          <tr key={idx} className="hover:bg-slate-900/30 transition">
                            <td className="py-2.5 px-2 font-mono text-slate-100 font-medium">{item.phrase}</td>
                            <td className="py-2.5 px-2 text-slate-400">{item.volume}</td>
                            <td className="py-2.5 px-2">
                              <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                                item.intent === 'Commercial' ? 'bg-amber-950 border border-amber-900 text-amber-400' : 'bg-slate-900 border border-slate-800 text-slate-400'
                              }`}>
                                {item.intent}
                              </span>
                            </td>
                            <td className="py-2.5 px-2">
                              <span className={`font-semibold ${
                                item.difficulty === 'Low' ? 'text-emerald-400' : 'text-blue-400'
                              }`}>{item.difficulty}</span>
                            </td>
                            <td className="py-2.5 px-2 text-right">
                              <span className="text-emerald-500 font-bold flex items-center justify-end gap-1 text-[10px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Injected
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[10px] text-slate-500 leading-normal pt-2 italic">
                    *Keyword metrics updated quarterly based on Indian overseas consultant student acquisition benchmarks. Custom landing grids target low-difficulty high-conversion commercial modifiers.
                  </p>
                </div>
              )}

              {/* Tab 3: Delivery Process Transparency */}
              {selectedTab === 'process' && (
                <div className="space-y-6 animate-fade-in text-left">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-slate-200">How ByteDepth Guarantees Search Organic Viability</h4>
                    <p className="text-xs text-slate-400">
                      We operate with complete engineering transparency. We do not use shady, manipulative tactics. Instead, we program strict semantic search compliance into your deployment.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    
                    <div className="bg-slate-950/50 border border-slate-850 p-4 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Smartphone className="w-4 h-4" />
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-100">1. Mobile Loading Dominance</h5>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        Parents in tier-2/3 regions often use fluctuating mobile networks. We program high-performance code structures, zero external bloated trackers, and minimal assets to ensure sub-1 second renders.
                      </p>
                    </div>

                    <div className="bg-slate-950/50 border border-slate-850 p-4 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Share2 className="w-4 h-4" />
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-100">2. Rich Share Snippets</h5>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        When counseling parents over WhatsApp, shared links without previews look unprofessional. We bind customized title parameters and high-res vector preview layouts to give you premium clinical authority in messaging chat threads.
                      </p>
                    </div>

                    <div className="bg-slate-950/50 border border-slate-850 p-4 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Search className="w-4 h-4" />
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-100">3. JSON-LD Educational Schema</h5>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        We inject structural JSON data directly into your staging layout identifying your office as a certified specialized Education and Medical Consultant, enabling Google to display clean informational snippets directly in regional search result headers.
                      </p>
                    </div>

                    <div className="bg-slate-950/50 border border-slate-850 p-4 rounded-xl space-y-2">
                      <div className="flex items-center gap-2 text-blue-400">
                        <ShieldCheck className="w-4 h-4" />
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-100">4. ISO 9001 Audited Integrity</h5>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        We verify each page through Google Search Console index diagnostics before final hand-off. No dead links, no duplicate template warnings, and complete compliance with MCI guidance structures.
                      </p>
                    </div>

                  </div>
                </div>
              )}

            </div>

            {/* Panel CTA Footer */}
            <div className="bg-slate-900/80 border-t border-slate-850 p-4 px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 text-left">
                Want these optimized MBBS marketing tags injected for your specific target country?
              </span>
              <a 
                href="#booking-form"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition text-center shrink-0 cursor-pointer"
              >
                <span>Customize My Tag Injections</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
