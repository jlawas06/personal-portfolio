import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxParticlesModule } from '@tsparticles/angular';
import { CircuitBackgroundComponent } from './circuit-background.component';

@NgModule({
  declarations: [CircuitBackgroundComponent],
  imports: [
    CommonModule,
    NgxParticlesModule
  ],
  exports: [CircuitBackgroundComponent]
})
export class CircuitModule { } 