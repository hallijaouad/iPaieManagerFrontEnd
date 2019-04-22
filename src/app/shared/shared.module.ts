import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { CommandBarModule } from './components/command-bar/command-bar.module';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { SpinnerModule } from './components/spinner/spinner.module';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
      ControlMessagesComponent,
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MaterialModule,
      ControlMessagesComponent,
      SpinnerModule,
      CommandBarModule
    ]
    
})
export class SharedModule { }
