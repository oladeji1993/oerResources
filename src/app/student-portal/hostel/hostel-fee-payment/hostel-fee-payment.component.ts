import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostel-fee-payment',
  templateUrl: './hostel-fee-payment.component.html',
  styleUrls: ['./hostel-fee-payment.component.scss']
})
export class HostelFeePaymentComponent implements OnInit {

  amount: number = 10000;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  processPayment(){
    this.router.navigateByUrl('/hostel-application-preview');
  }

}
