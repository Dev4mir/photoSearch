import { Routes} from '@angular/router';

import { HomeComponent } from '../componentes/home/home.component';
import { AboutComponent } from '../componentes/about/about.component';
import { ServicesComponent } from '../componentes/services/services.component';
import { NotFoundComponent } from '../componentes/not-found/not-found.component';


export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
