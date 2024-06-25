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

@Component({
  selector: 'app-loginn',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.css',
})
export class LoginnComponent {
  constructor(private fb: FormBuilder, private auth: AuthService) {}

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    contrasenya: ['', Validators.required],
  });

  
  onSubmit() {
    console.log('Form submitted');
    if (this.form.valid) {
      const rawForm = this.form.getRawValue();

      this.auth.login(rawForm.email, rawForm.contrasenya).subscribe({
        next: () => {
          console.log('Logged in!');
          // Handle the logic here
        },
        error: (error: any) => {
          console.log('No log');
          console.error('Error:', error);
          // Handle the error here
        },
      });
    }
  }
}
