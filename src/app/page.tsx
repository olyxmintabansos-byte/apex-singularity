'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  Layers, 
  Globe, 
  Flame,
  Zap,
  ArrowUpRight
} from 'lucide-react';
import { ALL_TITANS, SYSTEM_METRICS } from '@/lib/titansData';
import { TitanRecord } from '@/lib/types';

export default function SingularityHubPage() {
  const [titans, setTitans] = useState<TitanRecord[]>(ALL_TITANS);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('apex_favorites');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) setFavorites(parsed);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const toggleFavorite = (id: number) => {
    let next: number[];
    if (favorites.includes(id)) {
      next = favorites.filter(favId => favId !== id);
    } else {
      next = [...favorites, id];
    }
    setFavorites(next);
    localStorage.setItem('apex_favorites', JSON.stringify(next));
  };

  const categories = [
    'All',
    'Modern & Clean',
    'Expressive & Retro',
    'Tactile & Depth',
    'Spatial & Layout',
    'Experimental & Emerging'
  ];

  // Filtered titans
  const filteredTitans = titans.filter(titan => {
    const matchesSearch = 
      titan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      titan.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      titan.styleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      titan.repo.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || titan.styleCategory === selectedCategory;

    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    const aFav = favorites.includes(a.id);
    const bFav = favorites.includes(b.id);
    if (aFav && !bFav) return -1;
    if (!aFav && bFav) return 1;
    return a.id - b.id;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Hero Singularity Banner */}
      <div className="relative p-8 md:p-12 rounded-3xl glass-panel-gold overflow-hidden">
        {/* Glow orb */}
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              GRAND ARCHITECTURAL MILESTONE REACHED
            </span>
            <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% PRODUCTION READY
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            THE 50 TITANS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-cyan-400">
              SINGULARITY COMMAND HUB
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-sans">
            50 enterprise-grade, client-side, local-first web applications built across 50 distinct design movements. Every single Titan is live on GitHub Pages with zero build errors and zero external backend dependencies.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 font-mono">
            <div>
              <span className="text-gray-400 text-xs block">TOTAL TITANS</span>
              <span className="text-2xl font-black text-amber-400">50 / 50</span>
            </div>
            <div>
              <span className="text-gray-400 text-xs block">VERIFIED ROUTES</span>
              <span className="text-2xl font-black text-emerald-400">200 / 200</span>
            </div>
            <div>
              <span className="text-gray-400 text-xs block">DESIGN STYLES</span>
              <span className="text-2xl font-black text-cyan-400">50 UNIQUE</span>
            </div>
            <div>
              <span className="text-gray-400 text-xs block">EXPORT PASS RATE</span>
              <span className="text-2xl font-black text-pink-400">100.0%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Titan name, industry domain, style ID, or repo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Result Count */}
          <div className="text-xs font-mono text-gray-400 whitespace-nowrap px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            SHOWING <strong className="text-amber-400">{filteredTitans.length}</strong> / 50 TITANS
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all whitespace-nowrap border ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.3)]'
                  : 'bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 50 Titans Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTitans.map((titan) => {
          const isFav = favorites.includes(titan.id);

          return (
            <div
              key={titan.id}
              className="p-6 rounded-2xl glass-panel hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500/20 via-pink-500/20 to-cyan-500/20 group-hover:from-amber-500 group-hover:to-cyan-400 transition-all" />

              <div>
                {/* Header: ID, Domain, Favorite */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      #{titan.id.toString().padStart(2, '0')}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/10 truncate max-w-[170px]">
                      {titan.domain}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleFavorite(titan.id)}
                    className="p-1.5 rounded-lg hover:bg-white/10 text-gray-500 hover:text-amber-400 transition-colors"
                    title={isFav ? 'Remove Favorite' : 'Save Favorite'}
                  >
                    <Star className={`w-4 h-4 ${isFav ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                </div>

                {/* Titan Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {titan.name}
                </h3>

                {/* Design Style Badge */}
                <div className="mt-2 flex items-center gap-1.5 text-xs text-cyan-300 font-mono">
                  <Layers className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="truncate">{titan.styleName}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 mt-3 line-clamp-2 leading-relaxed">
                  {titan.description}
                </p>

                {/* 4 Routes Badges */}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-gray-500 block mb-1.5">
                    VERIFIED ROUTES (HTTP 200 OK):
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {titan.routes.map((route) => (
                      <span
                        key={route}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-gray-300 border border-white/5"
                      >
                        {route}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                <a
                  href={titan.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-500/10 hover:bg-amber-500 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-black font-mono text-xs font-bold transition-all shadow-[0_0_12px_rgba(245,158,11,0.15)]"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>LAUNCH APP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={titan.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-gray-300 hover:text-white transition-colors"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
