import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router){}

  ngOnInit(): void {
    
  }

  User(){
    this._auth.getUser()
    .subscribe(
      res => console.log(res),
      err=> console.log(err)
    )
  }
}
