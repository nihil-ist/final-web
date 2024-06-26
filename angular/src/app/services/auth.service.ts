import { Injectable } from '@angular/core';
import {
  Auth,
  ConfirmationResult,
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  updateProfile,
} from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private firebaseAuth: Auth, private db: AngularFireDatabase) {}

  getAuth(): Auth {
    return this.firebaseAuth;
  }

  register(
    email: string,
    password: string,
    fullname: string,
    username: string,
    phone: number,
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) => {
      const user = response.user;
      if (user) {
        updateProfile(user, { displayName: fullname });
        // Guardar información adicional en Realtime Database
        return this.db.object(`/users/${user.uid}`).set({
          uid: user.uid,
          email: user.email,
          fullname: fullname,
          username: username,
          phone: phone
        });
      } else {
        throw new Error('User creation failed.');
      }
    });

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

  logout(): Observable<void> {
    const promise = this.firebaseAuth.signOut().then(() => {});
    return from(promise);
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
