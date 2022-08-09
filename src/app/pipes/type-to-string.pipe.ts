import {
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'typeToString'
})
export class TypeToStringPipe implements PipeTransform {
  transform(value: string): string {
    const types: {[key: string]: string} =
    {
      "M": "Mushroom",
      "F": "Flower",
      "R": "Root",
      "O": "Other"
    };

    if (types[value]) return types[value];
    return "Invalid";
  }
}
