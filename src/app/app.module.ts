import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AulaRoutingModule } from './pages/aula/aula-routing.module';

@NgModule({
  declarations: [AppComponent, NoPageFoundComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule, AulaRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
