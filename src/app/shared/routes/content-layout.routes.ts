import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'salaries',
    loadChildren: 'app/modules/salarie/salarie.module#SalarieModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/modules/admin/admin.module#AdminModule'
  }
];
