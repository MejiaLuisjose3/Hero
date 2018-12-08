import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { app_routing }from './app.routes';

// servicios
import { HeroesService } from './service/heroes.service';

//componentes

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { TarjetaComponent } from './component/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
  AppComponent,
  NavbarComponent,
  HomeComponent,
  AboutComponent,
  HeroesComponent,
  HeroeComponent,
  BusquedaComponent,
  TarjetaComponent
  ],
  imports: [
  BrowserModule,
  app_routing
  ],
  providers: [
  HeroesService
  ],
  bootstrap: [AppComponent]
  })
export class AppModule { }
