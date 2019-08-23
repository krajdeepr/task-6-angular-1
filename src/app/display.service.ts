import {  Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Display } from './display';

import { displayData } from './display-data';


@Injectable()
export class DisplayService {
activatedEmitter = new Subject<boolean>();
popup: Display[];
    constructor() { }
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
