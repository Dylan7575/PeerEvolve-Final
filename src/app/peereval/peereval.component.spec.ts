import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerevalComponent } from './peereval.component';

describe('PeerevalComponent', () => {
  let component: PeerevalComponent;
  let fixture: ComponentFixture<PeerevalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerevalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerevalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
