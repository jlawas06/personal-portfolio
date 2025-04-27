import { Component, OnInit, inject } from '@angular/core';
import { Engine } from '@tsparticles/engine';
import { firstValueFrom } from 'rxjs';
import { ThemeService } from '../../services';
import { ParticlesService } from '../../services/particles.service';

@Component({
  selector: 'app-particles-background',
  template: `
    <ngx-particles
      [id]="id"
      [options]="particlesOptions"
      [particlesInit]="particlesInit"
    ></ngx-particles>
  `,
  styles: [`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 0;
    }
  `]
})
export class ParticlesBackgroundComponent implements OnInit {
  id = "tsparticles";
  particlesOptions: any;
  
  public themeService = inject(ThemeService);
  public particlesService = inject(ParticlesService);
  
  constructor() {}

  async ngOnInit(): Promise<void> {
    const isDarkMode = await firstValueFrom(this.themeService.isDarkMode$);
    this.particlesOptions = this.particlesService.getParticlesConfig(isDarkMode);
    
    // Update options when theme changes
    this.themeService.isDarkMode$.subscribe(isDark => {
      this.particlesOptions = this.particlesService.getParticlesConfig(isDark);
    });
  }

  particlesInit = async (engine: Engine): Promise<void> => {
    await this.particlesService.initParticles(engine);
  }
} 