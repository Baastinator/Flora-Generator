import {
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'numToInch'
})
export class NumToInchPipe implements PipeTransform {
  transform(value: number): string {
    const inches = Math.floor(+value/2.54 * 1000+0.5) / 1000
    const feet = Math.floor(inches/12)
    const inchpart = ('' + ((inches % 12) )).slice(0,5)
    const string = (feet > 0 ? ((feet) + '\' ') : ' ') + inchpart + '\"'
    return string;
  }
}
