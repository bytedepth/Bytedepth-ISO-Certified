/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Lock, Award, CheckCircle2, Star } from 'lucide-react';

export default function TrustSection() {
  return (
    <section id="trust-security" className="py-20 bg-slate-50 border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Verified Regulatory & Security Benchmarks
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
            Security That Protects. Compliance That Convinces.
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            Bytedepth builds production-ready systems designed for professional standards. Our processes are audited, secure, and measured for high conversion velocity.
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: ISO Certified */}
          <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-200 shadow-sm p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold tracking-tight shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-slate-800">ISO 9001:2015 Agency</h3>
                  <span className="text-[9px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100 font-mono font-bold tracking-wide">APPROVED</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">Registry Cert Ref: BD-QA-2023</p>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our coding workflows, sprint management, server provisioning, and customer service follow rigorous international management systems. Every prototype is audited against a 38-point design conformity checklist before delivery.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Full compliance adherence</span>
            </div>
          </div>

          {/* Card 2: SSL & Encryption */}
          <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-200 shadow-sm p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold tracking-tight shadow-inner group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-slate-800">SSL Bank-Grade Gateway</h3>
                  <span className="text-[9px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100 font-mono font-bold tracking-wide">SECURE</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">TLS 1.3 / Razorpay Merchant Integration</p>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                All booking transaction funnels are fully encrypted using military-grade SSL standards. Bytedepth processes all secure bookings directly on verified official Razorpay nodes, keeping critical billing credentials entirely private.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>No cards processed locally</span>
            </div>
          </div>

          {/* Card 3: 500+ Sprints Deliveries */}
          <div className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-200 shadow-sm p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold tracking-tight shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Star className="w-6 h-6 fill-emerald-50/10 group-hover:fill-emerald-400/20" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-lg text-slate-800">500+ Live Operations</h3>
                  <span className="text-[9px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-100 font-mono font-bold tracking-wide">ACTIVE</span>
                </div>
                <p className="text-xs text-slate-400 font-mono">Validated Client Performance Tracker</p>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                With a perfect 98.4% timely deliverability score across India and globally, our team has built bespoke sales funnels, portfolio landing pages, and interactive consultation apps for Chartered Accountants, corporate firms, and health doctors.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>24-72h production contract</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
