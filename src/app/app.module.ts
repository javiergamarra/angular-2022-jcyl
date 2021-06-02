import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { FilaSolicitudComponent } from './fila-solicitud/fila-solicitud.component';

@NgModule({
  declarations: [
    AppComponent,
    SolicitudComponent,
    CentroComponent,
    SelectorCentroComponent,
    FilaSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
