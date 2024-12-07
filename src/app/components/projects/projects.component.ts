import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService, ThemeService } from '../../services';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public themeService = inject(ThemeService);
  public portfolioService = inject(PortfolioService);
}
