import {
  Component
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoggedService } from '../services/logged.service';
import { Router, RouterModule} from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { timer } from 'rxjs';
import Swal from 'sweetalert2'
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-loginn',
  standalone: false,
  // imports: [CommonModule, FormsModule, ReactiveFormsModule, NavbarComponent, RouterModule, CommonModule],
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.css',
})
export class LoginnComponent {
  //  Loading part



  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private logged: LoggedService,
    private router: Router,
  ) {}

  form: FormGroup = this.fb.group({
    email: ['', Validators.required],
    contrasenya: ['', Validators.required],
  });

  onSubmit() {
    console.log('Form submitted');
    if (this.form.valid) {
      const rawForm = this.form.getRawValue();

      this.loading = true;
      this.auth.login(rawForm.email, rawForm.contrasenya).subscribe({
        next: () => {
          timer(1000).subscribe(() => {
            this.loading = false;
            Swal.fire({
              title: 'Success!',
              text: 'You have successfully logged in',
              icon: 'success',
              confirmButtonText: 'Ok',
            });
            this.logged.loggedIn(rawForm.email);
            this.router.navigate(['/home']);
          });

        },

        error: (error: any) => {
          timer(1000).subscribe(() => {
            this.loading = false;
            console.log('No log');
            console.error('Error:', error);
            Swal.fire({
              title: 'Error!',
              text: 'incorrect credentials',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          });
        },
      });
    }
  }
}
