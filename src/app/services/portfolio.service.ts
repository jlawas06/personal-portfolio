import { Injectable } from '@angular/core';
import { Job, NavLink, Project } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  readonly navLinks: NavLink[] = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  readonly employment: Job[] = [
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

  readonly projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-stack e-commerce platform with real-time inventory management',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered application for generating marketing content',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
      github: '#',
      demo: '#',
    },
  ];

  readonly personalInfo = {
    name: 'John Lloyd Lawas',
    title: 'Full Stack Software Engineer',
    email: 'johnlloydlawas06@gmail.com',
    about: `I build exceptional digital experiences with modern technologies.
            Passionate about creating efficient, scalable, and user-friendly applications.`,
    github: 'https://github.com/jlawas06',
    linkedin: 'https://www.linkedin.com/in/john-lloyd-lawas',
  };

  readonly title = 'johnlloydlawas.dev'
}
