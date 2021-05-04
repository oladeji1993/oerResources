import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostel-form',
  templateUrl: './hostel-form.component.html',
  styleUrls: ['./hostel-form.component.scss']
})
export class HostelFormComponent implements OnInit {

  hostels = ['Moremi', 'Awo', 'Mozambique'];
  blocks = ['A', 'B', 'C'];
  rooms = ['1', '2', '3', '4', '5'];
  spaces = ['B1', 'B2'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submitHostelApplication(){
    this.router.navigateByUrl('/hostel-fee-payment');
  }

}
