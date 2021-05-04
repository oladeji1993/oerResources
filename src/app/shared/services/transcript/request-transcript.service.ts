import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
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
export class RequestTranscriptService {
 
    private APIUrl =  Url
     
    constructor(
      private http: HttpClient,
      private _router: Router,
      
      ) { }
  
    TranscriptRquest (data: any){
      return this.http.post<any>(this.APIUrl  + 'transcript/store', data)
    }


}
