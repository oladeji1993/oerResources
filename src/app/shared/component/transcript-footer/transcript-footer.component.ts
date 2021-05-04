import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transcript-footer',
  templateUrl: './transcript-footer.component.html',
  styleUrls: ['./transcript-footer.component.scss']
})

export class TranscriptFooterComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit(): void {
    
  }

}
