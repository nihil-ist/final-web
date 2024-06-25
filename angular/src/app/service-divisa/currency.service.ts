import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currency: { symbol: string, value: number } = { symbol: 'USD', value: 1 };
  currency$: BehaviorSubject<{ symbol: string, value: number }> = new BehaviorSubject<{ symbol: string, value: number }>(this.currency);

  setCurrency(symbol: string) {
    let value = 1; // Valor por defecto para USD
    switch (symbol) {
      case 'USD':
        value = 1;
        break;
      case 'MXN':
        value = 18.04;
        break;
      case 'EUR':
        value = 0.93;
        break;
      default:
        value = 1; 
        break;
    }
    this.currency = { symbol, value };
    this.currency$.next(this.currency);
  }

  getCurrentCurrency() {
    return this.currency;
  }

}
