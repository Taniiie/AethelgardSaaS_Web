import React from 'react';
import { Bell, Settings, Search, HelpCircle, Moon, Sun } from 'lucide-react';
import { View } from '../types';

interface TopBarProps {
  currentView: View;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function TopBar({ currentView, isDark, onToggleTheme }: TopBarProps) {
  const viewLabels: Record<View, string> = {
    dashboard: 'Dashboard',
    analytics: 'Analytics',
    team: 'Team',
    projects: 'Projects',
    reports: 'Reports',
    settings: 'Settings',
  };

  return (
    <nav className="fixed top-0 right-0 left-0 lg:left-64 z-40 bg-surface/80 backdrop-blur-xl flex items-center justify-between px-6 py-4 border-b border-outline">
      <div className="flex items-center gap-8">
        <span className="text-sm font-bold tracking-[0.15em] text-on-surface uppercase">Aethelgard Suite</span>
        <div className="hidden md:flex items-center gap-6">
          {['Portfolio', 'Analytics', 'Markets', 'Treasury'].map((label) => (
            <button
              key={label}
              className={`text-[11px] uppercase tracking-widest font-bold transition-colors duration-300 ${
                viewLabels[currentView] === label 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant w-3.5 h-3.5" />
          <input 
            type="text" 
            placeholder="Search assets..." 
            className="bg-background border border-outline rounded-lg pl-10 pr-4 py-2 text-xs w-64 focus:ring-1 focus:ring-primary text-on-surface"
          />
        </div>

        <div className="relative group">
          <Bell className="w-4 h-4 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-primary rounded-full border border-surface"></span>
        </div>
        
        <div className="w-8 h-8 rounded-lg overflow-hidden border border-outline p-0.5">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIcYieyDaHeKJWtdsPygNf230KHUoSCwe9h25D7AYmcxKLkEvWN7G3B2ZnR2qiEAx2w_zvHem2oJ_nvnyGohV1Zf-Baj0JmT1tiKpS7m5ykoP73xVOfrKPxG-mXoT7QyX0Qu3Wv1SX1Hoe_ADuKQJEnFUJIEcTAOtdtff_CaInf-k2mKNYlt1J7Xc-6MS5CZ-yuxLZ4z_YAo_xjz5rG9QAShKbc0p9mkOOFnRuwS-L7ZHkURRuxtT6DSz7cmgmQZxSM8Ykn2W_tO0" 
            alt="User profile" 
            className="w-full h-full object-cover rounded-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </nav>
  );
}
