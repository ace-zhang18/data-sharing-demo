import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng5SliderModule } from 'ng5-slider';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelMenuComponent } from './channel-menu/channel-menu.component';
import { SliderPaneComponent } from './channel-menu/slider-pane/slider-pane.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ColorPickerComponent } from './channel-menu/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelMenuComponent,
    SliderPaneComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatSliderModule,
    MatFormFieldModule,
    Ng5SliderModule,
    ColorPickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
