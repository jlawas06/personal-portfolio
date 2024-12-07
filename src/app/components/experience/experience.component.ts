import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService, ThemeService } from '../../services';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  public themeService = inject(ThemeService);
  public portfolioService = inject(PortfolioService);
}
