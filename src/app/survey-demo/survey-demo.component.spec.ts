import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyDemoComponent } from './survey-demo.component';

describe('SurveyDemoComponent', () => {
  let component: SurveyDemoComponent;
  let fixture: ComponentFixture<SurveyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
