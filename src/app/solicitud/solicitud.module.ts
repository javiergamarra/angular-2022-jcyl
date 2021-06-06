import {NgModule} from '@angular/core';
import {FilaSolicitudComponent} from "../fila-solicitud/fila-solicitud.component";
import {SelectorCentroComponent} from "../selector-centro/selector-centro.component";
import {SolicitudComponent} from "./solicitud.component";
import {DatosBancariosComponent} from "../datos-bancarios/datos-bancarios.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [FilaSolicitudComponent, SelectorCentroComponent, SolicitudComponent, DatosBancariosComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: SolicitudComponent}])
  ],
  exports: [SolicitudComponent]
})
export class SolicitudModule {
}
