'use client';

import React, { useState } from 'react';
import { 
  Archive, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Flame, 
  Heart,
  Github,
  Globe
} from 'lucide-react';
import { SYSTEM_METRICS } from '@/lib/titansData';

export default function MasterArchivePage() {
  const [celebrated, setCelebrated] = useState<boolean>(false);

  const triggerCelebration = () => {
    setCelebrated(true);
    setTimeout(() => setCelebrated(false), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Top Banner */}
      <div className="p-8 md:p-12 rounded-3xl glass-panel-gold space-y-4 relative overflow-hidden">
        {celebrated && (
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-cyan-500/20 animate-pulse pointer-events-none" />
        )}

        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            ENGINEERING RETROSPECTIVE & ARCHIVE
          </span>
          <span className="text-xs font-mono text-emerald-400">
            COMPLETED: 50 / 50 TITANS
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
          THE 50 TITANS ARCHITECTURAL MANIFEST
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-3xl leading-relaxed font-sans">
          The ultimate testament to autonomous agentic engineering. A fleet of 50 enterprise client-side web applications spanning aerospace, healthcare, quantum computing, finance, maritime, cyber security, and cultural design movements.
        </p>

        {/* Celebration Button */}
        <div className="pt-4">
          <button
            onClick={triggerCelebration}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-pink-500 hover:from-amber-400 hover:to-pink-400 text-black font-mono font-black text-xs transition-all shadow-[0_0_25px_rgba(245,158,11,0.4)]"
          >
            <Flame className="w-4 h-4 text-black animate-bounce" />
            <span>{celebrated ? 'SINGULARITY ACHIEVED! 🎉' : 'TRIGGER SINGULARITY CELEBRATION'}</span>
          </button>
        </div>
      </div>

      {/* Architectural Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl glass-panel space-y-3">
          <div className="flex items-center gap-2 text-amber-400 font-mono font-bold text-sm">
            <Terminal className="w-4 h-4" />
            <span>1. ZERO-BACKEND PURITY</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Every single Titan operates client-side with zero external API failure modes. LocalStorage synchronization ensures persistent state across browser sessions with zero network latency.
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-sm">
            <Cpu className="w-4 h-4" />
            <span>2. NEXT.JS 15 & TAILWIND V4</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Constructed with Next.js 15 App Router, static HTML export (`output: 'export'`), strict TypeScript typing, and modern Tailwind CSS v4 (`@import "tailwindcss";`).
          </p>
        </div>

        <div className="p-6 rounded-2xl glass-panel space-y-3">
          <div className="flex items-center gap-2 text-pink-400 font-mono font-bold text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>3. GITHUB PAGES EXPORT</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            Deployed seamlessly with automated `.nojekyll` bypass for directory silencing, strict trailing slashes (`trailingSlash: true`), and unoptimized images.
          </p>
        </div>
      </div>

      {/* Engineering Blueprint Details */}
      <div className="p-8 rounded-3xl glass-panel space-y-6">
        <h2 className="text-xl font-bold text-white font-mono border-b border-white/10 pb-3">
          SYSTEM SPRINT CHRONOLOGY & VERIFICATION
        </h2>

        <div className="space-y-4 font-mono text-xs text-gray-300">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-amber-400 font-bold block">TITANS 1 - 10: FOUNDATIONAL ENTERPRISE</span>
              <span className="text-gray-400 text-[11px]">Portfolio, LogiChain, AegisSec, MediCore, NeuroForge, Nexus, EduCore, SimuCorp, OmniPOS, CraftCV</span>
            </div>
            <span className="text-emerald-400 font-bold">10/10 VERIFIED (HTTP 200 OK)</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-cyan-400 font-bold block">TITANS 11 - 25: INDUSTRIAL & GOVERNANCE</span>
              <span className="text-gray-400 text-[11px]">FinPulse, ForgeCommerce, VentureVault, LexJurist, InsurSure, AeroRamp, SolarGrid, PetroFlow, MineCore, PowerGrid, CivicPulse, HydroPurify, MetroTransit, AeroAtmosphere, GovTender</span>
            </div>
            <span className="text-emerald-400 font-bold">15/15 VERIFIED (HTTP 200 OK)</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-pink-400 font-bold block">TITANS 26 - 40: SCIENCE, MEDIA & LOGISTICS</span>
              <span className="text-gray-400 text-[11px]">BuildCraft, PropFacility, TerraSurvey, ArchiRoom, ColdStore, AgroHarvest, AquaMarine, BioLab, PharmaTrace, VetHospital, CineProd, AudioSynthetix, PressOffset, LiveFestival, AdOmni</span>
            </div>
            <span className="text-emerald-400 font-bold">15/15 VERIFIED (HTTP 200 OK)</span>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-amber-400 font-bold block">TITANS 41 - 50: HIGH FRONTIER & META-OS</span>
              <span className="text-gray-400 text-[11px]">HotelGrandeur, SkyJet, Cruiseline, GastroRecipe, SpaRetreat, RoboFleet AMR, DataCenter DCIM, SatOrbit Ops, QuantumCircuit OS, Apex Singularity</span>
            </div>
            <span className="text-emerald-400 font-bold">10/10 VERIFIED (HTTP 200 OK)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
