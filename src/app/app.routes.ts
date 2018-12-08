import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { HeroesComponent } from './component/heroes/heroes.component';
import { AboutComponent } from './component/about/about.component';
import { HeroeComponent } from './component/heroe/heroe.component';
import { BusquedaComponent } from './component/busqueda/busqueda.component';


const app_routes: Routes=[
{path:'', component: HomeComponent},
{path:'home', component: HomeComponent},
{path:'about', component: AboutComponent},
{path:'heroes', component: HeroesComponent},
{path:'heroe/:id', component: HeroeComponent},
{path: 'buscar/:nombre', component: BusquedaComponent },
{path: '**',pathMatch: 'full', redirectTo: '' }
];

export const app_routing =RouterModule.forRoot(app_routes);
