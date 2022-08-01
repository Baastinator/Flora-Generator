import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypeToStringPipe } from './pipes/type-to-string.pipe';
import {
  ColorSelectorComponent,
} from './selectors/color-selector/color-selector.component';
import {
  SelectorComponent,
} from './selectors/effect-selector/effect-selector.component';
import {
  TypeSelectorComponent,
} from './selectors/type-selector/type-selector.component';
import { FloraService } from './services/flora.service';
import { SideComponent } from './side/side.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    TypeSelectorComponent,
    SideComponent,
    TypeToStringPipe,
    ColorSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FloraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
