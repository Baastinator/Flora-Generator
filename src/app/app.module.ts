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
  RangeSelectorComponent,
} from './selectors/measurements/range-selector/range-selector.component';
import {
  TypeSelectorComponent,
} from './selectors/type-selector/type-selector.component';
import { ColorsService } from './services/colors.service';
import { EffectsService } from './services/effects.service';
import { FloraService } from './services/flora.service';
import { MeasurementService } from './services/measurements.service';
import { TypeService } from './services/type.service';
import { SideComponent } from './side/side.component';
import { SizeToStringPipe } from './pipes/size-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    TypeSelectorComponent,
    SideComponent,
    TypeToStringPipe,
    ColorSelectorComponent,
    RangeSelectorComponent,
    SizeToStringPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FloraService,
    EffectsService,
    TypeService,
    ColorsService,
    MeasurementService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
