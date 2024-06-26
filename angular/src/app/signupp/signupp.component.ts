import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button'; 
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { passwordMismatchValidator } from '../password-mismatch.validator';

@Component({
  selector: 'app-signupp',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NavbarComponent, MatButtonModule, RouterModule, CommonModule],
  templateUrl: './signupp.component.html',
  styleUrl: './signupp.component.css',
})
export class SignuppComponent {
// [x: string]: any;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {}

  errorMessage: string | null = null;

  form: FormGroup = this.fb.group({
    fullname: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
  }, { validators: passwordMismatchValidator });

  onSubmit(): void {

    this.errorMessage = null;
    if  (this.form.invalid) {
      return;
    }

    const rawFrom = this.form.getRawValue();
    this.auth
      .register(rawFrom.email, rawFrom.password, rawFrom.fullname, rawFrom.username, rawFrom.phone)
      .subscribe({
        next: () => {
          console.log('User registered successfully');
          this.router.navigate(['/signin']);
        },
        error: (err) => {
          this.handleError(err);
          console.error('Error:', err);
        },
      });
  }

  private handleError(error: any): void {
    if(error.code === 'auth/email-already-in-use') {
      this.errorMessage = 'This email address is already in use';
    } else if (error.code === 'auth/weak-password') {
      this.errorMessage = 'Password must be at least 6 characters long';
    } else if (error.code === 'auth/invalid-email') {
      this.errorMessage = 'Invalid email address';
    } else {
      this.errorMessage = 'An error ocurred. Please try again.';
    }
    console.error('Error', error);
  }

  

}
