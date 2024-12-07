import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService, ThemeService } from '../../services';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  public themeService = inject(ThemeService);
  public portfolioService = inject(PortfolioService);

}
