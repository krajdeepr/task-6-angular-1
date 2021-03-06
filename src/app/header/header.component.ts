import { Component, OnInit, OnDestroy } from '@angular/core';
import { DisplayService } from 'src/app/display.service';
import { Subscription } from 'rxjs';
import {Router} from '@angular/router';
import { AuthService } from '../login/auth-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  heading = 'ALL'; userActivated; private activatedSub: Subscription;
  channelList: string[] = ['ALL'];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DisplayService: DisplayService, private router: Router, private AuthService: AuthService) {}
  ngOnInit() {
    this.activatedSub = this.DisplayService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });

    this.DisplayService.channelSources.subscribe(data => {
      this.channelList = data;
    });
  }
  changeSource() {
this.router.navigate(['/sourceData', this.heading]);
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
  logoutAction() {
    this.userActivated = !this.userActivated;
    this.AuthService.loginMode = false;
    this.router.navigate(['/login']);
  }
}

