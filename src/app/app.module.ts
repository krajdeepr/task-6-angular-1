import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { DisplayService } from './display.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PopUpComponent } from './pop-up/pop-up.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth-service.service';
import {HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from './authguard.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    DashboardComponent,
    PopUpComponent,
    LoginComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DisplayService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
