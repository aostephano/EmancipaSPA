import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CramSchoolListComponent} from "./cram-school-list/cram-school-list.component";
import {CramSchoolElementComponent} from "./cram-school-element/cram-school-element.component";

const routes: Routes = [
  {
    path: '', component: CramSchoolListComponent,
  },
  {
    path: ':uuid', component: CramSchoolElementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CramSchoolsRoutingModule { }
