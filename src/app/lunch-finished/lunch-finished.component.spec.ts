import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchFinishedComponent } from './lunch-finished.component';

describe('LunchFinishedComponent', () => {
  let component: LunchFinishedComponent;
  let fixture: ComponentFixture<LunchFinishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunchFinishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
