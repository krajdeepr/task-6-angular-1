import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display';
import { DisplayService } from 'src/app/display.service';
import {Params, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-news-container1',
  templateUrl: './news-container1.component.html',
  styleUrls: ['./news-container1.component.css']
})
export class NewsContainer1Component implements OnInit {
  displayData: Display[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DisplayService: DisplayService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDisplay();
    this.route.params.subscribe(
      (params: Params) => {
        if (params.name === 'ALL') {
          this.getDisplay();
        } else {
          this.getSourceDisplay(params.name);
        }
      }
    );
  }
getDisplay(): void {
  this.displayData = this.DisplayService.getDisplay();
}
getSourceDisplay(name): void {
  this.displayData = this.DisplayService.getSelectedDisplay(name);
}
// popUpContent(name: Display) {
// console.log(name);
// }
}
