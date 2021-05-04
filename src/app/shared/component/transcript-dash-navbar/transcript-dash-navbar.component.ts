import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';

import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Logout } from '../../actions/auth.action';

@Component({
  selector: 'app-transcript-dash-navbar',
  templateUrl: './transcript-dash-navbar.component.html',
  styleUrls: ['./transcript-dash-navbar.component.scss']
})
export class TranscriptDashNavbarComponent implements OnInit {

  constructor(
    private navService: NavigationService,
    private _auth: AuthService,
    private _store: Store
    ) { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }
  LogOut(){
    // this._auth.LogOut()
    this._store.dispatch(new Logout())
    .subscribe(
      success => {
        console.log('it worked!')
      }, error => {});
  }
}
