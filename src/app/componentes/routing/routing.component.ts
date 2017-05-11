import { Routes} from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { NotFoundComponent } from '../not-found/not-found.component';


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
