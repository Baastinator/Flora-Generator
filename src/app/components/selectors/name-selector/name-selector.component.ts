import { Component, OnInit } from '@angular/core';
import { NameService } from '../../../services/name.service';

@Component({
  selector: 'app-name-selector',
  templateUrl: './name-selector.component.html',
  styleUrls: ['./name-selector.component.scss', '../selector.scss']
})
export class NameSelectorComponent implements OnInit {


  constructor(
    private nameService: NameService
  ) {

  }

  public ngOnInit(): void {

  }

}
