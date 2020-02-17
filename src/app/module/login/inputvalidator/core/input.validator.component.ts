import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  template: `

  `
})

export class InputValidatorComponent {
  text;
  textId = 'passwordid';
  @Input() public titleName:string = '';
  @Input() public type;
  @Output() textChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {

  }

  changeValue() {
    this.textChange.emit(this.text);
  }

}
