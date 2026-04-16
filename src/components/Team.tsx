import React from 'react';
import { Search, Filter, Plus, MoreVertical, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { MOCK_TEAM } from '../constants';
import { motion } from 'motion/react';

export default function Team() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Organization</p>
          <h1 className="text-6xl font-light tracking-tighter text-on-surface leading-none">Team Directory</h1>
          <p className="text-on-surface-variant mt-3 text-sm">Manage your organization's members and their access levels.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-lg text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-primary/10 hover:scale-105 transition-transform">
            <Plus className="w-4 h-4" />
            Invite Member
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-surface p-4 rounded-xl border border-outline">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search by name, role, or department..." 
            className="w-full bg-background border border-outline rounded-lg pl-12 pr-4 py-3 text-xs focus:ring-1 focus:ring-primary text-on-surface"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 bg-background rounded-lg text-[11px] font-bold uppercase tracking-widest text-on-surface border border-outline">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex-1 sm:flex-none px-5 py-3 bg-background rounded-lg text-[11px] font-bold uppercase tracking-widest text-on-surface border border-outline">
            Department
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {MOCK_TEAM.map((member, index) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-surface rounded-xl border border-outline overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
          >
            <div className="h-24 bg-surface-container-high relative">
              <div className="absolute top-4 right-4">
                <button className="p-2 bg-black/20 backdrop-blur-md rounded-lg text-white hover:bg-black/40 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="px-6 pb-8 -mt-12 relative z-10 text-center">
              <div className="relative inline-block">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-xl object-cover border-4 border-surface shadow-xl"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-surface ${
                  member.status === 'Active' ? 'bg-emerald-500' : 
                  member.status === 'Away' ? 'bg-amber-500' : 'bg-neutral-500'
                }`}></div>
              </div>
              
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-on-surface">{member.name}</h3>
              <p className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] mt-1.5">{member.role}</p>
              <p className="text-xs text-on-surface-variant mt-1">{member.department}</p>

              <div className="mt-8 flex items-center justify-center gap-2">
                <button className="p-3 bg-background border border-outline rounded-lg text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                  <Mail className="w-4 h-4" />
                </button>
                <button className="p-3 bg-background border border-outline rounded-lg text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                  <Phone className="w-4 h-4" />
                </button>
                <button className="p-3 bg-background border border-outline rounded-lg text-on-surface-variant hover:text-primary hover:border-primary transition-all">
                  <MapPin className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-outline flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">Last Active</p>
                  <p className="text-xs font-bold text-on-surface">{member.lastActive}</p>
                </div>
                <button className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
                  Profile
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
