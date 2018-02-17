import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingMatchComponent } from './searching-match.component';

describe('SearchingMatchComponent', () => {
  let component: SearchingMatchComponent;
  let fixture: ComponentFixture<SearchingMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
