import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaVerifier, getAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoggedService } from '../services/logged.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { map } from 'rxjs';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sms-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NavbarComponent, CommonModule, RouterModule],
  templateUrl: './sms-login.component.html',
  styleUrl: './sms-login.component.css',
})
export class SmsLoginComponent implements OnInit {

  users: User[] = [];

  form: FormGroup = this.fb.group({
    celular: ['', Validators.required],
  });
  

  recaptchaVerifier!: RecaptchaVerifier;

  constructor(
    private fb: FormBuilder,
    private fbs: FormBuilder,
    private auth: AuthService,
    private ngZone: NgZone,
    private logged: LoggedService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit() {
    // this.confirmSMS = false;
    this.retrieveUsers();

    this.ngZone.runOutsideAngular(() => {
      this.recaptchaVerifier = new RecaptchaVerifier(
        getAuth(),
        'recaptcha-container',
        {
          size: 'normal',
          callback: (response: any) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            return response;
          },
        }
      );
      console.log('RecaptchaVerifier created');
      this.recaptchaVerifier.render().then(widgetId => {
        console.log('ReCAPTCHA rendered, widgetId is', widgetId);
      });
    });
  }

  retrieveUsers(): void {
    this.userService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.users = data;
    });
  }

  confirmSMS: boolean = false;

  formConfirmationSMS: FormGroup = this.fb.group({
    SMScode: ['', Validators.required],
  });
  
  
  onSubmit() {
    console.log('Form submitted');
    if (this.form.valid) {

      

      const rawForm = this.form.getRawValue();
      console.log("qpddd");

      for (const user of this.users) {
        if (rawForm.celular == user.phone) {
          this.auth
          .loginWithSms(rawForm.celular, this.recaptchaVerifier)
          .subscribe({
            next: () => {
              console.log("hola");
              
              this.confirmSMS = true;
              console.log('Message sent!');
              // Handle the logic here
            },
            error: (error: any) => {
              console.log('No message');
              console.error('Error:', error);
              // Handle the error here
            },
          });
        }
      }

      
    }
  }

  onConfirm() {
    const rawForm = this.formConfirmationSMS.getRawValue();
    const rawFormPhone = this.form.getRawValue();
    this.auth.verifySmsCode(rawForm.SMScode).subscribe({
      next: () => {
        console.log('SMS code confirmed!');
        
        for (const user of this.users) {
          if (rawFormPhone.celular == user.phone && user.email) {
            console.log(user.email);
            console.log(user.phone);
            this.logged.loggedIn(user.email);
            this.router.navigate(['/home']);
          }
        }

        // Handle the logic here
      },
      error: (error: any) => {
        console.error('Error:', error);
        // Handle the error here
      },
    });
  }

}
