import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-centro',
  template: `{{nombreCentro}}`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent {

  nombreCentro: string = ''

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(
      params => this.nombreCentro = params.centroId
    )
  }

}
