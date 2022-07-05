import { Injectable } from '@angular/core';

import effectsJson from '../../assets/effects.json';
import { Effects } from '../models/effects.model';

@Injectable()
export class FloraService {
  private effectsString: string;
  private effects: Effects[];

  public constructor() {
    this.effectsString = JSON.stringify(effectsJson);
    this.effects = JSON.parse(this.effectsString);
    console.log(this.effects);
  }

  public getEffects(): Effects[] {
    return this.effects.slice();
  }
}
