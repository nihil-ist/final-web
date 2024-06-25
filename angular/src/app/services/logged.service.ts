import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {


  private loggedUser = '';
  constructor() { }

  loggedIn(name: string){
    this.loggedUser = name;
  }
  logout(){
    this.loggedUser = '';
  }

  getIsLogged(){
    return this.loggedUser;
  }
}
