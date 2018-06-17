import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../models/task';

@Pipe({
  name: 'sortName'
  //, pure: false
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): Array<Task> {   //zwraca posortowaną liste :Array<Task>
    return value.sort((a,b) => {
      if(a.name.toLowerCase() > b.name.toLowerCase()){      //sortowanie tablicy,
        return 1;
      } else{
        return -1;
      }

    });
  }

}
