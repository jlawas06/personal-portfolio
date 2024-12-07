import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntersectionObserverDirective } from '../../directives';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IntersectionObserverDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  isVisible = false;

  skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 88 },
        { name: 'Angular', level: 85 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Node.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 83 }
      ]
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 85 },
        { name: 'Nginx', level: 80 }
      ]
    },
    {
      category: 'Professional Skills',
      items: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Agile/Scrum', level: 88 },
        { name: 'System Design', level: 85 },
        { name: 'Technical Writing', level: 85 },
        { name: 'Performance Optimization', level: 88 }
      ]
    }
  ];

  constructor(public themeService: ThemeService) {}

  onIntersection(isVisible: boolean): void {
    this.isVisible = isVisible;
  }
}
