import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './command-bar.component';
import { MaterialModule } from './../../material.module';

@NgModule({
  declarations: [CommandBarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [CommandBarComponent]
})
export class CommandBarModule { }
