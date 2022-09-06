import { Injectable } from '@angular/core';

import {
    Observable,
    Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  // S > <10cm (4") long
  // M > 10cm - 30cm long
  // L > 30cm - 70cm long
  // XL > >70cm long
  public sizes: string[] = ['S','M','L','XL'];
  public size$: Subject<string> = new Subject<string>();
  public sizes$: Subject<number>[] = [
    new Subject<number>(),
    new Subject<number>(),
    new Subject<number>(),
    new Subject<number>()
  ]

  public getSizes(): string[] {
    return this.sizes.slice();
  }

  public getMainSize(): Observable<string> {
    return this.size$.asObservable();
  }

  public getSize(N: number): Observable<number> {
    return this.sizes$[N].asObservable();
  }

  public setMainSize(S: string): void {
    this.size$.next(S);
  }

  public setSize(N: number, V: number): void {
    this.sizes$[N].next(V);
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
