import {
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'sizeToString'
})
export class SizeToStringPipe implements PipeTransform {
  transform(value: string): string {
    const dic: {[key: string]: string} = {
      "S":"Small",
      "M":"Medium",
      "L":"Large",
      "XL":"Very Large"
    };

    if (dic[value]) return dic[value];
    return "Invalid";
  }
}
