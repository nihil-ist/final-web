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
import { LoggedService } from '../services/logged.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loginn',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NavbarComponent, RouterModule],
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.css',
})
export class LoginnComponent {
  constructor(private fb: FormBuilder, private auth: AuthService, private logged: LoggedService, private router: Router) {}

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
          this.logged.loggedIn(rawForm.email);
          this.router.navigate(['/home']);
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
