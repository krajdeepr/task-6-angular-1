import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Display } from './display';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DisplayService {
  activatedEmitter = new Subject<string>();
  allData: Display[] = []; channelList: string[] = ['ALL'];
  popup: Display[]; displayPosts: Display[]; dashBoard: Display;
  channelSources = new Subject<string[]>();

  constructor(private http: HttpClient) {
  }
  setAllData(data: Display[]) {
    this.allData = data;
    this.setChannelSource(this.sourceList());
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

  sourceList() {
    this.allData.forEach(data => {
      this.channelList.push(data.source);
    });
    this.channelList = [...new Set(this.channelList)];
    return (this.channelList);
  }

  setChannelSource(sourcesList: string[]) {
      this.channelSources.next(sourcesList);
  }
}
