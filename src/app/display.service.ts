import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Display } from './display';
import { HttpClient } from '@angular/common/http';
import { displayData } from './display-data';
@Injectable()
export class DisplayService {
  activatedEmitter = new Subject<string>();
  popup: Display[]; displayPosts: Display[]; dashBoard: Display;
  constructor(private http: HttpClient) {
  }
  addDisplay(name: Display) {
    // tslint:disable-next-line: member-ordering
    // displayData.push(name);
    this.dashBoard = name;
  }
  addPopUp(id: string): Display[] {
    // tslint:disable-next-line: triple-equals
    return displayData.filter(value => value.id == id);
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
