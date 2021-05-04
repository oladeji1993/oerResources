import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NavigationService } from 'src/app/shared/services/navigation.service';
import { Observable } from 'rxjs';
import { SideNavDirection } from './sidebar-direction';

@Component({
  selector: 'app-transcript-dash-sidebar',
  templateUrl: './transcript-dash-sidebar.component.html',
  styleUrls: ['./transcript-dash-sidebar.component.scss']
})
export class TranscriptDashSidebarComponent implements OnInit {

   LinkItems: any[] = [
     {
       url: "home",
       name: "Dashboard",
       icon: "tachometer-alt"

     },
     {
      url: "home",
      name: "Application Status",
      icon: "digital-tachograph"

    },
    {
      url: "request-transcript",
      name: "Request Transcript",
      icon: "file-alt"

    },
    {
      url: "track-application",
      name: "Track Application",
      icon: "truck"

    },
    {
      url: "request-certificate",
      name: "Request Certificate",
      icon: "file-alt"

    },
    {
      url: "clearance",
      name: "Clearance",
      icon: "american-sign-language-interpreting"

    },

   ];

  showSideNav: Observable<boolean> | undefined ;

  @Input() sidenavTemplateRef: any;
  @Input() duration: number = 0.25;
  @Input() navWidth: number = window.innerWidth;
  @Input() direction: SideNavDirection = SideNavDirection.Left;
  
  constructor(private navService: NavigationService){}

  ngOnInit(): void {
    this.showSideNav = this.navService.getShowNav();
  }

  onSidebarClose() {
    this.navService.setShowNav(false);
  }

  getSideNavBarStyle(showNav: boolean) {
    let navBarStyle: any = {};
    
    navBarStyle.transition = this.direction + ' ' + this.duration + 's, visibility ' + this.duration + 's';
    navBarStyle.width = this.navWidth + 'px';
    navBarStyle[this.direction] = (showNav ? 0 : (this.navWidth * -1)) + 'px';
    
    return navBarStyle;
  }

}
