import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
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
        path: 'details/:id',
        component: ProductDetailsComponent,
      },
    ],
  },

  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [{ path: '', component: DashboardComponent }],
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
