import {
  Component,
  OnInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Observable } from 'rxjs';

import { FloraService } from './services/flora.service';
import { TypeService } from './services/type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public type$!: Observable<string>;

  public bruh = '2'

  public constructor(
    private titleService: Title,
    private floraService: FloraService,
    private typeService: TypeService,
  ) {
    this.titleService.setTitle("Flora Generator")
  }

  public ngOnInit(): void {
    this.type$ = this.typeService.getType();
  }
  
  public RandomAll(): void {
    this.floraService.triggerRandom()
  }
}
