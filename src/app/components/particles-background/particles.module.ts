import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { ParticlesBackgroundComponent } from './particles-background.component';

@NgModule({
  declarations: [ParticlesBackgroundComponent],
  imports: [
    CommonModule,
    NgxParticlesModule
  ],
  exports: [ParticlesBackgroundComponent]
})
export class ParticlesModule { } 