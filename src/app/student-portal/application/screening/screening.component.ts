import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScreeningPaymentComponent } from './../screening-payment/screening-payment.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

// interface registeredResponse {
//   email: string;
// }

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss']
})
export class ScreeningComponent implements OnInit {

  form = new FormGroup({
    reg_no: new FormControl('', [Validators.required, Validators.minLength(11)] ),
  });

  get reg_no() {
    return this.form.get('reg_no');
  }

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(): void {
  }

  openPaymentProcess() {
    let regno =  this.form.get('reg_no')?.value;

    this.http.get('http://localhost:5000/api/application/check-utme/'+ regno).subscribe(
      (response) => {
        if(response == null){
          Swal.fire('Record Not Found', `There is no record available for the UTME registration number (${regno}) provided!`, 'error');
        }else {
          this.dialog.open(ScreeningPaymentComponent, {
            height: '400px',
            width: '450px',
          });          
        }          
      },
      (error) => Swal.fire('Server Error', 'There was an error processing this request.', 'error')
    );    
  }

}
