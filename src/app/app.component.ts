import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Effect } from './models/effects.model';
import { ColorsService } from './services/colors.service';
import { EffectsService } from './services/effects.service';
import { FloraService } from './services/flora.service';
import { MeasurementService } from './services/measurements.service';
import { TypeService } from './services/type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public type$!: Observable<string>;
  public subType$!: Observable<string>;
  public effect$!: Observable<Effect>
  public colors$!: Observable<string>[];
  public size$!: Observable<string>;
  public sizes$!: Observable<number>[]

  public bruh = '2'

  public constructor(
    private titleService: Title,
    private floraService: FloraService,
    private typeService: TypeService,
    private measurementService: MeasurementService,
    private effectsService: EffectsService,
    private colorsService: ColorsService
  ) {
    this.titleService.setTitle("Flora Generator")
  }

  public ngOnInit(): void {
    this.subType$ = this.typeService.getSubType();
    this.type$ = this.typeService.getType();
    this.size$ = this.measurementService.getMainSize();
    this.effect$ = this.effectsService.getEffect();
    this.type$.subscribe((T: string) => {
      this.colors$ = [];
      for (let n = 0; n < 4; n++) {
        this.colors$.push(this.colorsService.getColor(n))
      }

      this.sizes$ = [];
      (
        T === 'F' ? [0,1,2] :
        T === 'M' ? [0,1,2,3] :
        T === 'R' ? [0,1] :
        []
      ).forEach((n: number) => {
        this.sizes$.push(this.measurementService.getSize(n))
      })
    })
  }

  public OnSave() {

  }

  public RandomAll(): void {
    this.floraService.triggerRandom()
  }
}
