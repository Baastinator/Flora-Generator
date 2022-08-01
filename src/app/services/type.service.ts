import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private types: string[];
  private type$ = new BehaviorSubject<string>('O');

  constructor() {
    this.types = ["M","F","O"];
  }

  public getTypes(): string[] {
    return this.types.slice();
  }

  public getType(): Observable<string> {
    return this.type$.asObservable();
  }

  public setType(T: string): void {
    this.type$.next(T);
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
