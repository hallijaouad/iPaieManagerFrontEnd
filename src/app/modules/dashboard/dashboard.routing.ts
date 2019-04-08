import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
// import { ProjectResolver } from './project-resolver.service';

// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

export const routes: Routes = [
    {
      path: '',
      component: DashboardComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
