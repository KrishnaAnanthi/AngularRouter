import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';

const routes: Routes = [
    /*  {
         path: '',
         component: DepartmentListComponent
     },  */
    /*  {
         path: '',
         redirectTo: '/department',
         pathMatch:'prefix'
     }, */
    {
        path: '',
        redirectTo: '/department',
        pathMatch: 'full'
    },
    {
        path: 'department',
        component: DepartmentListComponent
    }, {
        path: 'department/:id',
        component: DepartmentDetailsComponent
    }, {
        path: 'employee',
        component: EmployeeListComponent
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent,
    PageNotFoundComponent, DepartmentDetailsComponent];
