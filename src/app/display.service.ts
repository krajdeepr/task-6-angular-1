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
  channelSources = new Subject<string[]>();
comments: string[];
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
  commentData(comments) {
console.log(comments);
this.comments = comments;
  }
  onCreateComment(): Observable<any> {
    return this.http
      .post<any>(
        'https://newsfeed-angular.firebaseio.com/comments.json',
        this.comments
      ).pipe(
        tap(_ => console.log('Posted comment')),
        catchError(err => {
          console.log(err);
          return of(null);
          })
      );
  }
  onGetComment(): Observable<any> {
    return this.http
      .get<any>('https://newsfeed-angular.firebaseio.com/comments.json')
      .pipe(
        tap(_ => console.log('fetched comment')),
        catchError(err => {
          console.log(err);
          return of(null);
          })
      );
  }
}
