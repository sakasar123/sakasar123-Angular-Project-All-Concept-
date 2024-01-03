import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifitostrComponent } from './notifitostr.component';

describe('NotifitostrComponent', () => {
  let component: NotifitostrComponent;
  let fixture: ComponentFixture<NotifitostrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotifitostrComponent]
    });
    fixture = TestBed.createComponent(NotifitostrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
