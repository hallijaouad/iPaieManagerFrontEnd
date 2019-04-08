import { Routes, RouterModule } from '@angular/router';
import { SalarieComponent } from './salarie.component';
import { SalarieFormComponent } from './components/salarie-form/salarie-form.component';
import { SalarieGridComponent } from './components/salarie-grid/salarie-grid.component';
const routes: Routes = [
  {
    path: '',
    component: SalarieComponent,
    children :[
      { path: '', redirectTo: 'salaries' },
      { path: 'salaries', component: SalarieGridComponent },
      { path: 'addSalarie', component: SalarieFormComponent },
      { path: 'salaries/:id', component: SalarieFormComponent },

    ]
  }
];

export const SalarieRoutes = RouterModule.forChild(routes);
