import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNgSwitchComponent } from './s-ng-switch.component';

describe('SNgSwitchComponent', () => {
  let component: SNgSwitchComponent;
  let fixture: ComponentFixture<SNgSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNgSwitchComponent]
    });
    fixture = TestBed.createComponent(SNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
