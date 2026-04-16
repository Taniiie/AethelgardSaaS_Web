export type View = 'dashboard' | 'analytics' | 'team' | 'projects' | 'reports' | 'settings';

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'Active' | 'Away' | 'Offline' | 'Invited';
  avatar: string;
  lastActive: string;
}

export interface BillingInvoice {
  id: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Failed';
}

export interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  time: string;
  status?: string;
}

export interface Anomaly {
  id: string;
  title: string;
  time: string;
  source: string;
  value: string;
  severity: 'Critical' | 'Info' | 'Stable';
}
