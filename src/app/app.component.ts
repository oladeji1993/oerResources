
import { Component, isDevMode, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Maduka University';
  values: string[] = ['Tag 1', 'Tag 2', 'Tag 4'];

  specialPage: boolean = false;

  private specialPages: any[] = [
    '/pages/login',
    '/pages/register',
    '/pages/lock',
    '/pages/pricing',
    '/pages/single-post',
    '/pages/post-listing'
  ];

  private currentUrl = '';

  constructor(
    private router: Router,
    private location: Location
  ) {

    this.router.events.subscribe((route:any) => {
      this.currentUrl = route.url;

      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });
    if (isDevMode()) {
      // console.log(environment.apiUrl);
    } else {
      console.log('💪 Production!');
    }
    

  }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
}
