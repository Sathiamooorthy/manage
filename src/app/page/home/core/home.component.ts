import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Titles} from '../../../constant/titles';
import {Department} from '../../../constant/department';
import {Employee} from '../../../constant/employee';

@Component({
  templateUrl: '../../../../template/noop.template.html',
})

export class HomeComponent {

  titles;

  selectedOption:string = 'employee';

  sourceList = [];
  selectedList = [];

  ngOnInit(){
    let list = Employee.list;
    this.titles = Titles.list;
    this.sourceList = list;
    list = null;
  }

  employee() {
    this.selectedOption = 'employee';
    this.selectedList = [];
    let list = Employee.list;
    this.sourceList = list;
    list = null;
  }

  department() {
    this.selectedOption = 'department';
    this.selectedList = [];
    let list = Department.list;
    this.sourceList = list;
    list = null;
  }

  onSelect(row){
    this.sourceList[row]['selectedState'] = !this.sourceList[row]['selectedState'];
    this.selectedList = [];
    for (let j=0; j < this.sourceList.length; j++){
      if (this.sourceList[j]['selectedState']){
        this.selectedList.push(this.sourceList[j]);
      }
    }
  }

  onSelectSelectedList(row){
    this.selectedList[row]['selectedState'] = !this.selectedList[row]['selectedState'];
    let tempSelectedList = [];
    for (let j=0; j < this.selectedList.length; j++){
      if (this.selectedList[j]['selectedState']){
        tempSelectedList.push(this.selectedList[j]);
      }
    }
    this.selectedList = tempSelectedList;
  }
}
