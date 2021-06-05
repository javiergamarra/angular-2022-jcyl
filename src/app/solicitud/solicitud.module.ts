import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilaSolicitudComponent} from "../fila-solicitud/fila-solicitud.component";
import {SelectorCentroComponent} from "../selector-centro/selector-centro.component";
import {SolicitudComponent} from "./solicitud.component";
import {DatosBancariosComponent} from "../datos-bancarios/datos-bancarios.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [FilaSolicitudComponent, SelectorCentroComponent, SolicitudComponent, DatosBancariosComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SolicitudComponent]
})
export class SolicitudModule {
}
