import React from 'react';
import { 
  TrendingUp, 
  Users, 
  CreditCard, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreHorizontal,
  Calendar,
  Download,
  Filter,
  Zap
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { REVENUE_DATA, MOCK_ACTIVITY, MOCK_ANOMALIES } from '../constants';
import { motion } from 'motion/react';

const StatCard = ({ title, value, change, isPositive, icon: Icon, color }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-surface p-6 rounded-xl border border-outline shadow-sm"
  >
    <div className="flex justify-between items-start mb-6">
      <div className={`p-2.5 rounded-lg bg-white/5 border border-outline`}>
        <Icon className={`w-5 h-5 text-primary`} />
      </div>
      <div className={`flex items-center gap-1 text-[11px] font-bold ${isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
        {isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
        {change}
      </div>
    </div>
    <p className="text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{title}</p>
    <h3 className="text-4xl font-light tracking-tight text-on-surface">{value}</h3>
  </motion.div>
);

export default function Dashboard() {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2">Portfolio Overview</p>
          <h1 className="text-6xl font-light tracking-tighter text-on-surface leading-none">Consolidated Value</h1>
          <p className="text-on-surface-variant mt-3 text-sm">Market Status: <span className="text-emerald-500 font-medium">Open • Global Composite</span></p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-surface border border-outline rounded-lg text-[11px] font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-high transition-colors">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-on-primary rounded-lg text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-primary/10 hover:scale-105 transition-transform">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Yield Performance" 
          value="+12.4%" 
          change="+2.1%" 
          isPositive={true} 
          icon={TrendingUp} 
        />
        <StatCard 
          title="Available Liquidity" 
          value="$1.2M" 
          change="+18.2%" 
          isPositive={true} 
          icon={Users} 
        />
        <StatCard 
          title="Risk Index" 
          value="Moderate" 
          change="-3.1%" 
          isPositive={false} 
          icon={CreditCard} 
        />
        <StatCard 
          title="System Integrity" 
          value="99.98%" 
          change="+0.02%" 
          isPositive={true} 
          icon={Activity} 
        />
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-surface p-8 rounded-xl border border-outline shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-sm font-bold tracking-[0.15em] text-on-surface uppercase">Market Intelligence</h3>
              <p className="text-xs text-on-surface-variant mt-1">Consolidated Growth Projection</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Benchmark</span>
              </div>
            </div>
          </div>
          
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_DATA}>
                <defs>
                  <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 600 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#121212', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    borderRadius: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                  }}
                  itemStyle={{ color: '#D4AF37', fontWeight: 700, fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#D4AF37" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorActual)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  fill="transparent" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface p-8 rounded-xl border border-outline shadow-sm flex flex-col">
          <h3 className="text-sm font-bold tracking-[0.15em] text-on-surface uppercase mb-8">Asset Activity</h3>
          <div className="space-y-6 flex-1">
            {MOCK_ACTIVITY.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-outline p-0.5">
                  <img 
                    src={item.user.avatar} 
                    alt={item.user.name} 
                    className="w-full h-full rounded-md object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="text-xs text-on-surface font-semibold">{item.user.name}</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">{item.action}</p>
                  <span className="text-[9px] text-primary font-bold uppercase tracking-widest mt-1 block">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-surface-container-high rounded-lg text-[10px] font-bold uppercase tracking-widest text-on-surface hover:bg-surface-container-highest transition-colors border border-outline">
            Full Audit Log
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-surface p-8 rounded-xl border border-outline shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-bold tracking-[0.15em] text-on-surface uppercase">Risk Anomalies</h3>
            <Filter className="w-4 h-4 text-on-surface-variant cursor-pointer" />
          </div>
          <div className="space-y-3">
            {MOCK_ANOMALIES.map((anomaly) => (
              <div key={anomaly.id} className="flex items-center justify-between p-4 bg-background rounded-lg border border-outline">
                <div className="flex items-center gap-4">
                  <div className={`w-1.5 h-6 rounded-full ${
                    anomaly.severity === 'Critical' ? 'bg-red-500' : 
                    anomaly.severity === 'Info' ? 'bg-primary' : 'bg-emerald-500'
                  }`}></div>
                  <div>
                    <p className="text-xs font-bold text-on-surface">{anomaly.title}</p>
                    <p className="text-[10px] text-on-surface-variant">{anomaly.source} • {anomaly.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-on-surface">{anomaly.value}</p>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${
                    anomaly.severity === 'Critical' ? 'text-red-500' : 
                    anomaly.severity === 'Info' ? 'text-primary' : 'text-emerald-500'
                  }`}>{anomaly.severity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-10 rounded-xl border border-outline shadow-sm relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Sovereign Intelligence</p>
            <h3 className="text-4xl font-light tracking-tight text-on-surface mb-5 max-w-sm">Predictive Yield Optimization</h3>
            <p className="text-on-surface-variant text-sm mb-8 max-w-md">
              Our proprietary engine anticipates market shifts using quantum-grade analysis to secure your capital.
            </p>
            <button className="px-8 py-3.5 bg-primary text-on-primary rounded-lg font-bold text-[11px] uppercase tracking-widest shadow-xl hover:scale-105 transition-transform">
              Activate Node
            </button>
          </div>
          <Zap className="absolute -right-10 -bottom-10 w-64 h-64 text-primary/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </div>
      </div>
    </div>
  );
}
