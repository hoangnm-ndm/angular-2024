import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomizePipe',
  standalone: true,
})
export class MyCustomizePipePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
