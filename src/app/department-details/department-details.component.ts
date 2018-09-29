import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  deptId: number;
  constructor(private _route: ActivatedRoute, private _router: Router) {/* 
    this.deptId = parseInt(this._route.snapshot.paramMap.get('id')); */
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.deptId = parseInt(params.get('id'));
    });
  }

  ngOnInit() {
  }

  goPreviousDept() {
    this._router.navigate(['/department', this.deptId - 1]);
  }
  goNextDept() {
    this._router.navigate(['/department', this.deptId + 1]);
  }
  goToDept() {
    const selectedId = this.deptId;
    this._router.navigate(['/department', { id: selectedId , test : 'da-ta'}]);
  }
}
