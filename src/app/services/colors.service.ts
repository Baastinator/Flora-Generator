import { Injectable } from '@angular/core';

import {
  Observable,
  Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsService {
  private blossomColor: string[] = [
    'Red', 'Yellow', 'Pink', 'Purple',
    'Mangenta', 'Violet', 'Blue', 'Navy',
    'Orange', 'Light Blue', 'Green',
    'White'
  ];
  private capColors: string[] = [
    'White', 'Light Brown', 'Brown',
    'Red', 'Yellow', 'Black', 'Gray'
  ];
  private stemColors: string[] = [
    'White', 'Grey', 'Brown'
  ];
  private colors: string[][] = [
    this.blossomColor,
    this.capColors,
    this.stemColors,
  ]

  private color$: Subject<string>[] = [
    new Subject<string>(),
    new Subject<string>(),
    new Subject<string>(),
  ]

  public getColors(n: number) {
    return this.colors[n].slice();
  }

  public getColor(n: number): Observable<string> {
    return this.color$[n].asObservable();
  }

  public setColor(n: number, C: string): void {
    this.color$[n].next(C);
  }
}
