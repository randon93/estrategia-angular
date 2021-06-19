import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RegistrarAulaComponent} from "./registrar-aula/registrar-aula.component";
import {ListarAulaComponent} from "./listar/listar-aula.component";
import {ActualizarAulaComponent} from "./actualizar-aula/actualizar-aula.component";
import {EliminarAulaComponent} from "./eliminar-aula/eliminar-aula.component";

const routes: Routes = [
  {
    path: 'registrar',
    component: RegistrarAulaComponent
  },
  {
    path: 'listar',
    component: ListarAulaComponent
  },
  {
    path: 'actualizar',
    component: ActualizarAulaComponent
  },
  {
    path: 'eliminar',
    component: EliminarAulaComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'listar'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class AulaRoutingModule {
}
