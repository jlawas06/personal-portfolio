import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ContactComponent } from "./components/contact/contact.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { PortfolioService, ThemeService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeroComponent, ExperienceComponent, ProjectsComponent, ContactComponent, SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public themeService = inject(ThemeService);
  public portfolioService = inject(PortfolioService);

  isMenuOpen = false;
  isDark$ = this.themeService.isDarkMode$;
  theme$ = this.themeService.currentTheme$;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
