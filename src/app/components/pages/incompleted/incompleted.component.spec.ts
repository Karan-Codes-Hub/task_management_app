import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompletedComponent } from './incompleted.component';

describe('IncompletedComponent', () => {
  let component: IncompletedComponent;
  let fixture: ComponentFixture<IncompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
