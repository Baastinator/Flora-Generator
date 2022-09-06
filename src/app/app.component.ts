import {
  Component,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

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
  public size$!: Observable<string>;

  public bruh = '2'

  public constructor(
    private titleService: Title,
    private floraService: FloraService,
    private typeService: TypeService,
    private measurementService: MeasurementService
  ) {
    this.titleService.setTitle("Flora Generator")
  }

  public ngOnInit(): void {
    this.subType$ = this.typeService.getSubType();
    this.type$ = this.typeService.getType();
    this.size$ = this.measurementService.getMainSize();
  }

  public RandomAll(): void {
    this.floraService.triggerRandom()
  }
}
