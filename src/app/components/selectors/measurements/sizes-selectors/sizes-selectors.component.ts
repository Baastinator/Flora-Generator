import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import rangeJson from 'src/assets/sizeRanges.json';
import { FloraService } from '../../../../services/flora.service';
import { MeasurementService } from '../../../../services/measurements.service';
import { TypeService } from '../../../../services/type.service';

@Component({
  selector: 'app-sizes-selectors',
  templateUrl: './sizes-selectors.component.html',
  styleUrls: ['../../selector.scss', './sizes-selectors.component.scss']
})
export class SizesSelectorsComponent implements OnInit, OnDestroy {
  @Input() size: string = '';
  @Input() subType: string = '';

  public selectors: string[] = [];
  public selSizes: string[] = [];
  public locked: boolean[] = [];

  public randomSub!: Subscription;
  private randomSub$!: Observable<boolean>;

  public randomLock: boolean = true;

  public sizes$!: Observable<number>[];

  public type$!: Observable<string>;
  private typeSub!: Subscription;

  constructor(
    private floraService: FloraService,
    private typeService: TypeService,
    private measurementService: MeasurementService
  ) { }

  ngOnInit(): void {
    this.type$ = this.typeService.getTypeSub();
    this.typeSub = this.type$.subscribe((T: string) => {
      this.typeSubResponse(T);
    });

    this.randomSub$ = this.floraService.getRandomSub();
    this.randomSub = this.randomSub$.subscribe((B: boolean) => {
      for (let i = 0; i < this.selectors.length; i++) {
        if (!this.locked[i] && B) this.onRandomise()
      }
    })
  }

  ngOnDestroy(): void {
    this.typeSub.unsubscribe();
  }

  public typeSubResponse(T: string): void {
    if (T === 'M') {
      this.selectors = [
        'Stem Width',
        'Stem Length',
        'Cap Diameter',
        'Cap Thickness'
      ];
    } else if (T === 'F') {
      this.selectors = [
        'Stem Width',
        'Stem Length',
        'Blossom Diameter'
      ];
    } else if (T === 'R') {
      this.selectors = [
        'Root Depth',
        'Root Width'
      ];
    } else {
      this.selectors = [];
    }
    for (let i = 0; i < this.selectors.length; i++) {
      this.selSizes[i] = '' + 0;
      this.locked[i] = false;
    }
  }

  public onRandomise(): void {


    const len = this.selectors.length
    const tNum = len === 3 ? 1 : len === 2 ? 2 : 0
    const root = tNum === 2
    const sTNum = this.subType === "Fibrous" ? 0 :
      this.subType === "Taproot" ? 1 : -1
    interface range {
      min: number;
      max: number;
    }

    const ranges = JSON.parse(JSON.stringify(rangeJson)) as range[][][]

    const genSize = (T: number, S: number, P: number): number => { // Mushroom
      const rand = (Math.floor(+Math.random() * 1000 + 0.5) / 1000)
      const range = ranges[T][S][P]
      const ranged = (range.max - range.min) * rand + range.min;
      return ranged
    };

    for (let i = 0; i < len; i++) {
      if (!this.locked[i]) {
        this.selSizes[i] = '' + genSize(tNum, this.measurementService.sizeToNum(this.size), (root ? 2 * sTNum : 0) + i);
        this.measurementService.setSize(i, +this.selSizes[i])
      }
    }

  }
}
