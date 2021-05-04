import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login, Logout } from 'src/app/shared/actions/auth.action';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-oer-login',
  templateUrl: './oer-login.component.html',
  styleUrls: ['./oer-login.component.scss']
})
export class OerLoginComponent implements OnInit {

  LoginData = {
    email:  <any> "",
    password: <any> ""  
    
   }
  validatingForm!: FormGroup;

  LoginButton: boolean = true;
  constructor(
    private _auth: AuthService,
    private _store: Store,
    private _router: Router){}
  
  ngOnInit() {
    this.validatingForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      // password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), Validators.minLength(8)]),
    }/*, { updateOn: 'submit' }*/);
  }

  // get input() { return this.validatingForm.get('email'); }

  get input(){
    return this.validatingForm.controls;
  }

  
  LoginUser(): void {
  this._store
    .dispatch(new Login(this.LoginData))
    .subscribe(
          res => {
            // localStorage.setItem('UserToken', res.auth.token)
            this._router.navigate(['/dashboard-transcript'])
            console.log(res)},
          err => console.log(err)
        );
}

LogOut(){
  this._store.dispatch(new Logout()).subscribe(
    success => {
      // localStorage.removeItem('UserToken');
     this._router.navigate(['/oer']);
    },
     error => {});
}
}
