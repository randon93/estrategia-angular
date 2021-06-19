import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {ProgressComponent} from './progress/progress.component';
import {GraficaUnoComponent} from './grafica-uno/grafica-uno.component';
import {GrupoComponent} from "./grupo/grupo.component";
import {EstudianteComponent} from "./estudiante/estudiante.component";
import {DocenteComponent} from "./docente/docente.component";
import {EstrategiaComponent} from "./estrategia/estrategia.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashBoardComponent,
      },
      {
        path: 'progress',
        component: ProgressComponent,
      },
      {
        path: 'graficaUno',
        component: GraficaUnoComponent,
      },
      {
        path: 'grupo',
        component: GrupoComponent,
      },
      {
        path: 'estudiante',
        component: EstudianteComponent,
      },
      {
        path: 'docente',
        component: DocenteComponent,
      },
      {
        path: 'estrategia',
        component: EstrategiaComponent,
      },
      {
        path: 'aula',
        loadChildren: () => import('../pages/aula/aula.module').then(mod => mod.AulaModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
