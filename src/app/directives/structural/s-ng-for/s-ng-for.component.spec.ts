import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNgForComponent } from './s-ng-for.component';

describe('SNgForComponent', () => {
  let component: SNgForComponent;
  let fixture: ComponentFixture<SNgForComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNgForComponent]
    });
    fixture = TestBed.createComponent(SNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
