import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SolicitudComponent} from "./solicitud/solicitud.component";
import {CentrosComponent} from "./centros/centros.component";
import {CentroComponent} from "./centro/centro.component";

const routes: Routes = [
  {path: "", component: SolicitudComponent},
  {path: "solicitudes", component: SolicitudComponent},
  {path: "centros", component: CentrosComponent},
  {path: "centros/:centroId", component: CentroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
