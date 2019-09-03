import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
    UrlTree
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './login/auth-service.service';
import { DisplayService } from './display.service';
@Injectable()
export class AuthGuard implements CanActivate {
    // tslint:disable-next-line: no-shadowed-variable
    constructor(private authService: AuthService, private router: Router, private DisplayService: DisplayService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (this.authService.loginMode) {
            console.log('true');
            return true;
        }
        console.log('false');
        return this.router.createUrlTree(['/login']);
}
}
