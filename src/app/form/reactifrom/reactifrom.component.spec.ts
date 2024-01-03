import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactifromComponent } from './reactifrom.component';

describe('ReactifromComponent', () => {
  let component: ReactifromComponent;
  let fixture: ComponentFixture<ReactifromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactifromComponent]
    });
    fixture = TestBed.createComponent(ReactifromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
