import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(public http: HttpClient) { }

  getJSON(url: string) {
    return this.http.get(url)
  }
}
