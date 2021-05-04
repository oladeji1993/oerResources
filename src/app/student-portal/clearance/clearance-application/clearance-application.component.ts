import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clearance-application',
  templateUrl: './clearance-application.component.html',
  styleUrls: ['./clearance-application.component.scss']
})
export class ClearanceApplicationComponent implements OnInit {

  depts = ['Agric', 'Bio', 'Maths'];
  programs = ['Under-Graduate', 'Post-Graduate'];

  constructor() { }

  ngOnInit(): void {
    
  }

  submitClearanceForm() {
    
  }

}
