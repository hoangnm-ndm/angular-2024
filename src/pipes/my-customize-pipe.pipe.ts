import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
  standalone: true,
})
export class MyCustomizePipePipe implements PipeTransform {
  constructor(private currencyPipe: CurrencyPipe) {}

  transform(
    value: any,
    currencyCode?: string,
    display?: 'code' | 'symbol' | 'symbol-narrow' | boolean,
    digitsInfo?: string,
    locale?: string
  ): string | null {
    const transformedValue = this.currencyPipe.transform(
      value,
      currencyCode,
      'symbol',
      digitsInfo,
      locale
    );
    if (transformedValue) {
      const parts = transformedValue.split(' ');
      return parts[0] + ' ' + parts[1]; // Swap the position of parts[0] and parts[1]
    }
    return null;
  }
}
