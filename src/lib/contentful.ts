import * as contentful from 'contentful';

export const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || 'dummy_space',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || 'dummy_token',
});

// Mock data fallback for development without API keys
export const mockProfile = {
  name: 'Ramya Ramesh',
  headline: 'Turning operational complexity into measurable business outcomes.',
  manifesto: 'With 5+ years coordinating cross-functional projects, I turn raw data into actionable insights. I believe operational clarity and analytical rigour drive real business impact.',
  resumeUrl: '/Ramya_Ramesh_Resume.pdf',
  linkedin: 'https://linkedin.com/in/ramya-ramesh-0933782b4',
  github: 'https://github.com/Selenophile6323',
  stats: [
    { label: 'Years Experience', value: 5, suffix: '+' },
    { label: 'Projects', value: 20, suffix: '+' },
    { label: 'Tools', value: 8, suffix: '+' },
  ],
};

export const mockServices = [
  { id: '1', title: 'Project Coordination', category: 'Delivery', description: 'End-to-end project execution, resource allocation, milestone tracking, and cross-functional handovers.' },
  { id: '2', title: 'Data Reporting & Dashboards', category: 'Analysis', description: 'Performance dashboards, trend analysis, and reporting using Power BI, Excel, and Python.' },
  { id: '3', title: 'Process Improvement', category: 'Operations', description: 'Digital transformation, workflow automation, UAT coordination, and compliance documentation.' },
  { id: '4', title: 'Stakeholder Communication', category: 'Strategy', description: 'Requirements gathering, status reporting, vendor coordination, and cross-team liaison.' },
];

export const mockProjects = [
  {
    id: 'p1',
    title: 'Parkinson\'s Data Analysis Dashboard',
    category: 'Healthcare Analytics',
    summary: 'Coordinated dashboard delivery through requirements gathering, stakeholder collaboration, and reporting to enable data-driven healthcare insights.',
    tools: ['Requirements', 'Stakeholder Mgmt', 'Reporting', 'Data Viz'],
    github: '#',
    dashboard: '#',
  },
  {
    id: 'p2',
    title: 'Employee Onboarding & Scheduling AI Tool',
    category: 'Product Development',
    summary: 'Drove requirements gathering, workflow coordination, and stakeholder communication for an AI-powered onboarding scheduling tool.',
    tools: ['Agile', 'UAT', 'Process Automation', 'Cross-functional'],
    github: '#',
    dashboard: '#',
  },
  {
    id: 'p3',
    title: 'Fundraising Event Coordination',
    category: 'Non-Profit',
    summary: 'Led project planning, schedule management, vendor and client coordination, and reporting for a community fundraising event supporting Simon House.',
    tools: ['Project Planning', 'Vendor Mgmt', 'Scheduling', 'Reporting'],
    github: '#',
    dashboard: '#',
  },
  {
    id: 'p4',
    title: 'Supply & Disposition Reporting',
    category: 'Supply Chain',
    summary: 'Delivered performance reporting, trend analysis, and process improvement support for supply chain operations at Evergreen Marine Corps.',
    tools: ['Excel', 'Trend Analysis', 'Process Improvement', 'Reporting'],
    github: '#',
    dashboard: '#',
  },
];

export interface ProfileStats {
  label: string;
  value: number;
  suffix: string;
}

export interface ProfileData {
  name: string;
  headline: string;
  manifesto: string;
  resumeUrl: string;
  linkedin: string;
  github: string;
  stats?: ProfileStats[];
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  summary: string;
  tools: string[];
  github: string;
  dashboard: string;
}

export interface ServiceData {
  id: string;
  title: string;
  category: string;
  description: string;
}

export async function fetchProfile(): Promise<ProfileData> {
  if (!process.env.CONTENTFUL_SPACE_ID) return mockProfile;
  try {
    const res = await contentfulClient.getEntries({ content_type: 'profile', limit: 1 });
    return (res.items[0]?.fields as unknown as ProfileData) || mockProfile;
  } catch (e) {
    return mockProfile;
  }
}

export async function fetchProjects(): Promise<ProjectData[]> {
  if (!process.env.CONTENTFUL_SPACE_ID) return mockProjects;
  try {
    const res = await contentfulClient.getEntries({ content_type: 'project', order: ['fields.order'] });
    return (res.items.map(item => ({ id: item.sys.id, ...item.fields })) as ProjectData[]) || mockProjects;
  } catch (e) {
    return mockProjects;
  }
}

export async function fetchServices(): Promise<ServiceData[]> {
  if (!process.env.CONTENTFUL_SPACE_ID) return mockServices;
  try {
    const res = await contentfulClient.getEntries({ content_type: 'service' });
    return (res.items.map(item => ({ id: item.sys.id, ...item.fields })) as ServiceData[]) || mockServices;
  } catch (e) {
    return mockServices;
  }
}
