import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CentroComponent} from './centro/centro.component';
import {CentrosComponent} from './centros/centros.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {StoreModule} from "@ngrx/store";
import {userReducer} from "../login-action";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import { ConcesionariasComponent } from './concesionarias/concesionarias.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DNIDirective } from './dni.directive';

@NgModule({
  declarations: [
    AppComponent,
    CentroComponent,
    CentrosComponent,
    ConcesionariasComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule,
    StoreModule.forRoot({user: userReducer}),
    ButtonsModule.forRoot()
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
