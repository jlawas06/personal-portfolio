import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PERSONAL_DETAILS } from '../../constants';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public themeService = inject(ThemeService);
  personalInfo = PERSONAL_DETAILS;
  currentYear = new Date().getFullYear();
}
