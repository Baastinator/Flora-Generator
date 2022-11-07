import {
  Component,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import {
  Observable,
  take,
} from 'rxjs';

import typeNamesImport from '../assets/names/typenames.json';
import { Effect } from './models/effects.model';
import {
  FloraInput,
  FloraOutput,
} from './models/flora.model';
import { ColorsService } from './services/colors.service';
import { EffectsService } from './services/effects.service';
import { FloraService } from './services/flora.service';
import { MeasurementService } from './services/measurements.service';
import { NameService } from './services/name.service';
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
  public sizes$!: Observable<number>[];

  private typeNames: { [key: string]: string[] };

  public constructor(
    private titleService: Title,
    private floraService: FloraService,
    private typeService: TypeService,
    private measurementService: MeasurementService,
    private effectsService: EffectsService,
    private colorsService: ColorsService,
    private nameService: NameService
  ) {
    this.titleService.setTitle("Flora Generator");

    const typeNamesJSON = JSON.stringify(typeNamesImport) as string;
    this.typeNames = JSON.parse(typeNamesJSON) as { F: string[], M: string[], R: string[] }

    console.table(this.typeNames)
  }


  public ngOnInit(): void {
    this.subType$ = this.typeService.getSubType();
    this.type$ = this.typeService.getTypeSub();
    this.size$ = this.measurementService.getMainSizeSub();
    this.effect$ = this.effectsService.getEffectSub();
    this.type$.subscribe((T: string) => {
      this.colors$ = [];
      for (let n = 0; n < 4; n++) {
        this.colors$.push(this.colorsService.getColorSub(n))
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
        this.sizes$.push(this.measurementService.getSizeSub(n))
      })
    })
  }


  public RandomAll(): void {
    this.floraService.triggerRandom(true)
    setTimeout(() => {
      this.floraService.triggerRandom(false)
    }, 10)
  }

  public OnSave(input: FloraInput): void {
    let output: FloraOutput = {
      type: '',
      effect: input.effect,
      color: [],
      size: '',
      sizes: []
    };
    input.type.pipe(take(1)).subscribe((S: string) => {
      output.type = S;
    });
    input.subType?.pipe(take(1)).subscribe((S: string) => {
      output.subType = S;
    });
    input.color.forEach((CO: Observable<string>, n: number) => {
      CO.pipe(take(1)).subscribe((C: string) => {
        output.color[n] = C;
      })
    });
    input.size.pipe(take(1)).subscribe((S: string) => {
      output.size = S;
    });
    input.sizes.forEach((SO: Observable<number>, n: number) => {
      SO.pipe(take(1)).subscribe((S: number) => {
        output.sizes[n] = S;
      })
    });

    this.nameService.resetPools();

    this.nameService.addSeconds(
      ((): string[] => {
        const names = this.typeNames[output.type]
        if (!names) return [];
        return names;
      })()
    )

    if (output.effect.names) {
      this.nameService.addFirsts(output.effect.names)
    }

    this.nameService.listPools();

    // console.log(output);

  }
}

