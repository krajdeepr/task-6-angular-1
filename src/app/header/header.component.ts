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
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DisplayService: DisplayService) { }
  ngOnInit() {
    this.activatedSub = this.DisplayService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate;
    });
  }
  sourceChange(event: Event): void {
    this.heading = (event.target as HTMLInputElement).value;
  }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }
}

