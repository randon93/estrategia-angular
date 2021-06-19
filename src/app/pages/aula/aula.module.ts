import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegistrarAulaComponent} from "./registrar-aula/registrar-aula.component";
import {ListarAulaComponent} from "./listar/listar-aula.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AulaRoutingModule} from "./aula-routing.module";
import { ActualizarAulaComponent } from './actualizar-aula/actualizar-aula.component';
import { EliminarAulaComponent } from './eliminar-aula/eliminar-aula.component';



@NgModule({
  declarations: [RegistrarAulaComponent, ListarAulaComponent, ActualizarAulaComponent, EliminarAulaComponent],
  exports: [RegistrarAulaComponent, ListarAulaComponent],
  imports: [CommonModule, ReactiveFormsModule, AulaRoutingModule]
})
export class AulaModule {
}
