import { Injectable } from '@angular/core';
export interface AuthResponseData {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor() { }
  authData: AuthResponseData[] = []; loginData;
  signup(email: string, password: string) {
    const details = {
      // tslint:disable-next-line: object-literal-key-quotes
      'email': email,
      // tslint:disable-next-line: object-literal-key-quotes
      'password': password
    };
    this.authData.push(details);
  }
  login(email: string, password: string) {
    // tslint:disable-next-line: whitespace
    // tslint:disable-next-line: no-unused-expression
    return this.authData.filter((value) => {
      if (value.email === email && value.password === password) {
        return true;
        // tslint:disable-next-line: align
      } return false;
    });
  }
}
