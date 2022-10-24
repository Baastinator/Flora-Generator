import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import { EffectsService } from '../../services/effects.service';
import { FloraService } from '../../services/flora.service';
import { MeasurementService } from '../../services/measurements.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.scss', '../selector.scss']
})
export class TypeSelectorComponent implements OnInit, OnDestroy {
  public types: string[] = [];
  public typeSelector: string = 'F';


  constructor(
    private typeService: TypeService,
    private floraService: FloraService,
    private effectsService: EffectsService,
    private colorsService: ColorsService,
    private measurementService: MeasurementService
  ) { }

  ngOnInit(): void {
    this.types = this.typeService.getTypes();
    this.onChange();
  }

  ngOnDestroy(): void {
  }

  public randomise(): void {
    this.typeSelector = this.floraService.randomisers[2](['F', 'M', "R"], [100, 80, 50]);
    this.onChange();
  }

  public onChange(): void {
    this.typeService.setType(this.typeSelector)
    this.effectsService.setEffect({ types: [], effect: '', names: [] });
    [0, 1, 2, 3].forEach((n: number) => {
      this.colorsService.setColor(n, '')
    });
    this.measurementService.setMainSize('');
    [0, 1, 2, 3].forEach((n: number) => {
      this.measurementService.setSize(n, 0)
    })
  }
}
