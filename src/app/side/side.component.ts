import {
  Component,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';

import { Effect } from '../models/effects.model';
import { ColorsService } from '../services/colors.service';
import { EffectsService } from '../services/effects.service';
import { TypeService } from '../services/type.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  public name$!: Observable<string>;
  public effect$!: Observable<Effect>;
  public type$!: Observable<string>;
  public colors$: Observable<string>[] = [];

  constructor(
    private effectsService: EffectsService,
    private typeService: TypeService,
    private colorsService: ColorsService
  ) { }

  ngOnInit(): void {
    this.effect$ = this.effectsService.getEffect();

    this.type$ = this.typeService.getType();

    for (let n of [0,1,2]) {
      this.colors$[n] = this.colorsService.getColor(n);
    }
  }

}
