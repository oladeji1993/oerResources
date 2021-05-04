import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-upload',
  templateUrl: './application-upload.component.html',
  styleUrls: ['./application-upload.component.scss']
})
export class ApplicationUploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gradeList = ['A1', 'B2', 'B3', 'C4', 'C5', 'C6', 'P7', 'P8', 'F9'];

}
