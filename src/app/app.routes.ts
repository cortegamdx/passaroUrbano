import { DiversaoComponent } from './diversao/diversao.component';
import { HomeComponent } from './home/home.component';
import {Routes} from '@angular/router'
import { RestaurantesComponent } from './restaurantes/restaurantes.component';

export const ROUTES: Routes=[
    {path:'', component:HomeComponent},
    {path:'restaurantes', component: RestaurantesComponent},
    {path: 'diversao', component: DiversaoComponent}
]