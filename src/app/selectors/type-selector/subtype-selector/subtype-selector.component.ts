import {
    Component,
    OnInit,
} from '@angular/core';

import { FloraService } from '../../../services/flora.service';
import { TypeService } from '../../../services/type.service';

@Component({
  selector: 'app-subtype-selector',
  templateUrl: './subtype-selector.component.html',
  styleUrls: ['./subtype-selector.component.scss','../../selector.scss']
})
export class SubtypeSelectorComponent implements OnInit {
  public subTypeSelector: string = '';
  public subtypes: string[] = ['Fibrous','Taproot'];

  constructor(
    private floraService: FloraService,
    private typeService: TypeService
  ) { }

  public ngOnInit(): void {
  }

  public onRandomise(): void {
    this.subTypeSelector = this.floraService.randomisers[0](this.subtypes.slice());
    this.onChange();
  }

  public onChange(): void {
    this.typeService.setSubType(this.subTypeSelector)
  }
}
