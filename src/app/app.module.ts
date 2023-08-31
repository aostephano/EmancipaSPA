import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { AdressFormComponent } from './shared/components/adress-form/adress-form.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import { ToolbarSidenavComponent } from './shared/drawer/toolbar-sidenav/toolbar-sidenav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MessagesComponent } from './shared/messages/messages.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    AdressFormComponent,
    ToolbarSidenavComponent,
    FooterComponent,
    MessagesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatIconModule,
  ],
  providers: [],
  exports: [
    MessagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
