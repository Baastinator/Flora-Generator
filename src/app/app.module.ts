import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ColorSelectorComponent } from './components/selectors/color-selector/color-selector.component';
import { SelectorComponent } from './components/selectors/effect-selector/effect-selector.component';
import { SizeSelectorComponent } from './components/selectors/measurements/size-selector/size-selector.component';
import { SizesSelectorsComponent } from './components/selectors/measurements/sizes-selectors/sizes-selectors.component';
import { NameSelectorComponent } from './components/selectors/name-selector/name-selector.component';
import { SubtypeSelectorComponent } from './components/selectors/type-selector/subtype-selector/subtype-selector.component';
import { TypeSelectorComponent } from './components/selectors/type-selector/type-selector.component';
import { SideComponent } from './components/side/side.component';
import { NumToInchPipe } from './pipes/num-to-inch.pipe';
import { SizeToStringPipe } from './pipes/size-to-string.pipe';
import { TypeToStringPipe } from './pipes/type-to-string.pipe';
import { ColorsService } from './services/colors.service';
import { EffectsService } from './services/effects.service';
import { FloraService } from './services/flora.service';
import { MeasurementService } from './services/measurements.service';
import { NameService } from './services/name.service';
import { TypeService } from './services/type.service';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    TypeToStringPipe,
    SizeToStringPipe,
    NumToInchPipe,
    ColorSelectorComponent,
    NameSelectorComponent,
    SizesSelectorsComponent,
    SizeSelectorComponent,
    SelectorComponent,
    SubtypeSelectorComponent,
    TypeSelectorComponent
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
    MeasurementService,
    NameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
