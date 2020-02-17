import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manage';

  constructor (private route: ActivatedRoute, private router: Router){
    let userName = localStorage.getItem('userNameVal');
    if (userName){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/login']);
    }
  }
}
