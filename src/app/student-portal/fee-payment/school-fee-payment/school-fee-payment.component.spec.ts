import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolFeePaymentComponent } from './school-fee-payment.component';

describe('SchoolFeePaymentComponent', () => {
  let component: SchoolFeePaymentComponent;
  let fixture: ComponentFixture<SchoolFeePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolFeePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolFeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
