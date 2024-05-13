import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'home',
    redirectTo: '/',
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
