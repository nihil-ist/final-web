import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from '../service-divisa/currency.service';

@Pipe({
  name: 'currency',
})
export class CurrencyPipe implements PipeTransform {
  constructor(private currencyService: CurrencyService) {}

  transform(valueIn: number): string {
    let transformedValue = '';

    // Suscripción al cambio de divisa
    this.currencyService.currency$.subscribe(({ symbol, value }) => {
      transformedValue = `${(valueIn * value).toFixed(2)} ${symbol}`;
    });

    // Devuelve el valor transformado
    return transformedValue;
  }

}
