import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <p>
      employee-list works! 
    </p> 
    <app-child-component [childVar]="parentVar" [childVar1]="parentVar1"></app-child-component>
    <button (click)="onClickButton()">Hello</button>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {
  parentVar = [{ key: 'a', value: 'AA' }, { key: 'b', value: 'BB' }];
  parentVar1 = [{ key: 'a1', value: 'AA1' }, { key: 'b1', value: 'BB1' }];
  constructor() { }

  ngOnInit() {
  }
  onClickButton() {debugger;
    this.parentVar[0].key = 'c';
    this.parentVar[0].value = 'CC';
    this.parentVar1 = this.parentVar;
  }
}
