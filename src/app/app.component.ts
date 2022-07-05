import {
  Component,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Effects } from './models/effects.model';
import { FloraService } from './services/flora.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public effectSelector: string = '';
  public effects: Effects[] = [];

  public constructor(
    private titleService: Title,
    private floraService: FloraService
  ) {
    this.titleService.setTitle("Flora Generator")
  }

  public ngOnInit(): void {
    this.effects = this.floraService.getEffects();
  }
}
