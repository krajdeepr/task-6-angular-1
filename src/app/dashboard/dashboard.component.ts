import { Component, OnInit } from '@angular/core';
import { Display } from '../display';
import { DisplayService } from '../display.service';
import { FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // tslint:disable-next-line: no-shadowed-variable
  constructor(public DisplayService: DisplayService, private router: Router) { }
  profileForm = new FormGroup({
    image: new FormControl('', Validators.required),
    heading: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    popUp: new FormControl('', Validators.required),
    // tslint:disable-next-line: quotemark
    content: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }
  onSubmit(): void {
    // console.log(this.profileForm.value);
    this.DisplayService.addDisplay(this.profileForm.value);
    this.router.navigate(['/']);
  }

}
