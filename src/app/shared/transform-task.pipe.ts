import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTask'
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: string, args?: string): any {

    return value.charAt(0).toUpperCase() +value.slice(1)+args ; // normalnie zwraca NULLA- czyli nic, podmieniamy na value, żeby zwracał to co bieerze
    // charAt(0) - pierwsza litera ze stringa, toUpperCase - na duzą,
    // value.slice(1) reszta z naszego stringa
  }

}
