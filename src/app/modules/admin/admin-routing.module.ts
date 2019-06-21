import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children :[
      { path: '', redirectTo: 'users' },
      { path: 'users', component: UserComponent },
    ]
  }
];

export const AdminRoutes = RouterModule.forChild(routes);
