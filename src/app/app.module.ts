import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {InputValidatorModule} from './module/login/inputvalidator/input.validator.module';
import {HeaderBarModule} from './module/common/headerbar/headerbar.module';
import {LoginPageModule} from './page/login/login.page.module';
import {HomePageModule} from './page/home/home.page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
