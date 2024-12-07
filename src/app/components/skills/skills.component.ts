import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Frontend',
      icon: 'monitor',
      skills: [
        { name: 'JavaScript (ES6+)' },
        { name: 'TypeScript' },
        { name: 'React' },
        { name: 'Angular' },
        { name: 'Vue.js' },
        { name: 'HTML5/CSS3' },
        { name: 'Tailwind CSS' },
        { name: 'SASS/SCSS' }
      ]
    },
    {
      name: 'Backend',
      icon: 'database',
      skills: [
        { name: 'Node.js' },
        { name: 'Python' },
        { name: 'RESTful APIs' },
        { name: 'GraphQL' },
        { name: 'Express.js' },
        { name: 'MongoDB' },
        { name: 'PostgreSQL' },
        { name: 'Java' }
      ]
    },
    {
      name: 'DevOps & Tools',
      icon: 'tool',
      skills: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'AWS' },
        { name: 'CI/CD' },
        { name: 'Kubernetes' },
        { name: 'Jenkins' },
        { name: 'Linux' },
        { name: 'Nginx' }
      ]
    },
    {
      name: 'Other Skills',
      icon: 'plus-circle',
      skills: [
        { name: 'Agile/Scrum' },
        { name: 'Unit Testing' },
        { name: 'System Design' },
        { name: 'Problem Solving' },
        { name: 'Team Leadership' },
        { name: 'Technical Writing' },
        { name: 'Performance Optimization' },
        { name: 'API Design' }
      ]
    }
  ];


  constructor(public themeService: ThemeService) {}
}
