import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { NewsContainer1Component } from './body/news-container1/news-container1.component';
import { DisplayService } from './display.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PopUpComponent } from './pop-up/pop-up.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/Auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NewsContainer1Component,
    DashboardComponent,
    PopUpComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DisplayService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
