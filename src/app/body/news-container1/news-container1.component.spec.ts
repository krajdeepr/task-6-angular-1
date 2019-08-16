import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsContainer1Component } from './news-container1.component';

describe('NewsContainer1Component', () => {
  let component: NewsContainer1Component;
  let fixture: ComponentFixture<NewsContainer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsContainer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsContainer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
