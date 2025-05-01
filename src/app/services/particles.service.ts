import { Injectable } from '@angular/core';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

@Injectable({
  providedIn: 'root',
})
export class ParticlesService {
  
  async initParticles(engine: Engine): Promise<void> {
    try {
      await loadSlim(engine);
      console.log('Particles engine initialized successfully');
    } catch (error) {
      console.error('Failed to initialize particles engine:', error);
    }
  }
  
  getParticlesConfig(isDarkMode: boolean) {
    return {
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: isDarkMode ? '#22d3ee' : '#0891b2' 
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: isDarkMode ? '#22d3ee' : '#0891b2'
          },
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: isDarkMode ? '#22d3ee' : '#0891b2',
          opacity: 0.2,
          width: 1,
          triangles: {
            enable: true,
            color: isDarkMode ? '#22d3ee' : '#0891b2',
            opacity: 0.05
          }
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
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
            distance: 200,
            line_linked: {
              opacity: 0.7
            }
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          }
        }
      },
      retina_detect: true,
      background: {
        color: "transparent",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
      },
      polygon: {
        enable: true,
        type: "inside",
        move: {
          radius: 10
        },
        url: ""
      }
    };
  }
  
  getCircuitConfig(isDarkMode: boolean) {
    return {
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: isDarkMode ? "#22d3ee" : "#0891b2"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: isDarkMode ? "#22d3ee" : "#0891b2"
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.3,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: isDarkMode ? "#22d3ee" : "#0891b2",
          opacity: 0.2,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.8
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true,
      background: {
        color: "transparent",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
      },
      draw: {
        enable: true,
        lineColor: isDarkMode ? "rgba(34, 211, 238, 0.1)" : "rgba(8, 145, 178, 0.1)",
        lineWidth: 1,
        circleRadius: 5,
        duration: 1,
        zIndex: 0,
        fullScreen: {
          enable: true,
          zIndex: -1
        }
      }
    };
  }
} 