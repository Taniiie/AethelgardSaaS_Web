import { TeamMember, BillingInvoice, ActivityItem, Anomaly } from './types';

export const MOCK_TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Alexander Vance',
    email: 'alexander.v@aurora.io',
    role: 'System Architect',
    department: 'Engineering',
    status: 'Active',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA74tTd7CHW6aGp5QyhL0FE05KkwNOZHvrqjFATFZwpJm0BTzsTBqLF-ffehOXeVXmZJUaDF32119RXEgwRfuBmKugEBEn4l54TFNvE13zSLC3yTIdyrDJWSmKJw3oXFhDf3J8HANiTC2VSjAGsAQ_tLPLDxmfTNfLvzrA2wrCPhNP6phLa0zXElRo2BmlSQbZnEZJNAoNXjflHzINpjoNt6mxht7iqODExr96JSHIIYLUnf24rRU6yCPSzbphnmAMMiMvMm036VLA',
    lastActive: 'Just now',
  },
  {
    id: '2',
    name: 'Evelyn Thorne',
    email: 'e.thorne@aurora.io',
    role: 'Lead Designer',
    department: 'Creative Lab',
    status: 'Active',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4IMmTwanyMquh_ZFbJsdTgT8BoELzrvM7gWv6KA_KxeXcwhazZgHx_7AKJ-IZm2gV8ZyRx4vYRrZIxupjPoV8otqNdzmhos_qNde_OjIqUvkpXS14OszMcET7ldY4wD2gHjJe3EaERsmTDAfHgEfxRpk8lpULtjEsg_FlLaVAKFFreI7Ap7SW_NTHSPtiIYayoQZkS_wQC6v6bllT3hbryHvi8_TZwc6jlxUdz6xbQ4jXSyAQ92eddWNliHdy0bqRaQIXZA8ts9E',
    lastActive: '2 hours ago',
  },
  {
    id: '3',
    name: 'Marcus Chen',
    email: 'm.chen@aurora.io',
    role: 'Data Scientist',
    department: 'Intelligence',
    status: 'Away',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcBI_dmgV9dEPa6F4VhPcJCUE0V5wTgvKsiFWXh1vuSez17fXq0L2oJE_MpFRVYzQqZyY1JlxrLXOhnsKBTt3w9zRdZvTm-MQxqe4zctTZX9GToCsMBhEFihNrtVQyusDlGo84t7o_u--3ohpe7tAmxfIHQUb20aVQjqZHe59eev3W5Fve9NHvoYy11ksUADc0zvIx-AbNwuEj3wsg2U5BKHbjkQdwKjjR4TYlcUzGdDI-cZERD4BXztFrGRTa1MmVjBz2gjLmSsI',
    lastActive: '5 hours ago',
  },
  {
    id: '4',
    name: 'Sarah Jenkins',
    email: 's.jenkins@aurora.io',
    role: 'Account Executive',
    department: 'Sales',
    status: 'Offline',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaCqKHj9ZuIFCZqRkRKHVQtXhWWy_OrT-5O_t3GNx0YiMKZAveET1PX0WTb7ahLhnKk6dw9wDweBmb4kHDkLtjsm6if7_NjAqUkxv4SEVSyaWJwpDoPwsaNjUgMoJy87IJoKY1A2m-y20wMdnOhbwgtK-tysRTo8bdPrdDMwHDc0Z7UNipKuIT2oKNvA-hWKTs4zH-Vptu-NGv9fayahl_NO2FWyfQT8Nyj3y_Gp3l2MdxsJjE8e7Y5Uk_3xlO6w0784DSp1myJoI',
    lastActive: '1 day ago',
  },
];

export const MOCK_BILLING: BillingInvoice[] = [
  { id: 'AUR-2023-009', date: 'Oct 12, 2023', amount: '$99.00', status: 'Paid' },
  { id: 'AUR-2023-008', date: 'Sep 12, 2023', amount: '$99.00', status: 'Paid' },
  { id: 'AUR-2023-007', date: 'Aug 12, 2023', amount: '$99.00', status: 'Paid' },
];

export const MOCK_ACTIVITY: ActivityItem[] = [
  {
    id: '1',
    user: { name: 'Alex River', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEjPHPOrtlmT9FTxlTQrXzLHVCcJp_dZcrfCpxBlbBBrSf2Rr-SjdVJuTBs2G4xxP3DMaFxq1CgPWfz89CAcAb6a2BOXf_mc4XkXL5Cgf9QDQhcJdApL4nkT8spWBMkk6uFYIclUeCkeBNy3eFo_1VVJs3M9TOvIZIktXaAAj56xeVosE7Vva2TPa3IkHP86BlNt0kiFPOXEMPP7Gik6YmvfQbbV6lhp7DhA6qqhkuMRYjT9oKmuenp-VAbR1HTWr1qVYixqModdE' },
    action: 'Deployed Aurora Engine v2.4',
    time: '2m ago',
  },
  {
    id: '2',
    user: { name: 'Sarah Chen', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxDLxudyIAWf9Hd8s5z4yd0_84FBWdu0OIQgniRJIMH4D0WlXxG72uZ-kmn5NdwFIdD9dLlTSVab-tBkQdgWpA_4XmBDyPcrbVUQC5ItI1Caya-rqXiTP9NtT5tr9u8IGKB9Wll-raURZln5tbLRiSVVVD9yK3Kwu19Keg5NIUWqUwcA_K-9dr0bOwDV5tkAm8y74M5qPDRL9w_DxpNUtjQgQpIP4P3JzHWaBrmJWrcuW1r_Gmz8UgGvbNVzve1VeGHrItICpCoPA' },
    action: 'Updated Project: Luna Alpha',
    time: '15m ago',
  },
  {
    id: '3',
    user: { name: 'Marcus T.', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDG-zI49GdnaKsDxoCLu5p6FOI41yp45JGF3ySMvG3w9X0_D4CIrT62eysqEhepl79yv3fQy8oOQ3LJlsAHlfoyp-EU7ppy0O3e3chnUhh2gxRwuRTdVqp6fjo426ZzrdM6uCfgnsMvU57us0eJoikOULLzg5JBS_QpAfSlO1rdrqLaZ3-HxjeOFAVJz2BfVJek8JBXT7ByXFhtNHWYmoEhDG9rq7zyxlSgkegwDWNg6YCmC1XIPkOsUNHend_pZq3P_j2nUIlUg3s' },
    action: 'Requested Archive Access',
    time: '1h ago',
  },
];

export const MOCK_ANOMALIES: Anomaly[] = [
  {
    id: '1',
    title: 'Latency Spike - EU West Cluster',
    time: 'Today at 14:28',
    source: 'API Gateway',
    value: '+240ms',
    severity: 'Critical',
  },
  {
    id: '2',
    title: 'Unusual Sign-up Volume',
    time: 'Today at 09:12',
    source: 'Organic Search',
    value: '312 New',
    severity: 'Info',
  },
  {
    id: '3',
    title: 'Backup Sequence Completed',
    time: 'Yesterday',
    source: 'System Cron',
    value: '2.4 TB',
    severity: 'Stable',
  },
];

export const REVENUE_DATA = [
  { name: 'Jan', actual: 200, forecast: 180 },
  { name: 'Feb', actual: 250, forecast: 220 },
  { name: 'Mar', actual: 230, forecast: 240 },
  { name: 'Apr', actual: 300, forecast: 280 },
  { name: 'May', actual: 450, forecast: 350 },
  { name: 'Jun', actual: 380, forecast: 400 },
  { name: 'Jul', actual: 500, forecast: 450 },
];
