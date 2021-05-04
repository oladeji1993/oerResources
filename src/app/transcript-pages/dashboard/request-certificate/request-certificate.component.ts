import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StateLgaService } from 'src/app/shared/services/state-lga.service';
import { RequestTranscriptService } from 'src/app/shared/services/transcript/request-transcript.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-certificate',
  templateUrl: './request-certificate.component.html',
  styleUrls: ['./request-certificate.component.scss']
})
export class RequestCertificateComponent implements OnInit {
  TranscriptData = {
    requestType: <any> "",
    organization:  <any> "",
    address1:  <any> "",
    address2:  <any> "",
    country:  <any> "",
    state:  <any> "",
    lga:  <any> "",
    zip:  <any> "",
    contact_number:  <any> "",
    delivery_method:  <any> "",
    reference_number: <any> ""
      }
  validatingForm!: FormGroup;
  userState:any = [];
  selectedState:string ="";
  selectedLga:string ="";
  userLga:any = [];
  alert = {
    title: <any> "",
    message: <any> "",
    icon: <any> "",
  }


  items = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",1,2,3,4,5,6,7,8,9,0];

  shuffleItems() {
    let counter = this.items.length;
    let index = Math.floor(Math.random() * counter);
    while (counter > 0) {
     
      counter--;
      [this.items[counter], this.items[index]] = [this.items[index], this.items[counter]];
    } 
    return [this.items[counter], this.items[index]] 
  }
  
  constructor(
    private jsonservice:StateLgaService,
    private transcriptservice:RequestTranscriptService) { }

  ngOnInit(): void {
    this.validatingForm = new FormGroup({
      organization: new FormControl(null, [Validators.required]),
      requestType: new FormControl(null, [Validators.required]),
      address1: new FormControl(null, [Validators.required]),
      address2: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      lga: new FormControl(null, [Validators.required]),
      zip: new FormControl(null, [Validators.required]),
      contact_number: new FormControl(null, [Validators.required]),
      delivery_method: new FormControl(null, [Validators.required]),
     
      // password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      // password: new FormControl(null, [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), Validators.minLength(8)]),
    }/*, { updateOn: 'submit' }*/);
   
    this.jsonservice.getstatefromjson()
    .subscribe(
       res => {
      this.userState = res
    //  console.log(this.userState)
 
    },
    err => console.log(err)
      ); 

     
  }

  
  simpleAlert(){
    Swal.fire('Hello world!');
    
  }


  alertWithSuccess(title:any,message:any,icon:any){
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
    })
  }
  get input(){
    return this.validatingForm.controls;
  }
  onChange(newValue:any) {
    
    this.selectedState = newValue; 
    this.jsonservice.getlgasfromjson(newValue)
    .subscribe( res => {
      this.userLga = res
    //  console.log(this.userLga)
    },
    // err => //console.log(err)
      );  
    
}

submitTranscriptRequest(){
  this.transcriptservice.TranscriptRquest(this.TranscriptData)
  .subscribe(
    res =>{
      // this.alertWithSuccess()
      
      console.log(res.status)
      if(res.status == "200"){
        this.shuffleItems()
        this.TranscriptData.reference_number = "TR-" + `${this.items[0]}` + `${this.items[2]}` + `${this.items[28]}` + `${this.items[4]}` + `${this.items[31]}`+ `${this.items[6]}` + `${this.items[7]}` + `${this.items[35]}` + `${this.items[30]}` + `${this.items[27]}`
        this.alert.title = "successful!"
        this.alert.message = res.message + "\n your reference number is:"+ this.TranscriptData.reference_number
        this.alert.icon = "success"

        this.alertWithSuccess(this.alert.title, this.alert.message, this.alert.icon)
       console.log( this.TranscriptData.reference_number)
       this.TranscriptData = <any>{}     }
      if(res.status == "401"){
        this.alert.title = "Failed!"
        this.alert.message = res.message 
        this.alert.icon = "error"

        this.alertWithSuccess(this.alert.title, this.alert.message, this.alert.icon)
        // this.shuffleItems()
        // this.TranscriptData.reference_number = "TR-" + `${this.items[0]}` + `${this.items[2]}` + `${this.items[28]}` + `${this.items[4]}` + `${this.items[31]}`+ `${this.items[6]}` + `${this.items[7]}` + `${this.items[35]}` + `${this.items[30]}` + `${this.items[27]}`
        // console.log( this.TranscriptData.reference_number)
      }
    },
    err => console.log(err)
  )
  // console.log(this.TranscriptData)
}

}
