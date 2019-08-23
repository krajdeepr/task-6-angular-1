import { Component } from '@angular/core';

import {DisplayService} from 'src/app/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-News';
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DisplayService: DisplayService) {
  this.DisplayService.onGetPost();
  console.log(this.DisplayService.displayPosts);
}
}
