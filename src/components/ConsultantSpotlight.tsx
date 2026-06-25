/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Sparkles, Award, ShieldCheck, Heart, Youtube } from 'lucide-react';

export default function ConsultantSpotlight() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden font-sans border-t border-slate-800">
      {/* Decorative ambient blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-mono bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 tracking-widest font-bold inline-block mb-3">
            ★ PREMIUM CONSULTANT SPOTLIGHT
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Designed for Elite Student Recruitment
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Take a video tour of our custom medical education portals. We engineer premium brand experiences that command authority, optimize student conversion, and assure regulatory compliance.
          </p>
        </div>

        {/* Video Player & Overlay Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Video Wrapper */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl shadow-blue-500/5 group">
              
              {/* YouTube Embedded Frame */}
              <iframe
                className="w-full h-full border-0 absolute inset-0"
                src="https://www.youtube.com/embed/6i2MINinyzQ?si=Wo6EITNE7UM2ZZV4&rel=0&controls=0"
                title="ByteDepth Premium Web Systems Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>

              {/* Decorative Subtle Top Bar inside frame */}
              <div className="absolute top-3 left-3 z-20 pointer-events-none flex items-center gap-1.5 bg-slate-950/75 backdrop-blur border border-slate-800/80 px-2.5 py-1 rounded-full">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                <span className="text-[9px] font-bold font-mono tracking-wider uppercase text-blue-400 flex items-center gap-1">
                  <Youtube className="w-2.5 h-2.5 text-rose-500 fill-rose-500" />
                  Live Walkthrough Video
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 px-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <p className="text-xs text-slate-400">
                Click play above to watch how our student acquisition workflows increase admissions.
              </p>
            </div>
          </div>

          {/* Right Column: Key High-Value Benefits */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Why Elite Agencies Choose ByteDepth Portals
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We don't build generic corporate templates. Our platforms are designed specifically for overseas admissions agents to nurture, filter, and secure student commitments.
            </p>

            <div className="space-y-4 pt-4">
              
              {/* Feature Card 1 */}
              <div className="bg-slate-850 border border-slate-800/80 p-4.5 rounded-2xl flex items-start gap-4 hover:border-blue-500/40 transition">
                <div className="bg-blue-500/10 text-blue-400 p-2 rounded-xl shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                    Proprietary Conversion Elements
                  </h4>
                  <p className="text-xs font-semibold text-white mt-1">
                    NEET score admission routers & real-time foreign university eligibility wizards built right in.
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-slate-850 border border-slate-800/80 p-4.5 rounded-2xl flex items-start gap-4 hover:border-blue-500/40 transition">
                <div className="bg-blue-500/10 text-blue-400 p-2 rounded-xl shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                    Compliance Assurance Standard
                  </h4>
                  <p className="text-xs font-semibold text-white mt-1">
                    ISO 9001 quality frameworks built into all content structures to build immediate credibility with parents.
                  </p>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-slate-850 border border-slate-800/80 p-4.5 rounded-2xl flex items-start gap-4 hover:border-blue-500/40 transition">
                <div className="bg-blue-500/10 text-blue-400 p-2 rounded-xl shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                    Durable Enterprise Infrastructure
                  </h4>
                  <p className="text-xs font-semibold text-white mt-1">
                    Lightning fast static content combined with secure private storage layers ensuring parent data remains completely confidential.
                  </p>
                </div>
              </div>

            </div>

            {/* Micro proof line */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 pl-1">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Recommended by 45+ medical admissions consultants across India</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
