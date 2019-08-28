import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display';
import { Params, ActivatedRoute } from '@angular/router';
import { DisplayService } from 'src/app/display.service';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  image: string; popUp: string; displayPopUp: Display[];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private route: ActivatedRoute, private DisplayService: DisplayService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.getPopUp(params.id);
      }
    );
  }
  getPopUp(id: string) {
  this.displayPopUp = this.DisplayService.allData.filter(value => value.id === id);
  }
}
