import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {
  public sizes: string[] = ['S','M','L','XL'];
  public Height: string[] = ['S']

  public getSizes(): string[] {
    return this.range.slice();
  }

  public sizeToNum(S: string): number {
    const dic: {[key: string]: number} = {
      "S": 0,
      "M": 1,
      "L": 2,
      "XL": 3
    };

    if (dic[S] || dic[S] === 0) return dic[S];
    return -1;
  }

  public numToSize(N: number): string {
    const dic: string[] = [
      "S",
      "M",
      "L",
      "XL",
    ];

    if (dic[N]) return dic[N];
    return "Invalid"
  }
}
