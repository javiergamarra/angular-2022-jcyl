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
import {FirestoreModule} from "@angular/fire/firestore";
import {ConcesionariasComponent} from './concesionarias/concesionarias.component';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from "../environments/environment";

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
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    FirestoreModule,
    StoreModule.forRoot({user: userReducer}),
    ButtonsModule.forRoot()
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
