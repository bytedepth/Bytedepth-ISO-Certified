/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';

export default function ConsultantSpotlight() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => console.log('Video play error:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

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
            Take a 60-second tour of our custom medical education portals. We engineer premium brand experiences that command authority, optimize student conversion, and assure regulatory compliance.
          </p>
        </div>

        {/* Video Player & Overlay Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Video Wrapper */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl group">
              
              {/* Loop Video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-102"
                src="https://assets.mixkit.co/videos/preview/mixkit-corporate-office-with-colleagues-discussing-work-41857-large.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

              {/* Black Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none"></div>

              {/* Dynamic status tag */}
              <div className="absolute top-4 left-4 z-25 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold font-mono tracking-wider uppercase text-emerald-400">
                  AUTO-LOOPING DEMO
                </span>
              </div>

              {/* Mute Tag Overlay */}
              {isMuted && (
                <div className="absolute top-4 right-4 z-25 bg-blue-600/90 text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                  🔇 Muted by Default
                </div>
              )}

              {/* Video Controls overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
                
                {/* Play/Pause Button */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-white text-slate-950 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-all shadow-lg active:scale-95 cursor-pointer"
                    aria-label={isPlaying ? 'Pause Spotlight' : 'Play Spotlight'}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 fill-current" />
                    ) : (
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    )}
                  </button>

                  <div className="hidden sm:block">
                    <span className="text-xs font-bold text-white block drop-shadow-sm">
                      Interactive Consultant Walkthrough
                    </span>
                    <span className="text-[10px] text-slate-300 block drop-shadow-sm">
                      Watch how our medical recruitment portal manages student leads.
                    </span>
                  </div>
                </div>

                {/* Sound Button */}
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 rounded-full bg-slate-900/80 border border-slate-700 hover:bg-slate-800 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-slate-400" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </button>
              </div>

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
