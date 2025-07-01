import { Injectable } from '@angular/core';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Injectable({
  providedIn: 'root',
})
export class ParticlesService {
  private isMobile = window.innerWidth <= 768;
  
  async initParticles(engine: Engine): Promise<void> {
    try {
      await loadSlim(engine);
      console.log('Particles engine initialized successfully');
    } catch (error) {
      console.error('Failed to initialize particles engine:', error);
    }
  }
  
  getParticlesConfig(isDarkMode: boolean) {
    // Reduce particle count on mobile for better performance
    const particleCount = this.isMobile ? 25 : 40;
    
    return {
      particles: {
        number: {
          value: particleCount,
          density: {
            enable: true,
            value_area: 1000
          }
        },
        color: {
          value: isDarkMode ? '#22d3ee' : '#0891b2' 
        },
        shape: {
          type: 'circle'
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: true,
            speed: 0.8,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: this.isMobile ? 2 : 3,
          random: true,
          anim: {
            enable: false // Disable size animation for better performance
          }
        },
        line_linked: {
          enable: true,
          distance: this.isMobile ? 120 : 150,
          color: isDarkMode ? '#22d3ee' : '#0891b2',
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: this.isMobile ? 0.8 : 1.2,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: !this.isMobile, // Disable hover effects on mobile
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 150,
            line_linked: {
              opacity: 0.6
            }
          },
          repulse: {
            distance: this.isMobile ? 100 : 150,
            duration: 0.3
          }
        }
      },
      retina_detect: true,
      background: {
        color: "transparent"
      },
      fpsLimit: this.isMobile ? 30 : 60 // Limit FPS on mobile for better battery life
    };
  }
} 