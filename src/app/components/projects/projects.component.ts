import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PROJECTS } from '../../constants';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public themeService = inject(ThemeService);
  projects = PROJECTS;
}
