import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private emailApi = 'http://localhost:3000/contactMail';

  constructor( private httpClient:HttpClient) { }

  sendInfo(data:any){
    return this.httpClient.post(this.emailApi,data);
  }
}
