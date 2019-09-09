import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../display.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userActivated = false;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(public DisplayService: DisplayService, private router: Router) { }
  profileForm = new FormGroup({
    image: new FormControl('', Validators.required),
    heading: new FormControl('', Validators.required),
    date: new FormControl(''),
    source: new FormControl('', Validators.required),
    popUp: new FormControl(''),
    // tslint:disable-next-line: quotemark
    content: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }
  onSubmit(): void {
    const formData = { ...this.profileForm.value, comments: '' };
    this.DisplayService.addDisplay(formData);
    this.DisplayService.onCreateArticle().subscribe(data => {
        this.router.navigate(['sourceData/ALL']);
      });
  }

}
