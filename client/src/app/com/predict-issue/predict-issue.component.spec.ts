import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictIssueComponent } from './predict-issue.component';

describe('PredictIssueComponent', () => {
  let component: PredictIssueComponent;
  let fixture: ComponentFixture<PredictIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
