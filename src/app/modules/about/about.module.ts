import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {AboutDetailComponent} from "./about-detail/about-detail.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AboutDetailComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatButtonModule,
  ]
})
export class AboutModule {
}
