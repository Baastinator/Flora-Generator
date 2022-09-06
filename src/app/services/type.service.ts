import { Injectable } from '@angular/core';

import {
    BehaviorSubject,
    Observable,
    Subject,
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private types = ["M","F","R","O"];
  private type$ = new BehaviorSubject<string>('O');
  private subType$ = new Subject<string>();

  public getTypes(): string[] {
    return this.types.slice();
  }
  
  public getType(): Observable<string> {
    return this.type$.asObservable();
  }

  public setSubType(T: string): void {
    this.subType$.next(T);
  }

  public getSubType(): Observable<string> {
    return this.subType$.asObservable();
  }

  public setType(T: string): void {
    this.type$.next(T);
  }
}
