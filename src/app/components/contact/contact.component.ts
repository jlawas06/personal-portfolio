import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PortfolioService, ThemeService } from '../../services';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public themeService = inject(ThemeService);
  public portfolioService = inject(PortfolioService);
}
