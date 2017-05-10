import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvalsComponent } from './curvals.component';

describe('CurvalsComponent', () => {
  let component: CurvalsComponent;
  let fixture: ComponentFixture<CurvalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
