import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplefromComponent } from './templefrom.component';

describe('TemplefromComponent', () => {
  let component: TemplefromComponent;
  let fixture: ComponentFixture<TemplefromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplefromComponent]
    });
    fixture = TestBed.createComponent(TemplefromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
