import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowPriorityComponent } from './low-priority.component';

describe('LowPriorityComponent', () => {
  let component: LowPriorityComponent;
  let fixture: ComponentFixture<LowPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowPriorityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
