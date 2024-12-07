import { Job } from '../types';

export const EMPLOYMENT_HISTORY: Job[] = [
  {
    company: 'Tech Solutions Inc.',
    position: 'Senior Software Engineer',
    period: '2021 - Present',
    location: 'San Francisco, CA',
    description: 'Lead full-stack developer for enterprise SaaS platform',
    achievements: [
      'Led team of 5 developers in redesigning core platform architecture',
      'Reduced application load time by 60% through optimization',
      'Implemented automated testing reducing bugs by 40%',
      'Mentored 4 junior developers to successful promotions',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL'],
  },
  {
    company: 'Digital Innovations',
    position: 'Software Engineer',
    period: '2019 - 2021',
    location: 'New York, NY',
    description: 'Full-stack developer for e-commerce solutions',
    achievements: [
      'Developed real-time inventory management system',
      'Integrated payment processing reducing transaction errors by 25%',
      'Built analytics dashboard for tracking KPIs',
      'Collaborated with UX team to improve customer experience',
    ],
    technologies: ['Vue.js', 'Python', 'Docker', 'MongoDB', 'Redis'],
  },
];
