import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 heading = 'ALL';
  constructor() {}
  ngOnInit() {
  }
sourceChange(event: Event): void {
this.heading = (event.target as HTMLInputElement).value;
}
}
