import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = '/api/send-email'; // This will be our backend endpoint

  constructor(private http: HttpClient) {}

  sendEmail(formData: ContactForm): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
} 