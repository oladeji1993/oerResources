import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'assets/images/slides/slide1.jpeg' },
      { name: 'assets/images/slides/slide2.jpeg' },
      { name: 'assets/images/slides/slide3.jpeg' },
      { name: 'assets/images/slides/slide1.jpeg' },
      { name: 'assets/images/slides/slide2.jpeg' },
      { name: 'assets/images/slides/slide3.jpeg' },
      
      
     
    ]
  }

  ngOnInit(): void {
  }

}
