import { Component, OnInit } from '@angular/core';
import {DisplayService} from 'src/app/display.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 heading = 'ALL'; userActivated = false;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DisplayService: DisplayService) {}
  ngOnInit() {
    this.DisplayService.activatedEmitter.subscribe(didActivate => {
        this.userActivated = didActivate;
      });
  }
sourceChange(event: Event): void {
this.heading = (event.target as HTMLInputElement).value;
}
}
