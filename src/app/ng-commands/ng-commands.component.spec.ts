import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCommandsComponent } from './ng-commands.component';

describe('NgCommandsComponent', () => {
  let component: NgCommandsComponent;
  let fixture: ComponentFixture<NgCommandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgCommandsComponent]
    });
    fixture = TestBed.createComponent(NgCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
