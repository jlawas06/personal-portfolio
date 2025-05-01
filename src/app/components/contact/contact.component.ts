import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PERSONAL_DETAILS } from '../../constants';
import { ThemeService } from '../../services';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public themeService = inject(ThemeService);
  personalInfo = PERSONAL_DETAILS;
  currentYear = new Date().getFullYear();
  
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  
  private formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  
  constructor() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }
  
  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitSuccess = false;
      this.submitError = false;
      
      this.http.post('https://n8n.johnlloydlawas.com/webhook/contact-form', this.contactForm.value)
        .subscribe({
          next: () => {
            this.isSubmitting = false;
            this.submitSuccess = true;
            this.contactForm.reset();
          },
          error: (error ) => {
            this.isSubmitting = false;
            this.submitError = true;
          }
        });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
