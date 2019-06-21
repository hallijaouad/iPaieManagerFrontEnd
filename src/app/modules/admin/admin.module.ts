import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { AdminRoutes } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { UserGridComponent } from './user/user-grid/user-grid.component';
import { UserFormComponent } from './user/user-form/form-user.component';


@NgModule({
  declarations: [AdminComponent, UserComponent, UserGridComponent, UserFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutes,
  ],
  entryComponents: [
    UserFormComponent
  ]
})
export class AdminModule { }
