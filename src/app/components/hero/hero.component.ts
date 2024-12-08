import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PERSONAL_DETAILS } from '../../constants';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  public themeService = inject(ThemeService);
  personalInfo = PERSONAL_DETAILS;
}
