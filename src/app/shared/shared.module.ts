import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule,
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule,]
})
export class SharedModule {
}
