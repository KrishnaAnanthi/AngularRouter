import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input()
  childVar: any; 
  @Input()
  childVar1: any;
  constructor() { }

  ngOnInit() {
    console.log('ng oninit is called', this.childVar);
  }
  ngOnChange() {
    debugger;
    console.log('ng onChange is called', this.childVar);
    console.log('ng onChange is called', this.childVar1);
  }

}
