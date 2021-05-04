import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelFeePaymentComponent } from './hostel-fee-payment.component';

describe('HostelFeePaymentComponent', () => {
  let component: HostelFeePaymentComponent;
  let fixture: ComponentFixture<HostelFeePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostelFeePaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostelFeePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
