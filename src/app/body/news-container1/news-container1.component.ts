import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display';
import { DisplayService } from 'src/app/display.service';
import {Params, ActivatedRoute} from '@angular/router';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
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
    this.DisplayService.onGetPost()
    .pipe(
      map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key]});
          }
        }
        return postsArray;
      })
    )
    .subscribe(data => {
      console.log(data);
      this.allData = data;
      this.displayData = data;
    });
    this.route.params.subscribe(
      (params: Params) => {
        if (params.name === 'ALL') {
          // tslint:disable-next-line: no-unused-expression
          this.displayData = this.allData;
        } else {
          this.getSourceDisplay(params.name);
        }
      }
    );
  }
getSourceDisplay(name): void {
  this.displayData = this.allData.filter(value => value.source === name);
}
}
