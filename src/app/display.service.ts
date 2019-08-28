import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Display } from './display';
import { HttpClient } from '@angular/common/http';
import { displayData } from './display-data';
@Injectable()
export class DisplayService {
  activatedEmitter = new Subject<string>();
  allData: Display[] = [];
  popup: Display[]; displayPosts: Display[]; dashBoard: Display;
  constructor(private http: HttpClient) {
  }
  setAllData(data: Display[]) {
    this.allData = data;
  }
  addDisplay(name: Display) {
    // tslint:disable-next-line: member-ordering
    this.dashBoard = name;
  }
  onCreatePost() {
    return this.http
      .post(
        'https://newsfeed-angular.firebaseio.com/posts.json',
        this.dashBoard
      );
  }
  onGetPost() {
    return this.http
      .get('https://newsfeed-angular.firebaseio.com/posts.json');
  }
}
