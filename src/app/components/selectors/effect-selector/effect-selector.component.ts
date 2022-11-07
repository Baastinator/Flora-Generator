import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  Observable,
  Subscription,
} from 'rxjs';

import { Effect } from '../../../models/effects.model';
import { EffectsService } from '../../../services/effects.service';
import { FloraService } from '../../../services/flora.service';
import { TypeService } from '../../../services/type.service';

@Component({
  selector: 'app-effect-selector',
  templateUrl: './effect-selector.component.html',
  styleUrls: ['./effect-selector.component.scss', '../selector.scss']
})
export class SelectorComponent implements OnInit, OnDestroy {
  public effectSelector: string = '';
  public effects: Effect[] = [];
  public effectsSubscription!: Subscription;

  public type$!: Observable<string>;

  private randomSub$!: Observable<boolean>;
  private randomSub!: Subscription;

  public locked = false;

  constructor(
    private floraService: FloraService,
    private effectsService: EffectsService,
    private typeService: TypeService
  ) { }

  public ngOnInit(): void {
    this.type$ = this.typeService.getTypeSub();

    this.effectsSubscription = this.type$.subscribe((T: string) => {
      this.effects = this.effectsService.getAllEffectsByType(T);
    })

    this.randomSub$ = this.floraService.getRandomSub();
    this.randomSub = this.randomSub$.subscribe((B: boolean) => {
      if (!this.locked && B) this.randomise();
    })

  }

  ngOnDestroy(): void {
    this.effectsSubscription.unsubscribe();

    this.randomSub.unsubscribe();
  }

  public randomise(): void {
    this.effectSelector = this.floraService.randomisers[1](this.effects)
    this.onChange()
  }

  public onChange(): void {
    const effect = this.effects.find((E: Effect) => this.effectSelector === E.effect)

    if (effect) {
      this.effectsService.setEffect(effect)
    } else {
      Error("bruhhhhh")
    }
  }

}
