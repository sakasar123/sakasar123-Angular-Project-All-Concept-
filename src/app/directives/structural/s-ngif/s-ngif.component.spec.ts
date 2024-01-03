import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNgifComponent } from './s-ngif.component';

describe('SNgifComponent', () => {
  let component: SNgifComponent;
  let fixture: ComponentFixture<SNgifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SNgifComponent]
    });
    fixture = TestBed.createComponent(SNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
