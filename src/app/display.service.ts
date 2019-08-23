import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Display } from './display';
import {HttpClient} from '@angular/common/http';
import { displayData } from './display-data';
@Injectable()
export class DisplayService {
activatedEmitter = new Subject<boolean>();
popup: Display[]; displayPosts: Display[];
    constructor(private http: HttpClient) {
    }

    getDisplay(): Display[] {
        return displayData;
    }

    getSelectedDisplay(name: string): Display[] {
        return displayData.filter(value => value.source === name);

    }
    addDisplay(name: Display) {
        // tslint:disable-next-line: member-ordering
        displayData.push(name);
    }
    addPopUp(id: string): Display[] {
        // tslint:disable-next-line: triple-equals
        return displayData.filter(value => value.id == id);
    }
    onCreatePost() {
        // Send Http request
        this.http
          .post(
            'https://newsfeed-angular.firebaseio.com/posts.json',
            displayData
          )
          .subscribe(responseData => {
            console.log(responseData);
          });
      }
      onGetPost() {
       return this.http
        .get('https://newsfeed-angular.firebaseio.com/posts.json');
      }
}
