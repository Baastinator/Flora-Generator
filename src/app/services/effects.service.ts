import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import effectsJson from '../../assets/effects.json';
import { Effect } from '../models/effects.model';

@Injectable({
  providedIn: 'root'
})
export class EffectsService {
  private effects: Effect[];
  private effect$ = new BehaviorSubject<Effect>({ types: [], effect: '', names: [] })

  constructor() {
    this.effects = JSON.parse(JSON.stringify(effectsJson));
  }

  public getEffects(): Effect[] {
    return this.effects.slice();
  }

  public getEffect(): Observable<Effect> {
    return this.effect$.asObservable();
  }

  public setEffect(E: Effect): void {
    this.effect$.next(E);
  }

  public getEffectsByType(T: string): Effect[] {
    const effects: Effect[] = [];

    this.effects.forEach((effect: Effect) => {
      if (effect.types.includes(T)) effects.push(effect);
    });
    return effects.slice()
  }
}
