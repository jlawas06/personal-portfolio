import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PERSONAL_DETAILS } from '../../constants';
import { EmailService, ThemeService } from '../../services';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public themeService = inject(ThemeService);
  private emailService = inject(EmailService);
  private fb = inject(FormBuilder);
  
  personalInfo = PERSONAL_DETAILS;
  
  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]]
  });

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;
      
      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
          this.contactForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitError = true;
          this.errorMessage = error.message || 'An error occurred. Please try again later.';
          console.error('Error sending email:', error);
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
