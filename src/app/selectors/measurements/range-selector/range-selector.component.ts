import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import {
  Observable,
  Subscription,
} from 'rxjs';

import { FloraService } from '../../../services/flora.service';
import { MeasurementService } from '../../../services/measurements.service';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-range-selector',
  templateUrl: './range-selector.component.html',
  styleUrls: ['../../selector.scss','./range-selector.component.scss']
})
export class RangeSelectorComponent implements OnInit, OnDestroy {
  @Input() public Id!: number;
  public locked = false;

  public selected = '';
  public measurements: string[] = [];

  private randomSub$!: Observable<boolean>;
  private randomSub!: Subscription;

  constructor(
    private FloraService: FloraService,
    private MeasurementService: MeasurementService
  ) { }

  public ngOnInit(): void {
    this.measurements = this.MeasurementService.getRange();

    // this.onChange(0);
    // this.onChange(1);
    this.randomSub$ = this.FloraService.getRandomSub()
    this.randomSub = this.randomSub$.subscribe(() => {
      if (!this.locked) this.randomise();
    })
  }

  public ngOnDestroy(): void {
    this.randomSub.unsubscribe();
  }

  public randomise(): void {
    this.selected = this.FloraService.randomisers[0](this.measurements);
  }

  public onChange(n: number): void {
    this.
}
