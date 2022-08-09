import { Injectable } from '@angular/core';

import {
  BehaviorSubject,
  Observable,
} from 'rxjs';

import { Effect } from '../models/effects.model';

@Injectable({
  providedIn: 'root'
})
export class FloraService {
  private randomiser$ = new BehaviorSubject<boolean>(false);

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
      }, (strings: string[], weights: number[]) => { //weighted strings
        let sum = 0;

        weights.forEach((N: number) => {
          sum += N;
        });

        let rand = Math.floor(sum*Math.random());

        for (let i = 0; i < weights.length; i++) {
          const N = weights[i];
          if (rand-N < 0) return strings[i];
          rand -= N;
        }

        return "Error";
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
