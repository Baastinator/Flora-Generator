import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { FloraService } from '../../services/flora.service';
import { TypeService } from '../../services/type.service';

@Component({
  selector: 'app-type-selector',
  templateUrl: './type-selector.component.html',
  styleUrls: ['./type-selector.component.scss','../selector.scss']
})
export class TypeSelectorComponent implements OnInit, OnDestroy {
  public types: string[] = [];
  public typeSelector: string = 'R';


  constructor(
    private typeService: TypeService,
    private floraService: FloraService
  ) { }

  ngOnInit(): void {
    this.types = this.typeService.getTypes();
    this.onChange();
  }

  ngOnDestroy(): void {
  }

  public randomise(): void {
    this.typeSelector = this.floraService.randomisers[2](['F','M',"R"],[100,80,50]);
    this.onChange();
  }

  public onChange(): void {
    this.typeService.setType(this.typeSelector)
  }

}
