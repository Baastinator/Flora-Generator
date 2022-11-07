import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';

import { NameService } from '../../../services/name.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-name-selector',
  templateUrl: './name-selector.component.html',
  styleUrls: ['./name-selector.component.scss', '../selector.scss']
})
export class NameSelectorComponent implements OnInit {
  public names: string[] = [];
  public selectedIndex = -1;

  constructor(
    private nameService: NameService
  ) {

  }

  public ngOnInit(): void {

  }

  public onGenerate(): void {
    this.names = [];
    for (let i = 0; i < 10; i++) {
      let name = this.nameService.rollName();

      while (this.names.includes(name)) {
        name = this.nameService.rollName();
      }

      this.names.push(name);
    }
    this.selectedIndex = -1;
  }

  public onSelect(i: number): void {
    this.selectedIndex = i;
  }

  public onSubmit(): void {
    this.nameService.setName(this.names[this.selectedIndex]);
  }

}
