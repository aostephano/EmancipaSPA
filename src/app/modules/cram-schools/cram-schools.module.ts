import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CramSchoolsRoutingModule } from './cram-schools-routing.module';
import { CramSchoolListComponent } from './cram-school-list/cram-school-list.component';
import { CramSchoolElementComponent } from './cram-school-element/cram-school-element.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CramSchoolListComponent,
    CramSchoolElementComponent,
  ],
  imports: [
    CommonModule,
    CramSchoolsRoutingModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ]
})
export class CramSchoolsModule { }
