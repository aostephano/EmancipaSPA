import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CramSchoolsRoutingModule } from './cram-schools-routing.module';
import { CramSchoolListComponent } from './cram-school-list/cram-school-list.component';
import {FormsModule} from "@angular/forms";
import { CramSchoolDetailComponent } from './cram-school-detail/cram-school-detail.component';
import { CramSchoolAppComponent } from './cram-school-app.component';


@NgModule({
  declarations: [
    CramSchoolListComponent,
    CramSchoolDetailComponent,
    CramSchoolAppComponent,
  ],
  imports: [
    CommonModule,
    CramSchoolsRoutingModule,
    FormsModule,
  ]
})
export class CramSchoolsModule { }
