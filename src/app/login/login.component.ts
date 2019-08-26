import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/Auth.service';
import { NgForm } from '@angular/forms';
import {AuthResponseData} from 'src/app/login/Auth.service';
import { Router } from '@angular/router';
import {DisplayService} from 'src/app/display.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  email = '';
  isLoginMode = true; authData: AuthResponseData;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private authService: AuthService, private router: Router, private DisplayService: DisplayService) {
  }
  ngOnInit() {
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.email = form.value.email;
    const password = form.value.password;
    if (this.isLoginMode) {
     this.authService.authData = this.authService.login(this.email, password);
     if (!(this.authService.authData && this.authService.authData.constructor === Array && this.authService.authData.length === 0)) {
      this.router.navigate(['/']);
     }
    } else {
      this.authService.signup(this.email, password);
    }
    form.reset();
  }
  onActivate(isLoginMode) {
    this.isLoginMode = isLoginMode;
    if (this.isLoginMode) {
    this.DisplayService.activatedEmitter.next(this.email);
  }
  }
}