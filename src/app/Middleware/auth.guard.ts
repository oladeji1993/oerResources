import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public _authService: AuthService,
    public _router: Router,
    public _store: Store
  ){ }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       if(this._authService.isLoggedIn !== true) {
      window.alert('Access Denied, Login is Required to Access This Page!')
      this._router.navigate(['login'])
    }
    const token = !!this._store.selectSnapshot(
      state => state.auth.token
    );

    if (!token) {
      this._router.navigate(['login']);
      return false;
    }

    return true;
  }
  
}
