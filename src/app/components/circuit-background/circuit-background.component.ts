import { Component, OnInit, inject } from '@angular/core';
import { Engine } from '@tsparticles/engine';
import { firstValueFrom } from 'rxjs';
import { ThemeService } from '../../services';
import { ParticlesService } from '../../services/particles.service';

@Component({
  selector: 'app-circuit-background',
  template: `
    <ngx-particles
      [id]="id"
      [options]="particlesOptions"
      [particlesInit]="particlesInit"
      style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: 1;"
    ></ngx-particles>
  `,
  styles: [`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }
  `]
})
export class CircuitBackgroundComponent implements OnInit {
  id = "circuitParticles";
  particlesOptions: any;
  
  public themeService = inject(ThemeService);
  public particlesService = inject(ParticlesService);
  
  constructor() {
    console.log('Circuit background component instantiated');
  }

  async ngOnInit(): Promise<void> {
    try {
      console.log('Circuit background initializing...');
      const isDarkMode = await firstValueFrom(this.themeService.isDarkMode$);
      this.particlesOptions = this.particlesService.getCircuitConfig(isDarkMode);
      console.log('Circuit background options set:', this.particlesOptions);
      
      // Update options when theme changes
      this.themeService.isDarkMode$.subscribe(isDark => {
        this.particlesOptions = this.particlesService.getCircuitConfig(isDark);
        console.log('Circuit background options updated for theme change');
      });
    } catch (error) {
      console.error('Error initializing circuit background:', error);
    }
  }

  particlesInit = async (engine: Engine): Promise<void> => {
    try {
      console.log('Circuit background particles initializing engine...');
      await this.particlesService.initParticles(engine);
      console.log('Circuit background particles engine initialized');
    } catch (error) {
      console.error('Failed to initialize circuit background particles:', error);
    }
  }
} 