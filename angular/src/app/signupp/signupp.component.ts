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
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signupp',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NavbarComponent, MatButtonModule, RouterModule],
  templateUrl: './signupp.component.html',
  styleUrl: './signupp.component.css',
})
export class SignuppComponent {
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
