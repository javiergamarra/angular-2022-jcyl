import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilaSolicitudComponent} from "../fila-solicitud/fila-solicitud.component";
import {SelectorCentroComponent} from "../selector-centro/selector-centro.component";
import {SolicitudComponent} from "./solicitud.component";

@NgModule({
  declarations: [FilaSolicitudComponent,
    SelectorCentroComponent, SolicitudComponent],
  imports: [
    CommonModule
  ],
  exports: [SolicitudComponent]
})
export class SolicitudModule {
}
