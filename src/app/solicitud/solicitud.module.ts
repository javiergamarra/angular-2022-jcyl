import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilaSolicitudComponent} from "../fila-solicitud/fila-solicitud.component";
import {SelectorCentroComponent} from "../selector-centro/selector-centro.component";
import {SolicitudComponent} from "./solicitud.component";
import {DatosBancariosComponent} from "../datos-bancarios/datos-bancarios.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [FilaSolicitudComponent, SelectorCentroComponent, SolicitudComponent, DatosBancariosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule
  ],
  exports: [SolicitudComponent]
})
export class SolicitudModule {
}
