import { Injectable } from '@angular/core';
import {
  Auth,
  ConfirmationResult,
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  updateProfile,
  User
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from, map } from 'rxjs';
// import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private firebaseAuth: Auth) {}

  getAuth(): Auth {
    return this.firebaseAuth;
  }

  register(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) =>
      updateProfile(response.user, { displayName: username })
    );

    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});
    return from(promise);
    // Login logic here
  }

  private confirmationSMS: ConfirmationResult | undefined;

  loginWithSms(
    phoneNumber: string,
    reCAPTCHA: RecaptchaVerifier
  ): Observable<void> {
    // Login logic here
    const promise = signInWithPhoneNumber(
      this.firebaseAuth,
      phoneNumber,
      reCAPTCHA
    ).then((confirmationSMS) => {
      this.confirmationSMS = confirmationSMS;
    });

    return from(promise);
  }

  verifySmsCode(code: string): Observable<void> {
    // Login logic here
    if (!this.confirmationSMS) {
      throw new Error('No confirmationSMS');
    }
    const promise = this.confirmationSMS.confirm(code).then(() => {});
    return from(promise);
  }
}
