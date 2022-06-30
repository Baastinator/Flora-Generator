import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Flora } from './models/flora.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flora-Generator';

  bruh: Flora = new Flora();

  constructor(private titleService: Title) {
    this.titleService.setTitle("Flora Generator")
    this.bruh.type = 'flora';
  }
}
