import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService, ThemeService } from '../../services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public themeService = inject(ThemeService);
  public portfolioService = inject(PortfolioService);

  isMenuOpen = false;
  isDark$ = this.themeService.isDarkMode$;
  theme$ = this.themeService.currentTheme$;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
