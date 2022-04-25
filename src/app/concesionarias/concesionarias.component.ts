import {Component} from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-concesionarias',
  template: `
    <div *ngFor="let concesionaria of concesionarias">
      {{concesionaria.nombre}}
    </div>
  `,
  styleUrls: ['./concesionarias.component.css']
})
export class ConcesionariasComponent {

  collection;
  concesionarias: any;

  constructor(private firestore: Firestore) {
    this.collection = collection(firestore, 'concesionarias');
    this.concesionarias = collectionData(this.collection)
  }

}
