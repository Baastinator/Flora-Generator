import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { FloraService } from '../../../../services/flora.service';
import { MeasurementService } from '../../../../services/measurements.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['../../selector.scss', './size-selector.component.scss']
})
export class SizeSelectorComponent implements OnInit, OnDestroy {
  @Input() public Id!: number;
  public locked = false;

  public selected = '';
  public measurements: string[] = [];

  private randomSub$!: Observable<boolean>;
  private randomSub!: Subscription;

  constructor(
    private FloraService: FloraService,
    private MeasurementService: MeasurementService,
    private changeDet: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.measurements = this.MeasurementService.getSizes();

    this.randomSub$ = this.FloraService.getRandomSub()
    this.randomSub = this.randomSub$.subscribe((B: boolean) => {
      if (!this.locked && B) this.randomise();
    })
  }

  public ngOnDestroy(): void {
    this.randomSub.unsubscribe();
  }

  public randomise(): void {
    this.selected = this.FloraService.randomisers[2](this.measurements, [30, 50, 10, 5]);
    this.onChange();

    this.changeDet.markForCheck();
  }

  public onChange(): void {
    this.MeasurementService.setMainSize(this.selected)
  }
}
