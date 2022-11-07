import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Observable } from 'rxjs';
import { NameService } from 'src/app/services/name.service';

import { Effect } from '../../models/effects.model';
import { ColorsService } from '../../services/colors.service';
import { EffectsService } from '../../services/effects.service';
import { MeasurementService } from '../../services/measurements.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  @Input() public type!: string;
  public name$!: Observable<string>;
  public effect$!: Observable<Effect>;
  public colors$: Observable<string>[] = [];
  public size$!: Observable<string>;
  public sizes$: Observable<number>[] = [];
  public subtype$!: Observable<string>;

  constructor(
    private effectsService: EffectsService,
    private typeService: TypeService,
    private colorsService: ColorsService,
    private measurementService: MeasurementService,
    private nameService: NameService
  ) { }

  ngOnInit(): void {
    this.effect$ = this.effectsService.getEffectSub();
    this.subtype$ = this.typeService.getSubType();

    for (let n of [0, 1, 2, 3]) {
      this.colors$[n] = this.colorsService.getColorSub(n);
    }

    this.size$ = this.measurementService.getMainSizeSub();

    for (let n of ([0, 1, 2, 3])) {
      this.sizes$[n] = this.measurementService.getSizeSub(n);
    }

    this.name$ = this.nameService.getNameSub();
  }

}
