import React from 'react';
import { User, Shield, Bell, CreditCard, Globe, Zap, Save, Trash2, ChevronRight } from 'lucide-react';
import { MOCK_BILLING } from '../constants';

const SettingItem = ({ icon: Icon, title, description, action }: any) => (
  <div className="flex items-center justify-between p-6 hover:bg-surface-container-high/50 transition-colors cursor-pointer group">
    <div className="flex items-center gap-6">
      <div className="p-4 bg-background border border-outline rounded-xl text-on-surface-variant group-hover:text-primary transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold tracking-[0.1em] text-on-surface uppercase">{title}</h4>
        <p className="text-xs text-on-surface-variant mt-1">{description}</p>
      </div>
    </div>
    <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:translate-x-1 transition-transform" />
  </div>
);

export default function Settings() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Configuration</p>
          <h1 className="text-6xl font-light tracking-tighter text-on-surface leading-none">Settings</h1>
          <p className="text-on-surface-variant mt-3 text-sm">Manage your account preferences and system configurations.</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-3 bg-primary text-on-primary rounded-lg text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-primary/10 hover:scale-105 transition-transform">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Section */}
          <section className="bg-surface rounded-xl border border-outline overflow-hidden shadow-sm">
            <div className="p-6 border-b border-outline bg-surface-container-high">
              <h3 className="text-xs font-bold tracking-[0.15em] text-on-surface uppercase">General Preferences</h3>
            </div>
            <div className="divide-y divide-outline">
              <SettingItem 
                icon={User} 
                title="Profile Information" 
                description="Update your name, avatar, and public bio."
              />
              <SettingItem 
                icon={Shield} 
                title="Security & Privacy" 
                description="Manage passwords, 2FA, and session history."
              />
              <SettingItem 
                icon={Bell} 
                title="Notifications" 
                description="Configure how and when you receive alerts."
              />
              <SettingItem 
                icon={Globe} 
                title="Region & Language" 
                description="Set your preferred timezone and display language."
              />
            </div>
          </section>

          {/* Billing Section */}
          <section className="bg-surface rounded-xl border border-outline overflow-hidden shadow-sm">
            <div className="p-6 border-b border-outline bg-surface-container-high flex items-center justify-between">
              <h3 className="text-xs font-bold tracking-[0.15em] text-on-surface uppercase">Billing & Subscription</h3>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[9px] font-bold uppercase tracking-widest rounded-full border border-emerald-500/20">Active Plan</span>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between p-6 bg-background rounded-xl border border-outline mb-8">
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-primary/10 rounded-xl text-primary border border-primary/20">
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-light tracking-tighter text-on-surface">Enterprise Pro</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Billed annually • $990.00 / year</p>
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-surface border border-outline rounded-lg text-[10px] font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-high transition-colors">
                  Change Plan
                </button>
              </div>

              <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4 px-2">Recent Invoices</h4>
              <div className="space-y-2">
                {MOCK_BILLING.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-outline">
                    <div className="flex items-center gap-4">
                      <CreditCard className="w-4 h-4 text-on-surface-variant" />
                      <div>
                        <p className="text-xs font-bold text-on-surface">{invoice.id}</p>
                        <p className="text-[10px] text-on-surface-variant">{invoice.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <p className="text-xs font-bold text-on-surface">{invoice.amount}</p>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500">Paid</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="p-8 bg-red-500/5 rounded-xl border border-red-500/10 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest">Danger Zone</h4>
              <p className="text-xs text-on-surface-variant mt-1">Permanently delete your account and all associated data.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-red-500/20 hover:bg-red-600 transition-colors">
              <Trash2 className="w-4 h-4" />
              Delete Account
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-surface border border-outline p-8 rounded-xl shadow-sm">
            <h3 className="text-sm font-bold tracking-[0.15em] text-on-surface uppercase mb-4">Need assistance?</h3>
            <p className="text-on-surface-variant text-xs mb-6 leading-relaxed">Our sovereign support team is available 24/7 to help you with any issues or questions.</p>
            <button className="w-full py-3.5 bg-primary text-on-primary rounded-lg font-bold text-[10px] uppercase tracking-widest shadow-lg hover:scale-[1.02] transition-transform">
              Contact Support
            </button>
          </div>

          <div className="bg-surface p-8 rounded-xl border border-outline shadow-sm">
            <h3 className="text-sm font-bold tracking-[0.15em] text-on-surface uppercase mb-6">Connected Nodes</h3>
            <div className="space-y-6">
              {[
                { name: 'Slack', icon: 'https://cdn-icons-png.flaticon.com/512/3800/3800024.png' },
                { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
                { name: 'Figma', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png' },
              ].map((app) => (
                <div key={app.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img src={app.icon} alt={app.name} className="w-6 h-6 object-contain grayscale opacity-30" referrerPolicy="no-referrer" />
                    <span className="text-xs font-bold text-on-surface">{app.name}</span>
                  </div>
                  <button className="text-[9px] font-bold text-primary uppercase tracking-widest hover:underline">Connect</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
