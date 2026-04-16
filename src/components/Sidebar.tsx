import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  FolderOpen, 
  FileText, 
  Settings, 
  LogOut,
  Cloud,
  Zap,
  UserCircle
} from 'lucide-react';
import { View } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  isDark: boolean;
}

export default function Sidebar({ currentView, onViewChange, isDark }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'reports', label: 'Reports', icon: FileText },
  ] as const;

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-surface flex-col py-8 z-50 border-r border-outline">
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <Cloud className="text-on-primary w-5 h-5 fill-current" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-primary leading-none tracking-[0.2em] uppercase">Aethelgard</h2>
          <p className="uppercase tracking-widest text-[9px] font-bold text-on-surface-variant mt-1.5">Sovereign Tier</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as View)}
            className={cn(
              "w-full flex items-center gap-3 px-6 py-3 transition-all duration-200 group",
              currentView === item.id 
                ? "bg-primary/5 text-on-surface border-l-2 border-primary" 
                : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
            )}
          >
            <item.icon className={cn("w-4 h-4", currentView === item.id && "text-primary")} />
            <span className="uppercase tracking-[0.1em] text-[11px] font-semibold">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-6 mt-auto space-y-4">
        <div className="bg-surface-container-high p-5 rounded-xl mb-4 border border-outline">
          <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-3">Asset Allocation</p>
          <div className="h-1 w-full bg-background rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-primary"></div>
          </div>
          <button className="mt-5 w-full bg-primary text-on-primary py-3 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg shadow-primary/10 active:scale-95 transition-transform">
            Optimize Portfolio
          </button>
        </div>

        <div className="pt-6 border-t border-outline space-y-1">
          <button 
            onClick={() => onViewChange('settings')}
            className={cn(
              "w-full flex items-center gap-3 py-2 transition-all duration-200",
              currentView === 'settings' ? "text-primary" : "text-on-surface-variant hover:text-on-surface"
            )}
          >
            <Settings className="w-4 h-4" />
            <span className="uppercase tracking-widest text-[10px] font-bold">Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 text-on-surface-variant hover:text-on-surface py-2 transition-all duration-200">
            <LogOut className="w-4 h-4" />
            <span className="uppercase tracking-widest text-[10px] font-bold">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
