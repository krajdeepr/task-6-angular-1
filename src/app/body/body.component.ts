import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display';
import { DisplayService } from 'src/app/display.service';
import {Params, ActivatedRoute, Router} from '@angular/router';
import {HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  allData: Display[];
  displayData: Display[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private DisplayService: DisplayService, private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.DisplayService.onGetArticle()
    .pipe(
      map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
      })
    )
    .subscribe(data => {
      this.allData = data;
      this.displayData = data;
      this.DisplayService.setAllData(this.allData);
      this.route.params.subscribe(
      (params: Params) => {
        if (params.name === 'ALL') {
          // tslint:disable-next-line: no-unused-expression
          this.displayData = this.allData;
        } else {
          this.displayData = this.allData.filter(value => value.source === params.name);
        }
      }
    );
  });
  }
}
