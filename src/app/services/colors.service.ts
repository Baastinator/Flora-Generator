import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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

  private rootColors: string[] = this.stemColors.slice();

  private colors: string[][] = [
    this.blossomColor,
    this.capColors,
    this.stemColors,
    this.rootColors
  ];

  private colors$: BehaviorSubject<string>[] = [
    new BehaviorSubject<string>(''),
    new BehaviorSubject<string>(''),
    new BehaviorSubject<string>(''),
    new BehaviorSubject<string>(''),
  ];

  public getColors(n: number) {
    return this.colors[n].slice();
  }

  public getColorSub(n: number): Observable<string> {
    return this.colors$[n].asObservable();
  }

  public getColor(n: number): string {
    return this.colors$[n].value;
  }

  public getColorArray(): string[] {
    const output: string[] = []

    this.colors$.forEach((BSS: BehaviorSubject<string>) => {
      if (BSS.value !== "") {
        output.push(BSS.value);
      }
    })

    return output;
  }

  public setColor(n: number, C: string): void {
    this.colors$[n].next(C);
  }
}
