import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumPriorityComponent } from './medium-priority.component';

describe('MediumPriorityComponent', () => {
  let component: MediumPriorityComponent;
  let fixture: ComponentFixture<MediumPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumPriorityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediumPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
