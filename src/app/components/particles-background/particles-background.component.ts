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
      style="position: absolute; width: 100%; height: 100vh; top: 0; left: 0; z-index: 1;"
    ></ngx-particles>
  `,
  styles: [`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 1;
    }
  `]
})
export class ParticlesBackgroundComponent implements OnInit {
  id = "tsparticles";
  particlesOptions: any;
  
  public themeService = inject(ThemeService);
  public particlesService = inject(ParticlesService);
  
  constructor() {
    console.log('Particles background component instantiated');
  }

  async ngOnInit(): Promise<void> {
    try {
      console.log('Particles background initializing...');
      const isDarkMode = await firstValueFrom(this.themeService.isDarkMode$);
      this.particlesOptions = this.particlesService.getParticlesConfig(isDarkMode);
      console.log('Particles background options set:', this.particlesOptions);
      
      // Update options when theme changes
      this.themeService.isDarkMode$.subscribe(isDark => {
        this.particlesOptions = this.particlesService.getParticlesConfig(isDark);
        console.log('Particles background options updated for theme change');
      });
    } catch (error) {
      console.error('Error initializing particles background:', error);
    }
  }

  particlesInit = async (engine: Engine): Promise<void> => {
    try {
      console.log('Particles background initializing engine...');
      await this.particlesService.initParticles(engine);
      console.log('Particles background engine initialized');
    } catch (error) {
      console.error('Failed to initialize particles background:', error);
    }
  }
} 