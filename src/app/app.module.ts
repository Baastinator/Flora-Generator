import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SizeToStringPipe } from './pipes/size-to-string.pipe';
import { TypeToStringPipe } from './pipes/type-to-string.pipe';
import {
  ColorSelectorComponent,
} from './selectors/color-selector/color-selector.component';
import {
  SelectorComponent,
} from './selectors/effect-selector/effect-selector.component';
import {
  SizeSelectorComponent,
} from './selectors/measurements/size-selector/size-selector.component';
import {
  TypeSelectorComponent,
} from './selectors/type-selector/type-selector.component';
import { ColorsService } from './services/colors.service';
import { EffectsService } from './services/effects.service';
import { FloraService } from './services/flora.service';
import { MeasurementService } from './services/measurements.service';
import { TypeService } from './services/type.service';
import { SideComponent } from './side/side.component';
import { SizesSelectorsComponent } from './selectors/measurements/sizes-selectors/sizes-selectors.component';
import { NumToInchPipe } from './pipes/num-to-inch.pipe';
import { SubtypeSelectorComponent } from './selectors/type-selector/subtype-selector/subtype-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    TypeSelectorComponent,
    SideComponent,
    TypeToStringPipe,
    ColorSelectorComponent,
    SizeSelectorComponent,
    SizeToStringPipe,
    SizesSelectorsComponent,
    NumToInchPipe,
    SubtypeSelectorComponent,
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
