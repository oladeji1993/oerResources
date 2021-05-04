import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostel-preview',
  templateUrl: './hostel-preview.component.html',
  styleUrls: ['./hostel-preview.component.scss']
})
export class HostelPreviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  hostelPrintout(){
    this.router.navigateByUrl('/hostel-application-printout');
  }

}
