
import { CurrencyPipe } from '@angular/common';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe('en-US');
    expect(pipe).toBeTruthy();
  });
});
