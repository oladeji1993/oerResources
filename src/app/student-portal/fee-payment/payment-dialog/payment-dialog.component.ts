import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.scss']
})
export class PaymentDialogComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<PaymentDialogComponent>) { }

  ngOnInit(): void {
  }

  proceedToApplication() {
    this.router.navigateByUrl('/portal'); 
    this.dialogRef.close();   
  }

}



  


