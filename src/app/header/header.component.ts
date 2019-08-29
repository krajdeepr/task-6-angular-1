import { Component, OnInit, OnDestroy } from '@angular/core';
import { DisplayService } from 'src/app/display.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  heading = 'ALL'; userActivated = ''; private activatedSub: Subscription;
  channelList: string[] = ['ALL'];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DisplayService: DisplayService) {}
  ngOnInit() {
    this.activatedSub = this.DisplayService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });

    this.DisplayService.channelSources.subscribe(data => {
      this.channelList = data;
    });
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}

