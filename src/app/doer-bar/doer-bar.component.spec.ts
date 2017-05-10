import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoerBarComponent } from './doer-bar.component';

describe('DoerBarComponent', () => {
  let component: DoerBarComponent;
  let fixture: ComponentFixture<DoerBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoerBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoerBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
