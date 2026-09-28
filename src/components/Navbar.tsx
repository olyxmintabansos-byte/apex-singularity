'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Flame, 
  Layers, 
  Activity, 
  Archive, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'SINGULARITY HUB', icon: Flame, badge: '50 TITANS' },
    { href: '/styles/', label: '50 STYLES CODEX', icon: Layers, badge: 'CATALOGUE' },
    { href: '/observatory/', label: 'HEALTH OBSERVATORY', icon: Activity, badge: '200 ROUTES' },
    { href: '/manifest/', label: 'MASTER ARCHIVE', icon: Archive, badge: '100% SPEC' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-[#06060c]/90 backdrop-blur-xl">
      {/* Top gold & cyan energetic beam */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-500 via-pink-500 to-cyan-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 group-hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Flame className="w-6 h-6 text-amber-400 group-hover:text-cyan-400 transition-colors animate-pulse" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-300 to-cyan-300 glow-gold">
                  APEX<span className="text-white">.SINGULARITY</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/40 font-bold">
                  META-OS #50
                </span>
              </div>
              <p className="text-[10px] text-gray-400 font-mono tracking-tight">
                THE 50 TITANS GRAND ARCHITECTURAL SYNTHESIS
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all border ${
                    isActive
                      ? 'bg-amber-950/50 text-amber-300 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                      : 'text-gray-400 border-transparent hover:text-white hover:bg-white/5 hover:border-white/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-gray-500'}`} />
                  <span>{item.label}</span>
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-sans ${
                    isActive ? 'bg-amber-500 text-black font-extrabold' : 'bg-white/10 text-gray-400'
                  }`}>
                    {item.badge}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Global Status Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="hidden sm:inline font-bold">50/50 TITANS LIVE</span>
              <span className="sm:hidden font-bold">50/50</span>
            </div>

            <a
              href="https://github.com/orgs/olyxmintabansos-byte/repositories"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-amber-300 hover:border-amber-400 transition-colors"
              title="GitHub Organization Repositories"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
