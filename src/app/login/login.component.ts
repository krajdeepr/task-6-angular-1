import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth-service.service';
import { NgForm } from '@angular/forms';
import {AuthResponseData} from 'src/app/login/auth-service.service';
import { Router } from '@angular/router';
import {DisplayService} from 'src/app/display.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../.././node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  email = ''; password = '';
  isLoginMode = true; authData: AuthResponseData;
 isLoading = false ;
 error: string = null;
  constructor
  // tslint:disable-next-line: no-shadowed-variable
(private authService: AuthService, private router: Router, private DisplayService: DisplayService, private AuthService: AuthService) {
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
    let authObs: Observable<AuthResponseData>;
    this.email = form.value.email;
    this.password = form.value.password;
    this.isLoading = true;
    if (this.isLoginMode) {
    authObs = this.authService.login(this.email, this.password );
    } else {
      authObs = this.authService.signup(this.email, this.password);
 }
    authObs.subscribe(respData => {
console.log(respData);
this.isLoading = false;
this.isLoginMode = true;
this.router.navigate(['/sourceData', 'ALL']);
},
errorMessage => {
  console.log(errorMessage);
  this.error = errorMessage;
  this.isLoading = false;
}
);
    form.reset();
    if (this.isLoginMode) {
      this.DisplayService.activatedEmitter.next(this.isLoginMode);
    }
    this.loginAction(this.isLoginMode);
  }
  loginAction(isLoginMode) {
    this.AuthService.loginAuth(isLoginMode);
  }
}
