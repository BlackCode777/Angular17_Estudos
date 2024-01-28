import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { UserComponent } from './componentes/user/user.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'User',
    component: UserComponent,
  },
];
