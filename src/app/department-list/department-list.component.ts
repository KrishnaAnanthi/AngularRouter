import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <ul class="items">
    <li  *ngFor='let dept of departments' [class.highLightClass]="dept.id==selectedId" (click)="onDepartmentDetailsSelect(dept)">
    <span class="badge"> {{dept.id}} </span>{{dept.name}}</li>
    </ul>
  `,
  styles: [`
  .highLightClass{
    color:red;
  }
  `]
})
export class DepartmentListComponent implements OnInit {
  selectedId: number;
  departments = [
    { 'id': 1, 'name': 'AngularJs' },
    { 'id': 2, 'name': 'Angular 5' },
    { 'id': 3, 'name': 'Node Js' },
    { 'id': 4, 'name': 'CSS' },
    { 'id': 5, 'name': 'Javascript' }
  ];
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get('id'));
    });
  }
  onDepartmentDetailsSelect(dept) {
    this._router.navigate(['/department', dept.id]);
  }

}
