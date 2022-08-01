import { Injectable } from '@angular/core';

import {
  Observable,
  Subject,
} from 'rxjs';

import { Effect } from '../models/effects.model';

@Injectable({
  providedIn: 'root'
})
export class FloraService {
  private randomiser$ = new Subject<boolean>;

  public get randomisers(): Function[] {
    return [
      (strings: string[]) => { //strings
        const size = strings.length;
        const ran = Math.floor(size*Math.random());
        return strings[ran];
      }, (effects: Effect[]) => { //effects
        const size = effects.length;
        const ran = Math.floor(size*Math.random());
        return effects[ran].effect;
      }
    ].slice()
  }

  public getRandomSub(): Observable<boolean> {
    return this.randomiser$.asObservable();
  }

  public triggerRandom(): void {
    this.randomiser$.next(true)
  }
}
