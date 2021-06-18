import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbsComponent} from '../shared/breadcrumbs/breadcrumbs.component';
import {GraficaUnoComponent} from './grafica-uno/grafica-uno.component';
import {ProgressComponent} from './progress/progress.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {GrupoComponent} from './grupo/grupo.component';
import {EstudianteComponent} from './estudiante/estudiante.component';
import {DocenteComponent} from './docente/docente.component';
import {EstrategiaComponent} from './estrategia/estrategia.component';
import {AulaComponent} from './aula/aula.component';
import {HttpClientModule} from "@angular/common/http";
import {ListarAulaComponent} from "./aula/listar/listar-aula.component";

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent,
    GrupoComponent,
    EstudianteComponent,
    DocenteComponent,
    EstrategiaComponent,
    AulaComponent,
    ListarAulaComponent
  ],
  exports: [
    BreadcrumbsComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent,
    GrupoComponent,
    EstudianteComponent,
    DocenteComponent,
    EstrategiaComponent,
    AulaComponent,
    ListarAulaComponent
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule, HttpClientModule]
})
export class PagesModule {
}
