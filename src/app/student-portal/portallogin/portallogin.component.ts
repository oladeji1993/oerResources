import { PortalloginService } from './portallogin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portallogin',
  templateUrl: './portallogin.component.html',
  styleUrls: ['./portallogin.component.scss']
})

export class PortalloginComponent  {

  loginForm = new FormGroup ({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  // get email() { return this.loginForm.get('email'); }

}