import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display';
import {Params, ActivatedRoute} from '@angular/router';
// import { displayData } from 'src/app/display-data';
import { DisplayService } from 'src/app/display.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
image: string; popUp: string; displayPopUp: Display[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor( private route: ActivatedRoute, private DisplayService: DisplayService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        console.log(params);
        // this.image = params.image;
        // this.popUp = params.popUp;
        // if (params.name === 'ALL') {
        //   this.getDisplay();
        // } else {
        //   this.getSourceDisplay(params.name);
        // }
        // this.DisplayService.addPopUp(params.id);
        this.getPopUp(params.id);
      }
    );
  }
getPopUp(id: string) {
  console.log(id);
  this.displayPopUp = this.DisplayService.addPopUp(id);
  console.log(this.displayPopUp);
}
}
