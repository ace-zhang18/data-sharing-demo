import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';
import { ChannelMenuComponent } from './channel-menu/channel-menu.component';
import { SliderPaneComponent } from './slider-pane/slider-pane.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { PixiFormComponent } from './pixi-form/pixi-form.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { reducers } from './reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    ChannelMenuComponent,
    SliderPaneComponent,
    ColorPickerComponent,
    PixiFormComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ColorPickerModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatSliderModule,
    MatTabsModule,
    MatToolbarModule,
    Ng5SliderModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({}),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    })
  ],
  providers: [Document],
  bootstrap: [AppComponent]
})
export class AppModule { }
