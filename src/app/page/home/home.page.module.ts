import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomePage} from './home.page';
import {HomeComponent} from './core/home.component';
import {HomeDesktopComponent} from './desktop/home.desktop.component';
import {HeaderBarModule} from '../../module/common/headerbar/headerbar.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {InputValidatorModule} from '../../module/login/inputvalidator/input.validator.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InputValidatorModule,
    HeaderBarModule,
    CommonModule,
  ],
  declarations: [HomePage, HomeComponent, HomeDesktopComponent],
  exports: [HomeDesktopComponent],
  providers: []
})
export class HomePageModule { }
