import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-request',
  templateUrl: './result-request.component.html',
  styleUrls: ['./result-request.component.scss']
})
export class ResultRequestComponent implements OnInit {

  semesters = [];
  sessions = [];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getResults(){
    this.router.navigateByUrl('/display-results');
  }

}
