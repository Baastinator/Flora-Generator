import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private types = ["M", "F", "R", "O"];
  private type$ = new BehaviorSubject<string>('O');
  private subType$ = new BehaviorSubject<string>('');

  public getTypes(): string[] {
    return this.types.slice();
  }

  public getTypeSub(): Observable<string> {
    return this.type$.asObservable();
  }

  public getType(): string {
    return this.type$.value;
  }

  public setSubType(T: string): void {
    console.log(T);

    this.subType$.next(T);
  }

  public getSubType(): Observable<string> {
    return this.subType$.asObservable();
  }

  public setType(T: string): void {
    this.type$.next(T);
  }
}
