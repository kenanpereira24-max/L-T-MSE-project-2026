import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceTracker } from './attendance-tracker';

describe('AttendanceTracker', () => {
  let component: AttendanceTracker;
  let fixture: ComponentFixture<AttendanceTracker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceTracker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceTracker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
