import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginDesktopComponent} from './desktop/login.desktop.component';
import {LoginPage} from './login.page';
import {LoginComponent} from './core/login.component';
import {FormsModule} from '@angular/forms';
import {InputValidatorModule} from '../../module/login/inputvalidator/input.validator.module';
import {HeaderBarModule} from '../../module/common/headerbar/headerbar.module';
import {CommonModule} from '@angular/common';
import {HomePageModule} from '../home/home.page.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
      InputValidatorModule,
      HeaderBarModule,
      CommonModule,
        HomePageModule,
    ],
  declarations: [LoginPage, LoginComponent, LoginDesktopComponent],
  exports: [LoginDesktopComponent],
  providers: []
})
export class LoginPageModule { }
