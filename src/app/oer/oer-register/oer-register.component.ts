import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-oer-register',
  templateUrl: './oer-register.component.html',
  styleUrls: ['./oer-register.component.scss']
})
export class OerRegisterComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public AuthService: AuthService,
    public router: Router
  ) {
    this.signUpForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
   }

  ngOnInit(): void {
  }

  registerUser(){
    console.log(this.signUpForm.getRawValue())
    this.AuthService.signUp(this.signUpForm.getRawValue()).subscribe((res) => {
      if(res.result){
        this.signUpForm.reset()
        this.router.navigate(['login']);
      }
    })
  }

}
