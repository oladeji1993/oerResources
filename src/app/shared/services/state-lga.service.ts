import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateLgaService {

  constructor(private http: HttpClient) { }

  getstatefromjson(){
    return this.http
    .get<any>('http://locationsng-api.herokuapp.com/api/v1/states'); 
    // give valid path as assets/user.json might not work

}

getlgasfromjson(val:any){
  return this.http
  .get<any>('http://locationsng-api.herokuapp.com/api/v1/states/'+val+'/lgas'); 
  // give valid path as assets/user.json might not work

}
}
