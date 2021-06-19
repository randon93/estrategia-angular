import {NgModule} from '@angular/core';
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
import {HttpClientModule} from "@angular/common/http";
import {AulaModule} from "./aula/aula.module";

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent,
    GrupoComponent,
    EstudianteComponent,
    DocenteComponent,
    EstrategiaComponent
  ],
  exports: [
    BreadcrumbsComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent,
    GrupoComponent,
    EstudianteComponent,
    DocenteComponent,
    EstrategiaComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    AulaModule]
})
export class PagesModule {
}
