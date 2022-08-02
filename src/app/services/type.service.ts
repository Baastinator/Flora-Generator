import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private types = ["M","F","O"];
  private type$ = new BehaviorSubject<string>('O');

  public getTypes(): string[] {
    return this.types.slice();
  }

  public getType(): Observable<string> {
    return this.type$.asObservable();
  }

  public setType(T: string): void {
    this.type$.next(T);
  }
}
