import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oer-footer',
  templateUrl: './oer-footer.component.html',
  styleUrls: ['./oer-footer.component.scss']
})
export class OerFooterComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
