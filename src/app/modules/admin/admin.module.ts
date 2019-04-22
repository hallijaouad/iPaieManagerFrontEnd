import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { AdminRoutes } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [AdminComponent, UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutes
  ]
})
export class AdminModule { }
