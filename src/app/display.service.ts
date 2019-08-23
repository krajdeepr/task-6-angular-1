import {  Injectable } from '@angular/core';

import {Subject, BehaviorSubject, Observable} from 'rxjs';
import { Display } from './display';

import { displayData } from './display-data';


@Injectable()

export class DisplayService {
activatedEmitter = new Subject<boolean>();
isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());
popup: Display[];
    constructor() { }
    private hasToken(): boolean {
        return !!localStorage.getItem('token');
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
    addPopUp(id: number): Display[] {
        // tslint:disable-next-line: triple-equals
        return displayData.filter(value => value.id == id);
    }
}
