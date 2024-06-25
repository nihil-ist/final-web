import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {


  private isLogged = false;
  constructor() { }

  loggedIn(){
    this.isLogged = true;
  }
  logout(){
    this.isLogged = false;
  }

  getIsLogged(){
    return this.isLogged;
  }
}
