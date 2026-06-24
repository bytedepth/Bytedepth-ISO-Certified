/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  Database, 
  Mail, 
  Table2, 
  Zap, 
  Share2, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeftRight,
  Sparkles,
  Link2
} from 'lucide-react';
import { showToast } from './Toast';

interface IntegrationItem {
  id: string;
  name: string;
  logoColor: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  syncMechanism: string;
  benefit: string;
  setupTime: string;
}

export default function PartnersIntegrations() {
  const [selectedToolId, setSelectedToolId] = useState<string>('whatsapp');

  const integrations: IntegrationItem[] = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Business API',
      logoColor: 'text-emerald-500',
      bgColor: 'bg-emerald-50/50',
      borderColor: 'border-emerald-200/60',
      textColor: 'text-emerald-800',
      icon: MessageSquare,
      description: 'Official API integration that fires personalized country brochures and video links within seconds of student inquiry registration.',
      syncMechanism: 'Automated 5-Sec Auto-Responder & Catalog Broadcast',
      benefit: 'Instantly double response rates when parent & student interest is peak.',
      setupTime: 'Included (Plug-and-play with your API key)'
    },
    {
      id: 'zoho',
      name: 'Zoho CRM',
      logoColor: 'text-red-500',
      bgColor: 'bg-red-50/50',
      borderColor: 'border-red-200/60',
      textColor: 'text-red-800',
      icon: Database,
      description: 'Full automated synchronization of prospective MBBS leads directly into your Zoho leads modules, preserving all target country and budget filters.',
      syncMechanism: 'Real-time REST API Webhook Mapping',
      benefit: 'Eliminate duplicate entries and assign students to counselors instantly.',
      setupTime: '24 Hours (Custom mapping included)'
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      logoColor: 'text-yellow-500',
      bgColor: 'bg-amber-50/50',
      borderColor: 'border-amber-200/60',
      textColor: 'text-amber-800',
      icon: Mail,
      description: 'Drip-feed highly informative, styled country brochures, MCI eligibility rules, and foreign medical hostel tours directly to parent inboxes.',
      syncMechanism: 'Automated List Segmentation & Campaign Sync',
      benefit: 'Warm up parents through structured, high-authority email guidance.',
      setupTime: 'Included (Configured in standard setups)'
    },
    {
      id: 'gsheets',
      name: 'Google Sheets',
      logoColor: 'text-green-600',
      bgColor: 'bg-green-50/50',
      borderColor: 'border-green-200/60',
      textColor: 'text-green-800',
      icon: Table2,
      description: 'Instant spreadsheet synchronization logging students names, NEET qualification status, PCB percentages, and direct parent mobile numbers.',
      syncMechanism: 'Instant Secure OAuth Sync (Fail-safe backup)',
      benefit: 'Absolute zero latency backup of your primary lead intake lists.',
      setupTime: 'Instant (Zero configuration required)'
    },
    {
      id: 'hubspot',
      name: 'HubSpot CRM',
      logoColor: 'text-orange-500',
      bgColor: 'bg-orange-50/50',
      borderColor: 'border-orange-200/60',
      textColor: 'text-orange-800',
      icon: Database,
      description: 'Track custom pipeline deals mapped to student visa progress. Monitor counseling calls, parent interactions, and target university fees in one spot.',
      syncMechanism: 'Two-Way Contact Sync Webhooks',
      benefit: 'Keep track of absolute deal progression from lead click to campus arrivals.',
      setupTime: '48 Hours (Premium configuration assistance)'
    },
    {
      id: 'zapier',
      name: 'Zapier & Webhooks',
      logoColor: 'text-orange-600',
      bgColor: 'bg-indigo-50/50',
      borderColor: 'border-indigo-200/60',
      textColor: 'text-indigo-800',
      icon: Zap,
      description: 'Connect your high-converting MBBS website with 5,000+ online tools. Send custom SMS alerts, push Telegram notifications, or coordinate Slack channels.',
      syncMechanism: 'Custom Structured JSON Webhooks',
      benefit: 'Unlimited flexibility to build your own custom automations.',
      setupTime: 'Instant (Developer ready endpoints)'
    }
  ];

  const activeTool = integrations.find(item => item.id === selectedToolId) || integrations[0];

  const handleTestSync = (toolName: string) => {
    showToast(
      'API Webhook Live Simulated!',
      `Successfully tested secure student metadata handover to ${toolName}. Leads mapped safely.`,
      'success',
      4000
    );
  };

  return (
    <section id="integrations" className="py-20 bg-slate-50 border-b border-slate-200/60 font-sans relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-blue-100/45 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            <Link2 className="w-4 h-4 text-blue-600" />
            ENTERPRISE PIPELINE ADAPTABILITY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
            Unified Partners & CRM Integrations
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Your web presence should not exist in isolation. We bridge your high-converting MBBS Abroad student acquisition portal with your favorite operational tools for absolute lead security.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Selector Grid (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <div>
              <div className="border-b border-slate-100 pb-3 mb-4">
                <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">
                  Select System Integration
                </span>
                <h3 className="text-sm font-bold text-slate-800 uppercase mt-0.5">
                  Pre-Configured API Handshakes
                </h3>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
                {integrations.map((tool) => {
                  const ToolIcon = tool.icon;
                  const isSelected = tool.id === selectedToolId;

                  return (
                    <button
                      key={tool.id}
                      onClick={() => setSelectedToolId(tool.id)}
                      className={`w-full text-left p-3 rounded-xl border flex items-center gap-3 transition cursor-pointer ${
                        isSelected
                          ? `${tool.bgColor} ${tool.borderColor} border shadow-sm ring-1 ring-blue-500/10`
                          : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                      }`}
                      id={`integration-btn-${tool.id}`}
                    >
                      <div className={`p-2 rounded-lg bg-white border border-slate-200/50 shadow-inner ${tool.logoColor} shrink-0`}>
                        <ToolIcon className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <span className={`text-xs font-bold block leading-tight ${isSelected ? tool.textColor : 'text-slate-700'}`}>
                          {tool.name}
                        </span>
                        <span className="text-[9px] text-slate-400 block font-mono truncate">
                          {tool.setupTime}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs text-slate-400 leading-normal bg-slate-50/50 p-3 rounded-xl">
              💡 <strong className="text-slate-600">No coding required:</strong> Our standard deployment includes complete OAuth authorization support for Google Sheets and direct integration setups with your existing CRM licenses.
            </div>
          </div>

          {/* Right Panel: Active Integration Showcase (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/95 shadow-sm rounded-3xl overflow-hidden flex flex-col justify-between">
            
            {/* Display header detailing the sync flow */}
            <div className="bg-slate-50 border-b border-slate-100 p-5 px-6 md:px-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg bg-white border border-slate-200/80 ${activeTool.logoColor}`}>
                  <activeTool.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    {activeTool.name} Pipeline Flow
                  </h4>
                  <span className="text-[9px] text-slate-400 block leading-none mt-0.5 font-semibold">
                    SECURE SECURE-SOCKET WEBHOOK SYNCHRONIZATION
                  </span>
                </div>
              </div>
              <span className="text-[10px] bg-emerald-50 border border-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold font-mono">
                API READY
              </span>
            </div>

            {/* Visual Flow Simulator Area */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-center space-y-8">
              
              {/* Interactive pipeline graphic */}
              <div className="bg-slate-50 border border-slate-200/50 p-6 rounded-2xl relative">
                <div className="grid grid-cols-11 gap-2 items-center text-center relative z-10">
                  
                  {/* Left Bubble: Student Portal */}
                  <div className="col-span-4 bg-white border border-slate-200 p-3.5 rounded-xl shadow-sm text-left">
                    <span className="text-[8px] font-mono text-blue-600 font-bold block uppercase leading-none mb-1">Intake Node</span>
                    <strong className="text-[11px] text-slate-800 font-extrabold block tracking-tight">MBBS Admissions Portal</strong>
                    <span className="text-[9px] text-slate-400 font-mono block mt-1">Intakes: Desired Country + NEET Score</span>
                  </div>

                  {/* Middle Connection Flow Indicator */}
                  <div className="col-span-3 flex flex-col items-center justify-center">
                    <span className="text-[9px] text-slate-400 font-mono font-bold uppercase tracking-wider mb-1">
                      API SYNC
                    </span>
                    <div className="w-full flex items-center justify-center relative">
                      <div className="h-[2px] w-full bg-blue-100 absolute top-1/2 -translate-y-1/2 left-0 right-0"></div>
                      <motion.div 
                        animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        className="w-3 h-3 bg-blue-600 rounded-full relative z-10"
                      />
                    </div>
                    <span className="text-[9px] text-emerald-600 font-mono font-extrabold mt-1">
                      TLS 1.3
                    </span>
                  </div>

                  {/* Right Bubble: Target Tool */}
                  <div className="col-span-4 bg-slate-900 border border-slate-850 p-3.5 rounded-xl text-left text-white shadow-xl">
                    <span className="text-[8px] font-mono text-emerald-400 font-bold block uppercase leading-none mb-1">Terminal Node</span>
                    <strong className="text-[11px] font-bold block tracking-tight truncate">{activeTool.name}</strong>
                    <span className="text-[9px] text-slate-400 font-mono block mt-1 truncate">Status: Connected ✓</span>
                  </div>

                </div>

                {/* Simulated Lead Payload Box */}
                <div className="mt-5 bg-white border border-slate-200/60 p-3.5 rounded-xl text-left space-y-1.5 font-mono text-[10px] text-slate-500 shadow-sm relative">
                  <div className="absolute top-2.5 right-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">Incoming Lead payload</span>
                  </div>
                  <p className="text-slate-800 font-bold"><span className="text-blue-500">Student:</span> Aryan Patel (Pune)</p>
                  <p><span className="text-blue-500">NEET Status:</span> Qualified (324 Marks)</p>
                  <p><span className="text-blue-500">Intake Choice:</span> study-mbbs-{selectedToolId === 'whatsapp' ? 'russia' : 'georgia'}</p>
                  <p className="truncate"><span className="text-blue-500">API Action:</span> {activeTool.syncMechanism}</p>
                </div>
              </div>

              {/* Detailed Tool Benefits */}
              <div className="space-y-4 text-left">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-800">
                    Integration Feature Description
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {activeTool.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5 pt-2 border-t border-slate-100">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">
                      Core Business Advantage
                    </span>
                    <strong className="text-xs text-slate-700 font-bold mt-1 block">
                      {activeTool.benefit}
                    </strong>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">
                      Sync Frequency
                    </span>
                    <strong className="text-xs text-slate-700 font-bold mt-1 block">
                      Real-time webhook handshakes
                    </strong>
                  </div>
                </div>
              </div>

            </div>

            {/* Test Connection Button Panel */}
            <div className="bg-slate-50 border-t border-slate-100 p-4 px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-slate-400 font-medium">
                Want to live-test this connection with your own test data?
              </span>
              <button
                onClick={() => handleTestSync(activeTool.name)}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4.5 py-2 rounded-lg flex items-center gap-1.5 transition text-center cursor-pointer select-none"
              >
                <span>Simulate Webhook Delivery</span>
                <ArrowLeftRight className="w-3.5 h-3.5 text-blue-400" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
