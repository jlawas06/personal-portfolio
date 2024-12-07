import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme, ThemeConfig } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeConfig: ThemeConfig = {
    dark: {
      background: 'bg-gray-900',
      card: 'bg-gray-800',
      text: 'text-gray-100',
      textSecondary: 'text-gray-300',
      textMuted: 'text-gray-400',
      accent: 'text-cyan-400',
      accentHover: 'hover:text-cyan-300',
      button: 'bg-cyan-500 hover:bg-cyan-400',
      buttonText: 'text-gray-900',
      border: 'border-gray-700',
      navBg: 'bg-gray-900/80',
      cardHover: 'hover:bg-gray-700/50',
    },
    light: {
      background: 'bg-gray-50',
      card: 'bg-white',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      textMuted: 'text-gray-500',
      accent: 'text-cyan-600',
      accentHover: 'hover:text-cyan-500',
      button: 'bg-cyan-600 hover:bg-cyan-500',
      buttonText: 'text-white',
      border: 'border-gray-200',
      navBg: 'bg-white/80',
      cardHover: 'hover:bg-gray-50',
    },
  };

  private isDarkMode = new BehaviorSubject<boolean>(true);
  isDarkMode$ = this.isDarkMode.asObservable();

  private currentTheme = new BehaviorSubject<Theme>(this.themeConfig.dark);
  currentTheme$ = this.currentTheme.asObservable();

  toggleTheme(): void {
    const newDarkMode = !this.isDarkMode.value;
    this.isDarkMode.next(newDarkMode);
    this.currentTheme.next(
      newDarkMode ? this.themeConfig.dark : this.themeConfig.light
    );
  }
}
