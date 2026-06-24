/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Globe, Users, Trophy } from 'lucide-react';

export default function GlobalReach() {
  const [websitesCount, setWebsitesCount] = useState<number>(0);
  const [consultantsCount, setConsultantsCount] = useState<number>(0);
  const [leadsCount, setLeadsCount] = useState<number>(10000);
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasEntered(true);
            if (containerRef.current) {
              observer.unobserve(containerRef.current);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentEl = containerRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasEntered) return;

    // Elegant fast counting up ticker simulations
    const timer1 = setInterval(() => {
      setWebsitesCount(prev => (prev < 47 ? prev + 1 : 47));
    }, 45);

    const timer2 = setInterval(() => {
      setConsultantsCount(prev => (prev < 32 ? prev + 1 : 32));
    }, 60);

    const timer3 = setInterval(() => {
      setLeadsCount(prev => {
        if (prev < 148290) {
          const step = Math.ceil((148290 - prev) / 8);
          return prev + Math.max(95, step);
        } else {
          return 148290;
        }
      });
    }, 20);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [hasEntered]);

  return (
    <section 
      id="global-reach" 
      ref={containerRef}
      className="py-12 bg-slate-900 border-t border-b border-slate-800 text-white font-sans relative overflow-hidden"
    >
      {/* Dynamic graphic grids overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center text-center md:text-left">
          
          {/* Section title header */}
          <div className="space-y-1 md:border-r md:border-slate-800 md:pr-6">
            <span className="text-[10px] font-mono text-blue-400 font-bold uppercase tracking-wider block">
              GLOBAL REACH ASSURANCE
            </span>
            <h3 className="text-lg font-black text-white tracking-tight leading-tight">
              Our Ad-Intake Footprint
            </h3>
            <p className="text-xs text-slate-400 mt-1 leading-normal">
              Verified systems actively recruiting Indian medical aspirants across multiple states.
            </p>
          </div>

          {/* Metric 1: Websites Delivered */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-blue-950 border border-blue-900 text-blue-400 rounded-2xl shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div className="text-left">
              <strong className="text-2xl font-black font-mono tracking-tight text-white block leading-none">
                {websitesCount}+
              </strong>
              <span className="text-xs font-bold text-slate-300 block mt-1">
                Websites Delivered
              </span>
              <span className="text-[10px] text-slate-500 block">
                Custom admission portals
              </span>
            </div>
          </div>

          {/* Metric 2: Active Consultants */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-amber-950 border border-amber-900 text-amber-400 rounded-2xl shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-left">
              <strong className="text-2xl font-black font-mono tracking-tight text-white block leading-none">
                {consultantsCount}+
              </strong>
              <span className="text-xs font-bold text-slate-300 block mt-1">
                Active MBBS Consultants
              </span>
              <span className="text-[10px] text-slate-500 block">
                With filled batch structures
              </span>
            </div>
          </div>

          {/* Metric 3: Student Leads Generated */}
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="p-3 bg-emerald-950 border border-emerald-900 text-emerald-400 rounded-2xl shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="text-left">
              <strong className="text-2xl font-black font-mono tracking-tight text-emerald-400 block leading-none">
                {leadsCount.toLocaleString()}+
              </strong>
              <span className="text-xs font-bold text-slate-300 block mt-1">
                Student Leads Generated
              </span>
              <span className="text-[10px] text-slate-500 block">
                Qualified NEET registrations
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
