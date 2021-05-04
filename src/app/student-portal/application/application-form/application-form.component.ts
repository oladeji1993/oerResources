import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  form = new FormGroup({
    last_name: new FormControl('', Validators.required),
    first_name: new FormControl('', Validators.required),
    mid_name: new FormControl(),
    dob: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required)
  });

  get last_name() {
    return this.form.get('last_name');
  }

  get email() {
    return this.form.get('email');
  }

  constructor(private router: Router, public http: HttpClient) { 
    
  }

  ngOnInit(): void {
    
  }

  courses = [
    'Accounting',
    'Architecture',
    'Agricultural Science',
    'Anthropology',
    'Banking and Finance',
    'Business Administration',
    'Chemistry',
    'Civil Engineering',
    'Computer Science',
    'Computer Engineering',
  ];

  processApplication(){
    this.router.navigateByUrl('/upload-credentials');
  }

  submitApplicationForm(){

    let form_input = {
      last_name: this.form.get('last_name')?.value,
      first_name: this.form.get('first_name')?.value,
      mid_name: this.form.get('mid_name')?.value,
      dob: this.form.get('dob')?.value,
      country: this.form.get('country')?.value,
      state: this.form.get('state')?.value,
      city: this.form.get('city')?.value,
      email: this.form.get('email')?.value,
      phone: this.form.get('phone')?.value,
      course: this.form.get('course')?.value
    }

    this.http.post('http://localhost:5000/api/application/create-applicant', form_input).subscribe(
      (response) => {
        if(response != null){
          Swal.fire('Application Successful', 'Your application was sent successfully!', 'success');
        }else {
          Swal.fire('Bad Request', 'User has already applied for screening.', 'error');
        }  
        
      },
      (error) => Swal.fire('Server Error', 'There was an error processing this request.', 'error')
    );
  }

}

