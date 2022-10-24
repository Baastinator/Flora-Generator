import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, take } from 'rxjs';
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
        ((): number[] => {
          switch (T) {
            case 'F':
              return [0, 1, 2];
            case 'M':
              return [0, 1, 2, 3];
            case 'R':
              return [0, 1];
            default:
              return [];
          }
        })()
      ).forEach((n: number) => {
        this.sizes$.push(this.measurementService.getSize(n))
      })
    })
  }


  public RandomAll(): void {
    this.floraService.triggerRandom(true)
    setTimeout(() => {
      this.floraService.triggerRandom(false)
    }, 10)
  }

  public OnSave(input: Input): Output {
    let output: Output = {
      type: '',
      effect: input.effect,
      color: [],
      size: '',
      sizes: []
    }
    input.type.pipe(take(1)).subscribe((S: string) => {
      output.type = S;
    })
    input.subType?.pipe(take(1)).subscribe((S: string) => {
      output.subType = S;
    })
    input.color.forEach((CO: Observable<string>, n: number) => {
      CO.pipe(take(1)).subscribe((C: string) => {
        output.color[n] = C;
      })
    })
    input.size.pipe(take(1)).subscribe((S: string) => {
      output.size = S;
    })
    input.sizes.forEach((SO: Observable<number>, n: number) => {
      SO.pipe(take(1)).subscribe((S: number) => {
        output.sizes[n] = S;
      })
    })

    console.log(output);

    return output;
  }
}

interface Input {
  type: Observable<string>,
  subType?: Observable<string>,
  effect: Effect,
  color: Observable<string>[],
  size: Observable<string>,
  sizes: Observable<number>[]
}

interface Output {
  type: string,
  subType?: string,
  effect: Effect,
  color: string[],
  size: string,
  sizes: number[]
}
