import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CircuitModule } from './components/circuit-background/circuit.module';
import { ParticlesModule } from './components/particles-background/particles.module';

@NgModule({
  imports: [
    CommonModule,
    ParticlesModule,
    CircuitModule
  ],
  exports: [
    ParticlesModule,
    CircuitModule
  ]
})
export class AnimationsModule { } 