import { Component, OnInit } from '@angular/core';
import { Display } from 'src/app/display';
import { Params, ActivatedRoute } from '@angular/router';
import { DisplayService } from 'src/app/display.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  image: string; popUp: string; displayPopUp: Display[]; comment = '';
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private route: ActivatedRoute, private DisplayService: DisplayService) { }
  profileForm = new FormGroup({
    comments: new FormControl('', Validators.required)
  });
  ngOnInit() {
    this.DisplayService.onGetComment()
    .pipe(
      map(responseData => {
        const commentsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            commentsArray.push({ ...responseData[key], id: key });
          }
        }
        return commentsArray;
      })
    )
    .subscribe(data => {
      console.log(data);
    });
    this.route.params.subscribe(
      (params: Params) => {
        this.getPopUp(params.id);
      }
    );
  }
  getPopUp(id: string) {
  this.displayPopUp = this.DisplayService.allData.filter(value => value.id === id);
  }
  onSubmit(): void {
        this.DisplayService.commentData(this.profileForm.value);
        this.DisplayService.onCreateComment().subscribe(data => {
        });
      }
}
