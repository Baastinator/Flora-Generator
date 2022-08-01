import {
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'typeToString'
})
export class TypeToStringPipe implements PipeTransform {

  transform(value: string): string {
    return this.TypeToString(value);
  }

  public TypeToString(T: string): string {
    const Types: {[key: string]: string} =
    {
      "M": "Mushroom",
      "F": "Flower",
      "O": "Other"
    };

    const type = Types[T];
    if (type) return type;
    return "I";
  }
}
