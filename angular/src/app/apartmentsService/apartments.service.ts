import { Injectable } from '@angular/core';
import { APARTMENTS } from './apartments';
import { Apartment } from '../interfaces/apartment';
import { of, Observable } from 'rxjs';
import { CurrencyService } from '../service-divisa/currency.service';

@Injectable({
  providedIn: 'root'
})
export class ApartmentsService {
  public apartments:Apartment[]=APARTMENTS;
  constructor() { }

  getApartments(): Observable<Apartment[]> {
    return of(this.apartments); 
  }
  
  searchApartment(id:number):number{
    let index = this.apartments.findIndex(p=>p.id ===id);
    return index;
  }
}
