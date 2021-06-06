import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CentrosComponent} from "./centros/centros.component";
import {CentroComponent} from "./centro/centro.component";
import {AutenticationGuard} from "./autentication.guard";

const routes: Routes = [
  {path: "", component: CentrosComponent},
  {
    path: "solicitudes",
    loadChildren: () => import('./solicitud/solicitud.module').then(m => m.SolicitudModule),
    canActivate: [AutenticationGuard]
  },
  {path: "centros", component: CentrosComponent},
  {path: "centros/:centroId", component: CentroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
