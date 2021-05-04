import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  

  constructor(
    private auth: AuthService,
    private _store: Store) {}

  // intercept(req: any, next: any) {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    // const authToken = this.auth.getToken();
    const authToken = this._store.selectSnapshot(state => state.auth.token);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`,
      
      }
    })
    return next.handle(tokenizedReq)
  }

  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   // Get the auth token from the service.
  //   const authToken = this.auth.getToken();

  //   // Clone the request and replace the original headers with
  //   // cloned headers, updated with the authorization.
  //   const authReq = req.clone({
  //     headers: req.headers.set('Authorization',authToken)
  //   });

  //   // send cloned request with header to the next handler.
  //   return next.handle(authReq);
  // }
}
