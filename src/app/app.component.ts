import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

// Components
import { ContactComponent } from './components/contact/contact.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

// Modules
import { ParticlesModule } from './components/particles-background/particles.module';

// Services
import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ParticlesModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public themeService = inject(ThemeService);
  
  ngOnInit(): void {
    // Initialize theme
    console.log('App initialized with modern optimizations');
  }

  scrollToContact(): void {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
