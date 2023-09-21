import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutRoutingModule} from './about-routing.module';
import {AboutDetailComponent} from "./about-detail/about-detail.component";

@NgModule({
  declarations: [
    AboutDetailComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
  ]
})
export class AboutModule {
}
