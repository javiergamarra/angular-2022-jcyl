import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `{{centro.nombre}}`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input()
  centro: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
