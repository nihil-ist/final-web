import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './signupp.component.html',
  styleUrls: ['./signupp.component.css']
})
export class SignupComponent {
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    const rawFrom = this.form.getRawValue();
    this.auth
      .register(rawFrom.email, rawFrom.username, rawFrom.password)
      .subscribe({
        next: () => {},
        error: (err) => {
          console.error('Error:', err);
        },
      });
  }
}