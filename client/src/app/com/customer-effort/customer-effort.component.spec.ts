import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEffortComponent } from './customer-effort.component';

describe('CustomerEffortComponent', () => {
  let component: CustomerEffortComponent;
  let fixture: ComponentFixture<CustomerEffortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEffortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEffortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
