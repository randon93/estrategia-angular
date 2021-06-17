import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { GraficaUnoComponent } from './grafica-uno/grafica-uno.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    ProgressComponent,
    GraficaUnoComponent,
    PagesComponent,
  ],
  imports: [CommonModule, SharedModule, AppRoutingModule],
})
export class PagesModule {}
