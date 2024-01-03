import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributalComponent } from './attributal.component';

describe('AttributalComponent', () => {
  let component: AttributalComponent;
  let fixture: ComponentFixture<AttributalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttributalComponent]
    });
    fixture = TestBed.createComponent(AttributalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
