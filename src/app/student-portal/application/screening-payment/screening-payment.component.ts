import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-screening-payment',
  templateUrl: './screening-payment.component.html',
  styleUrls: ['./screening-payment.component.scss']
})
export class ScreeningPaymentComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<ScreeningPaymentComponent>) { }

  ngOnInit(): void {
  }

  proceedToApplication() {
    this.router.navigateByUrl('/application-form'); 
    this.dialogRef.close();   
  }
}
