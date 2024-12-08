import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TECH_STACK } from '../../constants';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories = TECH_STACK;

  constructor(public themeService: ThemeService) {}
}
