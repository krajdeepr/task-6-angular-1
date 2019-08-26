import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display';
import { DisplayService } from 'src/app/display.service';
import {Params, ActivatedRoute} from '@angular/router';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-news-container1',
  templateUrl: './news-container1.component.html',
  styleUrls: ['./news-container1.component.css']
})
export class NewsContainer1Component implements OnInit {
  allData: Display[];
  displayData: Display[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DisplayService: DisplayService, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.DisplayService.onGetPost().subscribe(data => {
      this.allData = data[Object.keys(data)[0]];
      this.displayData = this.allData;
    });
    this.route.params.subscribe(
      (params: Params) => {
        if (params.name === 'ALL') {
          // tslint:disable-next-line: no-unused-expression
          this.displayData = this.allData;
        } else {
          this.getSourceDisplay(this.allData, params.name);
        }
      }
    );
  }
getSourceDisplay(allData, name): void {
  this.displayData = allData.filter(value => value.source === name);
}
}
