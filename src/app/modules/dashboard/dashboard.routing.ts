import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { ProjectResolver } from './project-resolver.service';

// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'Dashboard',
          component: DashboardComponent
        }
      ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
