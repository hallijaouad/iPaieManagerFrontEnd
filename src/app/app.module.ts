import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import {
  MatFormFieldDefaultOptions,
  MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';


const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};


@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
