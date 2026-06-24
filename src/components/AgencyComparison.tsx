/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  XCircle, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  ShieldAlert, 
  Gauge, 
  PhoneCall, 
  Target,
  ArrowRight
} from 'lucide-react';
import { showToast } from './Toast';

export default function AgencyComparison() {
  const [traffic, setTraffic] = useState<number>(2000);
  const avgFee = 100000; // default average consultancy fee per student

  // Rates
  const templateRate = 0.5; // 0.5% standard conversion rate for slow WP template
  const byteDepthRate = 3.5; // 3.5% conversion rate for customized conversion design

  // Leads
  const templateLeads = Math.round((traffic * templateRate) / 100);
  const byteDepthLeads = Math.round((traffic * byteDepthRate) / 100);
  const additionalLeads = byteDepthLeads - templateLeads;

  // Enrollment Conversion (Assume standard 15% counseling conversion of leads to final paid seats)
  const templateSeats = Math.max(0, Math.round(templateLeads * 0.15));
  const byteDepthSeats = Math.max(1, Math.round(byteDepthLeads * 0.15));
  const additionalSeats = byteDepthSeats - templateSeats;

  // Revenue Lift
  const extraRevenue = additionalSeats * avgFee;

  const handleTrafficChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTraffic(Number(e.target.value));
  };

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="agency-comparison" className="py-20 bg-white border-b border-slate-200/60 font-sans relative overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-indigo-50/40 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-blue-50/50 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Gauge className="w-4 h-4 text-indigo-600" />
            BUILD ARCHITECTURE BENCHMARKS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
            Standard Web Templates vs. ByteDepth Custom Builds
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Many agencies charge premium fees for slow, bloated WordPress templates that lose 90% of mobile parents. We engineer ultra-responsive, compliance-proof sales structures focused strictly on conversion metrics.
          </p>
        </div>

        {/* Interactive Traffic Simulator Controller */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 mb-12 max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1 md:max-w-md">
              <h3 className="text-base font-bold text-slate-800 flex items-center gap-1.5">
                <Target className="w-5 h-5 text-indigo-600" />
                Configure Your Traffic & See the ROI Gap
              </h3>
              <p className="text-xs text-slate-500 leading-normal">
                Drag the slider to adjust your estimated monthly visitors from social media, Google, local maps, or student references.
              </p>
            </div>
            <div className="w-full md:w-80 space-y-2.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Monthly Visitor Traffic</span>
                <span className="text-indigo-600 font-mono font-extrabold text-lg">{traffic.toLocaleString()} / mo</span>
              </div>
              <input 
                type="range"
                min="500"
                max="10000"
                step="500"
                value={traffic}
                onChange={handleTrafficChange}
                onMouseUp={() => showToast(
                  'Comparison Updated',
                  `Simulated performance comparison for ${traffic.toLocaleString()} monthly visitors.`,
                  'success',
                  3000
                )}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                id="comparison-traffic-slider"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-medium">
                <span>500 visitors</span>
                <span>10,000 visitors</span>
              </div>
            </div>
          </div>

          {/* ROI Multiplier Highlight Callout */}
          <div className="mt-6 pt-6 border-t border-slate-200/80 grid sm:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white border border-slate-200/60 rounded-2xl shadow-inner">
              <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">Additional Pre-Qualified Leads</span>
              <strong className="text-2xl font-black text-slate-800 font-mono mt-1 block">+{additionalLeads}</strong>
              <span className="text-[10px] text-slate-400 block leading-none">Aspirant metadata submissions</span>
            </div>
            <div className="p-4 bg-white border border-slate-200/60 rounded-2xl shadow-inner">
              <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase">Extra Batches Enrolled</span>
              <strong className="text-2xl font-black text-emerald-600 font-mono mt-1 block">+{additionalSeats} Seats</strong>
              <span className="text-[10px] text-slate-400 block leading-none">Assuming normal 15% counseling close</span>
            </div>
            <div className="p-4 bg-indigo-900 border border-indigo-950 text-white rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 bg-indigo-800 text-[8px] text-yellow-300 font-bold rounded-bl uppercase">Net Gain</div>
              <span className="text-[10px] font-mono text-indigo-200 font-bold block uppercase">Estimated Commission Lift</span>
              <strong className="text-2xl font-black text-yellow-300 font-mono mt-1 block">{formatINR(extraRevenue)}</strong>
              <span className="text-[10px] text-indigo-200 block leading-none">Based on ₹1 Lakh service commission</span>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Traditional Agency Template card */}
          <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 relative opacity-85 hover:opacity-100 transition-opacity">
            <div className="absolute top-6 right-6">
              <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-100 px-2 py-1 rounded">
                SLUGGISH CONVERSION
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                Traditional WordPress Web Templates
              </h3>
              <p className="text-xs text-slate-500 leading-normal">
                Built by generic web developers using heavy visual builders (Elementor/WordPress) that load slowly on parent mobile networks.
              </p>
            </div>

            {/* Parameter List */}
            <ul className="space-y-4 text-xs text-slate-600">
              <li className="flex items-start gap-3 pb-3.5 border-b border-slate-100">
                <ShieldAlert className="w-4 h-4 text-amber-505 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-slate-800 block">D- Grade Speed & Latency (3.8s+ Load)</strong>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Heavy assets, uncompressed script packages, leading to 45% immediate bounce rate.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 pb-3.5 border-b border-slate-100">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-slate-800 block">Static Contact Forms</strong>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Generic name/email/message inputs with no NEET filters, resulting in junk leads or cold data.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 pb-3.5 border-b border-slate-100">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-slate-800 block">Zero Automation / Isolated Database</strong>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Requires counselors to copy-paste inquiries manually. No CRM webhooks, causing lead leaks.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-slate-800 block">Est. Performance Metrics</strong>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">~0.5% visitor-to-lead conversion. 1,000 visitors produce just 5 leads (0-1 enrolled seats).</span>
                </div>
              </li>
            </ul>

            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 font-mono block">Estimated Average Enrolled seats</span>
                <strong className="text-lg font-bold text-slate-800 font-mono mt-0.5 block">{templateSeats} seats / batch</strong>
              </div>
              <span className="text-xs font-mono text-slate-400">Low Authority presence</span>
            </div>
          </div>

          {/* ByteDepth Custom Conversion Built card */}
          <div className="bg-slate-900 border border-slate-950 text-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between space-y-6 relative shadow-xl ring-2 ring-indigo-500/10">
            <div className="absolute top-6 right-6">
              <span className="text-[10px] font-bold text-yellow-300 bg-indigo-950 border border-indigo-800 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-yellow-300 fill-yellow-300" />
                BYTE-DEPTH OPTIMIZED
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ByteDepth Custom Sales & Admission Build
              </h3>
              <p className="text-xs text-slate-400 leading-normal">
                Engineered in React & Tailwind CSS. Hosted on ultra-fast global edge CDNs for instant loading on 3G/4G phones.
              </p>
            </div>

            {/* Parameter List */}
            <ul className="space-y-4 text-xs text-slate-300">
              <li className="flex items-start gap-3 pb-3.5 border-b border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-white block">A+ Grade Speed & Performance (&lt;0.9s Load)</strong>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Pre-rendered static frameworks with near-zero latency, keeping bounces under 10%.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 pb-3.5 border-b border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-white block">NEET Eligibility Calculators & Country Interactive Guides</strong>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Pre-filters students with real NEET requirements, showing direct pricing and MCI rankings.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 pb-3.5 border-b border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-white block">Integrated Partner Pipeline Sync & Automations</strong>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">Instant synchronization with GSheets, Zoho, HubSpot CRM & official WhatsApp brochures.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-white block">Est. Performance Metrics</strong>
                  <span className="text-[11px] text-slate-400 mt-0.5 block">~3.5% visitor-to-lead conversion. 1,000 visitors produce 35 leads ({byteDepthSeats} seats filled).</span>
                </div>
              </li>
            </ul>

            <div className="bg-slate-950 border border-slate-850 p-4 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-indigo-300 font-mono block">Estimated Average Enrolled seats</span>
                <strong className="text-lg font-bold text-white font-mono mt-0.5 block">{byteDepthSeats} seats / batch</strong>
              </div>
              <span className="text-xs font-mono text-yellow-300 font-bold">~{byteDepthSeats > 0 ? (byteDepthSeats / (templateSeats || 1)).toFixed(0) : 5}x Enrollment Multiplier</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
