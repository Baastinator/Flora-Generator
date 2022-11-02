import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {

  // S > <10cm (4") long
  // M > 10cm - 30cm long
  // L > 30cm - 70cm long
  // XL > >70cm long
  public sizes: string[] = ['S', 'M', 'L', 'XL'];
  public size$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public sizes$: BehaviorSubject<number>[] = [
    new BehaviorSubject<number>(0),
    new BehaviorSubject<number>(0),
    new BehaviorSubject<number>(0),
    new BehaviorSubject<number>(0)
  ]

  public getSizes(): string[] {
    return this.sizes.slice();
  }

  public getMainSizeSub(): Observable<string> {
    return this.size$.asObservable();
  }

  public getMainSize(): string {
    return this.size$.value;
  }

  public setMainSize(S: string): void {
    this.size$.next(S);
  }

  public getSizeSub(N: number): Observable<number> {
    return this.sizes$[N].asObservable();
  }

  public getSize(N: number): number {
    return this.sizes$[N].value;
  }

  public setSize(N: number, V: number): void {
    this.sizes$[N].next(V);
  }

  public sizeToNum(S: string): number {
    const dic: { [key: string]: number } = {
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
