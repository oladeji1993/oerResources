import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreeningPaymentComponent } from './screening-payment.component';

describe('ScreeningPaymentComponent', () => {
  let component: ScreeningPaymentComponent;
  let fixture: ComponentFixture<ScreeningPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreeningPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreeningPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
