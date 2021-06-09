import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CentroComponent} from './centro/centro.component';
import {CentrosComponent} from './centros/centros.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "../login-action";

@NgModule({
  declarations: [
    AppComponent,
    CentroComponent,
    CentrosComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    StoreModule.forRoot({user: userReducer})
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
