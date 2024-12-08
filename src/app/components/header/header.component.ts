import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NAV_LINKS, TITLE } from '../../constants';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public themeService = inject(ThemeService);

  isMenuOpen = false;
  isDark$ = this.themeService.isDarkMode$;
  theme$ = this.themeService.currentTheme$;

  navLinks = NAV_LINKS;
  title = TITLE;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
