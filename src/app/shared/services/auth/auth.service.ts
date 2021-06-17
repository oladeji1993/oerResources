import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { User } from  '../auth/user'
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})


export class AuthService {
  endpoint: string = "http://localhost:3000/api"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  currentUser = {};
 
  constructor(
      private http: HttpClient,
      public router: Router
    ) { }

    // sign-up
    signUp (user: User): Observable<any>{
      let api = `${this.endpoint}/register`;
      return this.http.post(api, user)
      .pipe(
        catchError(this.handleError)
      )
    };

    // SignIN
    signIn(user: User){
      return this.http.post<any>(`${this.endpoint}/login`, user)
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token)
        this.getUserProfile(res._id).subscribe((res) =>{
          this.currentUser = res;
          this.router.navigate(['dashboard' + res.msg._id])
        }) 
      })
    }

    getToken(){
      return localStorage.getItem('access_token');
    }

    get isLoggedIn(): boolean {
      let authToken = localStorage.getItem('access_token');
      return (authToken !== null) ? true : false 
    }

    doLogOut(){
      let removeToken = localStorage.removeItem('access_token');
      if (removeToken == null){
        this.router.navigate(['login'])
      }
    }

 // User profile
  getUserProfile(id): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }


    // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
