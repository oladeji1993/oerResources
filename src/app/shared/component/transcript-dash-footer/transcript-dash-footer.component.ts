import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcript-dash-footer',
  templateUrl: './transcript-dash-footer.component.html',
  styleUrls: ['./transcript-dash-footer.component.scss']
})
export class TranscriptDashFooterComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
