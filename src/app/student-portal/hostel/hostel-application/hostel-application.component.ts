import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostel-application',
  templateUrl: './hostel-application.component.html',
  styleUrls: ['./hostel-application.component.scss']
})
export class HostelApplicationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  proceed(){
    this.router.navigateByUrl('/hostel-application-form');
  }

}
