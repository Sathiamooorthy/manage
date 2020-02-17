import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginDesktopComponent} from './page/login/desktop/login.desktop.component';
import {HomeDesktopComponent} from './page/home/desktop/home.desktop.component';

const routes: Routes = [
  { path: 'login', component: LoginDesktopComponent },
  { path: 'home', component: HomeDesktopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
