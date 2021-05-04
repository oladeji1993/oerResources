import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
let Url = ""
if (isDevMode()) {
  Url = environment.apiUrl;
} else {
  console.log('💪 Production!');
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {
    // login(payload: any) {
    //     throw new Error("Method not implemented.");
    // }
  private APIUrl =  Url
  // private APIUrl =  "http://localhost/php-jwt/api/"
 
  
  
  


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
      
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  
  //   })
  // };
  constructor(
    private http: HttpClient,
    private _router: Router,
    
    ) { }

  UserLogin (User: any){
    // return this.http.post<any>(this.APIUrl  + 'login.php', User)
    return this.http.post<any>(this.APIUrl  + 'login', User)
  }
  getUser (){
    // return this.http.get<any>(this.APIUrl + 'get-user.php?id=6')
    return this.http.get<any>(this.APIUrl + 'get-user')
  }
   // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('UserToken');
    return (user !== null) ? true : false;
  }

  // Sign out 
  // LogOut() {

  //     localStorage.removeItem('UserToken');
  //     this._router.navigate(['/transcript']);
    
  // }

  LogOut(): Observable<null> {
    return of(null);
}

  getToken(){
    return localStorage.getItem('UserToken');
  }
}
