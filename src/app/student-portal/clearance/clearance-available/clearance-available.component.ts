import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clearance-available',
  templateUrl: './clearance-available.component.html',
  styleUrls: ['./clearance-available.component.scss']
})
export class ClearanceAvailableComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  hostelClearance(){
    this.route.navigateByUrl('/hostel-clearance');
  }

  sportClearance(){}

  libraryClearance(){}

  medicalClearance(){}

}
