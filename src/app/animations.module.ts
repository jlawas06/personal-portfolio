import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParticlesModule } from './components/particles-background/particles.module';

@NgModule({
  imports: [
    CommonModule,
    ParticlesModule
  ],
  exports: [
    ParticlesModule
  ]
})
export class AnimationsModule { } 