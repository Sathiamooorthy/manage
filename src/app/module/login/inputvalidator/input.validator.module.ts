import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputValidatorComponent} from './core/input.validator.component';
import {InputValidatorDesktopComponent} from './desktop/input.validator.desktop.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule],
  declarations: [InputValidatorComponent, InputValidatorDesktopComponent],
  exports: [InputValidatorDesktopComponent],
  providers: []
})
export class InputValidatorModule { }
