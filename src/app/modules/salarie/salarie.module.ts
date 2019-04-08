
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { SalarieRoutes } from './salarie-routing.module';
import { SalarieComponent } from './salarie.component';
import { SalarieFormComponent } from './components/salarie-form/salarie-form.component';
import { SalarieGridComponent } from './components/salarie-grid/salarie-grid.component';

@NgModule({
  declarations: [SalarieComponent, SalarieFormComponent, SalarieGridComponent],
  imports: [
    CommonModule,
    SharedModule,
    SalarieRoutes,
  ]
})
export class SalarieModule { }
