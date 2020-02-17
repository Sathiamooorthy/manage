import {Component} from '@angular/core';

@Component({
  template: `

  `
})

export class HeaderbarComponent {

  public userName;
  constructor() {
    this.userName  = localStorage.getItem('userNameVal');
  }

}
