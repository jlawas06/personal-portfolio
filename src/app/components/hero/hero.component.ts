import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, OnDestroy, OnInit } from '@angular/core';
import { PERSONAL_DETAILS } from '../../constants';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  public themeService = inject(ThemeService);
  personalInfo = PERSONAL_DETAILS;
  isAtTop = true;
  
  // Typing animation properties
  displayedName: string = '';
  private typingInterval: any;
  private typingSpeed = 100; // milliseconds between each character
  isTypingComplete = false;

  ngOnInit(): void {
    this.checkScrollPosition();
    this.startTypingAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.checkScrollPosition();
  }

  private checkScrollPosition(): void {
    // Consider "at top" if scroll position is less than 100px
    this.isAtTop = window.pageYOffset < 100;
  }

  private startTypingAnimation(): void {
    const fullName = this.personalInfo.name;
    let currentIndex = 0;
    
    // Start typing after a short delay
    setTimeout(() => {
      this.typingInterval = setInterval(() => {
        if (currentIndex < fullName.length) {
          this.displayedName += fullName[currentIndex];
          currentIndex++;
        } else {
          // Typing complete
          this.isTypingComplete = true;
          clearInterval(this.typingInterval);
        }
      }, this.typingSpeed);
    }, 800); // Delay before typing starts
  }
}
