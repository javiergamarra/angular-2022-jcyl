import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CentroComponent} from './centro/centro.component';
import {HttpClientModule} from "@angular/common/http";
import {CentrosComponent} from './centros/centros.component';
import {SolicitudModule} from "./solicitud/solicitud.module";
import {DatosBancariosComponent} from './datos-bancarios/datos-bancarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CentroComponent,
    CentrosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SolicitudModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
