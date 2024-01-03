import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectDropComponent } from './ng-select-drop.component';

describe('NgSelectDropComponent', () => {
  let component: NgSelectDropComponent;
  let fixture: ComponentFixture<NgSelectDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSelectDropComponent]
    });
    fixture = TestBed.createComponent(NgSelectDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
