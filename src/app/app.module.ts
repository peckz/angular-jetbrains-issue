import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp01Component } from './comp01/comp01.component';
import { Comp02Component } from './comp02/comp02.component';
import { Comp03Component } from './comp03/comp03.component';
import { Comp04Component } from './comp04/comp04.component';
import { Comp05Component } from './comp05/comp05.component';
import { Comp06Component } from './comp06/comp06.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp01Component,
    Comp02Component,
    Comp03Component,
    Comp04Component,
    Comp05Component,
    Comp06Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
