import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CramSchoolListComponent} from "./cram-school-list/cram-school-list.component";
import {CramSchoolDetailComponent} from "./cram-school-detail/cram-school-detail.component";
import {CramSchoolAppComponent} from "./cram-school-app.component";

const routes: Routes = [
  {
    path: '', component: CramSchoolAppComponent,
  },
  {
    path: ':cramSchoolSuffix', component: CramSchoolDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CramSchoolsRoutingModule { }
