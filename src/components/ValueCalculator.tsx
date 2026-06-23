/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Calculator, Sparkles, Star, TrendingUp } from 'lucide-react';

export default function ValueCalculator() {
  const [visitorCount, setVisitorCount] = useState<number>(1500);
  const [avgTicketSize, setAvgTicketSize] = useState<number>(100000);
  const [conversionRate, setConversionRate] = useState<number>(3.0); // representative conversion rate (percent)

  // Calculations
  const estimatedLeads = Math.round((visitorCount * conversionRate) / 100);
  const estimatedRevenue = estimatedLeads * avgTicketSize;
  const byteDepthCost = 9999;
  const roiMultiple = estimatedRevenue > 0 ? (estimatedRevenue / byteDepthCost).toFixed(1) : '0';

  // Format currency helpers
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white font-sans overflow-hidden relative">
      {/* Visual backdrop items */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950/80 border border-blue-900 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            OBJECTION-FREE INTUITIVE ROI CALCULATOR
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
            See Your ROI Potential Before You Book
          </h2>
          <p className="text-slate-400 text-base">
            Configure your target admission numbers below to calculate the ROI of a ByteDepth conversion system compared to our Complete Package cost of just ₹15,000/month (started with a ₹500 booking deposit).
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch max-w-5xl mx-auto">
          
          {/* Controls section (Left) */}
          <div className="bg-slate-800/80 border border-slate-700 p-6 md:p-8 rounded-3xl flex flex-col justify-between space-y-6">
            
            <div className="flex items-center space-x-2 pb-4 border-b border-slate-700">
              <Calculator className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-bold uppercase tracking-wider text-slate-200">
                Configure Consultancy Metrics
              </span>
            </div>

            {/* Metric 1: Monthly Traffic */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <label className="text-slate-300">Estimated Monthly Visitors (Ad-traffic & Organic)</label>
                <span className="text-blue-400 font-mono font-bold text-base">
                  {visitorCount.toLocaleString()}
                </span>
              </div>
              <input 
                type="range" 
                min="100" 
                max="15000" 
                step="100"
                value={visitorCount}
                onChange={(e) => setVisitorCount(Number(e.target.value))}
                className="w-full accent-blue-500 bg-slate-700 h-2 rounded-lg appearance-none cursor-pointer"
                id="calc-range-visitors"
              />
              <span className="text-[10px] text-slate-500 block leading-tight">
                (Standard parent referrals, local Google Business searches, maps hits, or Google/Meta Ads placements)
              </span>
            </div>

            {/* Metric 2: Ticket Size / Service Value */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <label className="text-slate-300">Avg Student Commission / Consultancy Fee</label>
                <span className="text-blue-400 font-mono font-bold text-base">
                  {formatINR(avgTicketSize)}
                </span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="300000" 
                step="5000"
                value={avgTicketSize}
                onChange={(e) => setAvgTicketSize(Number(e.target.value))}
                className="w-full accent-blue-500 bg-slate-700 h-2 rounded-lg appearance-none cursor-pointer"
                id="calc-range-ticket"
              />
              <span className="text-[10px] text-slate-500 block leading-tight">
                (What you earn in direct consulting fees or university commission from filling a single seat)
              </span>
            </div>

            {/* Metric 3: Website Conversion Target */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <label className="text-slate-300">Landing Page Action Rate (NEET Signups)</label>
                <span className="text-emerald-400 font-mono font-bold text-base">
                  {conversionRate.toFixed(1)}%
                </span>
              </div>
              <input 
                type="range" 
                min="0.5" 
                max="10" 
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-700 h-2 rounded-lg appearance-none cursor-pointer"
                id="calc-range-conversion"
              />
              <span className="text-[10px] text-slate-500 block leading-tight">
                (Ratio of visitors registering NEET scores and parent contact info. Custom admission pages yield higher action)
              </span>
            </div>

            {/* Quick trust note */}
            <div className="pt-4 border-t border-slate-700 text-xs text-slate-400 italic">
              *Calculations are conservative estimates modeled on overseas education consultancy benchmarks.
            </div>

          </div>

          {/* Results section (Right) */}
          <div className="bg-gradient-to-br from-blue-950 to-indigo-950 border border-blue-800 p-6 md:p-8 rounded-3xl flex flex-col justify-between text-left relative overflow-hidden">
            
            {/* Visual element backdrop */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/25 rounded-full filter blur-xl"></div>
            
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400 block mb-1">
                Projected Capture Outcomes
              </span>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Your Digital Assets Returns
              </h3>
            </div>

            <div className="space-y-6 my-auto">
              
              {/* Estimated monthly leads */}
              <div className="flex justify-between items-end border-b border-blue-900 pb-3">
                <div>
                  <span className="text-xs text-slate-400 block">Est. High-Intent Leads</span>
                  <span className="text-sm font-bold text-white block mt-0.5">Captured Monthly</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-amber-400 font-mono">
                    {estimatedLeads}
                  </span>
                  <span className="text-xs text-slate-400 font-medium block">Pre-Qualified Aspirants</span>
                </div>
              </div>

              {/* Monthly Revenue Lift */}
              <div className="flex justify-between items-end border-b border-blue-900 pb-3">
                <div>
                  <span className="text-xs text-slate-400 block">Projected Commission Lift</span>
                  <span className="text-sm font-bold text-white block mt-0.5">From Active Conversion</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-emerald-400 font-mono">
                    {formatINR(estimatedRevenue)}
                  </span>
                  <span className="text-xs text-slate-400 font-medium block">Potential Lift / Batch</span>
                </div>
              </div>

              {/* ByteDepth Cost Comparison / Payback factor */}
              <div className="bg-slate-900/50 rounded-xl p-4 border border-blue-900 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block leading-none">ByteDepth Payback Multiplying Factor</span>
                  <span className="text-[11px] text-blue-300 block mt-1">Single asset payoff efficiency</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-blue-400 font-mono block">
                    {roiMultiple}x
                  </span>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">First Month</span>
                </div>
              </div>

            </div>

            {/* Quick call to actions in calculator */}
            <div className="mt-8 pt-4 border-t border-blue-900/50">
              <div className="flex items-start space-x-2 bg-blue-900/40 p-3 rounded-lg">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200">
                  Bytedepth builds systems that achieve payback based on capturing as little as <span className="font-bold underline decoration-blue-400 text-white">one single student seat enrollment</span>. Keep 100% of the recurring profits.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
