import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeGroupsComponent } from './make-groups.component';

describe('MakeGroupsComponent', () => {
  let component: MakeGroupsComponent;
  let fixture: ComponentFixture<MakeGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
