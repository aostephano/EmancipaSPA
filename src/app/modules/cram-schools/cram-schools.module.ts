import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CramSchoolsRoutingModule } from './cram-schools-routing.module';
import { CramSchoolListComponent } from './cram-school-list/cram-school-list.component';
import { CramSchoolCardComponent } from './cram-school-list/cram-school-card/cram-school-card.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { CramSchoolDetailComponent } from './cram-school-detail/cram-school-detail.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { CramSchoolAppComponent } from './cram-school-app.component';


@NgModule({
  declarations: [
    CramSchoolListComponent,
    CramSchoolCardComponent,
    CramSchoolDetailComponent,
    CramSchoolAppComponent,
  ],
  imports: [
    CommonModule,
    CramSchoolsRoutingModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class CramSchoolsModule { }
