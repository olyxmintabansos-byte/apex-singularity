'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  Palette, 
  Sparkles, 
  ExternalLink, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { ALL_TITANS } from '@/lib/titansData';

export default function StylesCodexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Modern & Clean',
    'Expressive & Retro',
    'Tactile & Depth',
    'Spatial & Layout',
    'Experimental & Emerging'
  ];

  const filtered = selectedCategory === 'All' 
    ? ALL_TITANS 
    : ALL_TITANS.filter(t => t.styleCategory === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Top Banner */}
      <div className="p-8 rounded-3xl glass-panel-gold space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            DESIGN ENCYCLOPEDIA // 50 MOVEMENTS
          </span>
          <span className="text-xs font-mono text-cyan-400">
            AESTHETIC CODEX & COLOR HARMONY
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white">
          THE 50 MASTER DESIGN STYLES CODEX
        </h1>

        <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">
          The comprehensive design taxonomy powering The 50 Titans. From Swiss grid typography and Brutalist SCADA to Neumorphism, Y2K Cyber, Memphis, and Grand Architectural Synthesis.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 pt-4 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all border whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black border-amber-400'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Styles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((titan) => (
          <div
            key={titan.id}
            className="p-6 rounded-2xl glass-panel hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className="font-bold text-amber-400">
                  STYLE #{titan.styleId}
                </span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                  {titan.styleCategory}
                </span>
              </div>

              <h2 className="text-lg font-bold text-white mb-1">
                {titan.styleName}
              </h2>

              <div className="text-xs font-mono text-cyan-300 mb-3">
                IMPLEMENTED BY: <strong className="text-white">{titan.name}</strong>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                {titan.description}
              </p>
            </div>

            {/* Bottom link to view Titan live */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-gray-500">
                DOMAIN: {titan.domain}
              </span>

              <a
                href={titan.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 hover:text-cyan-300 transition-colors font-bold"
              >
                <span>OPEN TITAN #{titan.id}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
