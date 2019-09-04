import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display';
import { Params, ActivatedRoute } from '@angular/router';
import { DisplayService } from 'src/app/display.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  image: string; popUp: string; displayPopUp: Display[]; comment = ''; id: string;
  comments = [];
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private route: ActivatedRoute, private DisplayService: DisplayService) { }
  profileForm = new FormGroup({
    comments: new FormControl('', Validators.required)
  });
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.getPopUp(params.id);
      }
    );
  }
  getPopUp(id: string) {
    this.displayPopUp = this.DisplayService.allData.filter(value => value.id === id);
    this.comments = Object.keys(this.displayPopUp[0].comments);
  }
  onSubmit() {
     this.DisplayService.commentData(this.profileForm.value, this.id);
     const subject = this.DisplayService.commentsSubject.subscribe(data => {
      this.displayPopUp[0] = data[this.id];
      this.comments = Object.keys(this.displayPopUp[0].comments);
      subject.unsubscribe();
    });
  }
}
