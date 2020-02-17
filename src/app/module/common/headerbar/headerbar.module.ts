import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderbarComponent} from './core/headerbar.component';
import {HeaderBarDesktopComponent} from './desktop/headerbar.desktop.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [HeaderbarComponent, HeaderBarDesktopComponent],
  exports: [HeaderBarDesktopComponent],
  providers: []
})
export class HeaderBarModule { }
