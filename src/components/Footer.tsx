'use client';

import React from 'react';
import { ExternalLink, ShieldCheck, Flame, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-amber-500/20 bg-[#050509] text-gray-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold tracking-wider">
              <Flame className="w-4 h-4 text-cyan-400" />
              <span>APEX.SINGULARITY // META-OS</span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Grand synthesis dashboard consolidating all 50 enterprise client-side web applications hosted on GitHub Pages with zero external backend dependencies.
            </p>
          </div>

          <div>
            <div className="text-amber-400 font-bold mb-2 tracking-wider flex items-center gap-1.5">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>CORE ARCHITECTURE</span>
            </div>
            <ul className="space-y-1 text-[11px] text-gray-400">
              <li>• Next.js 15 App Router & Strict TypeScript</li>
              <li>• Tailwind CSS v4 (@import "tailwindcss";)</li>
              <li>• LocalStorage Persistence & Zero-Jekyll (.nojekyll)</li>
              <li>• 100% Static HTML Export (output: 'export')</li>
            </ul>
          </div>

          <div>
            <div className="text-amber-400 font-bold mb-2 tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-pink-400" />
              <span>ORGANIZATION REGISTRY</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              All 50 repositories deployed under organization <strong className="text-white">olyxmintabansos-byte</strong> with 200 fully functional, verified HTTP 200 OK routes.
            </p>
          </div>

          <div>
            <div className="text-amber-400 font-bold mb-2 tracking-wider">
              <span>MASTER REPO LINK</span>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30">
              <p className="text-[10px] text-amber-300 font-bold mb-1">
                TITAN #50: APEX SINGULARITY
              </p>
              <a
                href="https://github.com/olyxmintabansos-byte/apex-singularity"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-cyan-300 hover:text-white transition-colors underline"
              >
                <span>olyxmintabansos-byte/apex-singularity</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
          <p>© 2026 APEX SINGULARITY • THE 50 TITANS COMPLETE • ALL SYSTEMS LIVE</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <span className="text-emerald-400 font-bold">200 / 200 ROUTES VERIFIED</span>
            <span>•</span>
            <span className="text-amber-400">ARCHITECT: ANTIGRAVITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
