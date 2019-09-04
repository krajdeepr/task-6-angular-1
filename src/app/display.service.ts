import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { Display } from './display';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
@Injectable()
export class DisplayService {
  activatedEmitter = new Subject<boolean>();
  allData: Display[] = []; channelList: string[] = ['ALL'];
  popup: Display[]; displayPosts: Display[]; dashBoard: Display;
  channelSources = new Subject<string[]>(); commentList: Display[];
  comments: string[];
  commentsSubject = new Subject();

  constructor(private http: HttpClient) { }

  setAllData(data: Display[]) {
    this.allData = data;
    this.setChannelSource(this.sourceList());
  }

  addDisplay(name: Display) {
    // tslint:disable-next-line: member-ordering
    this.dashBoard = name;
  }

  onCreatePost(): Observable<Display[]> {
    return this.http
      .post<Display[]>(
        'https://newsfeed-angular.firebaseio.com/posts.json',
        this.dashBoard
      ).pipe(
        tap(_ => console.log('Posted data')),
        catchError(err => {
          console.log(err);
          return of(null);
          })
      );
  }

  onGetPost(): Observable<Display[]> {
    return this.http
      .get<Display[]>('https://newsfeed-angular.firebaseio.com/posts.json')
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(err => {
          console.log(err);
          return of(null);
          })
      );
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

  commentData(comment: string, id: string) {
    this.http.post('https://newsfeed-angular.firebaseio.com/posts/' + id + '/comments.json', comment)
      .subscribe(post => {
        this.http.get<Display[]>('https://newsfeed-angular.firebaseio.com/posts.json')
          .subscribe((allData) => {
            this.allData = allData;
            this.commentsSubject.next(this.allData);
          });
      });
  }
}
