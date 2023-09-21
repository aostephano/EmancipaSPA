import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './shared/messages/messages.component';
import { HttpClientModule } from "@angular/common/http";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MessagesComponent,
    NavbarComponent,
    NavbarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BsDropdownModule,
    TooltipModule,
  ],
  providers: [],
  exports: [
    MessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
