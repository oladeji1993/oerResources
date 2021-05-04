import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaymentDialogComponent } from './../payment-dialog/payment-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-school-fee-payment',
  templateUrl: './school-fee-payment.component.html',
  styleUrls: ['./school-fee-payment.component.scss']
})
export class SchoolFeePaymentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  selectControl = new FormControl('1');

  feeTypeOptions = ['School Fee', 'Hostel Fee', 'Library Fee' ];
  sessionOptions = ['2020/2021', '2019/2020', '2018/2019', '2017/2018' ];
  studentTypeOptions = ['Regular', 'Part-Time', 'SandWich'];

  feePaymentForm = new FormGroup ({
    feeType: new FormControl('', [Validators.required]),
    // session: new FormControl(null, [Validators.required]),
    // studentType: new FormControl(null, [Validators.required]),
    // required: new FormControl(null, Validators.required)
  });

  get input() { return this.feePaymentForm.get('feeType'); }

  openPaymentProcess() {
    this.dialog.open(PaymentDialogComponent, {
      height: '400px',
      width: '450px',
    });
  }

}

