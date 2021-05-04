import { DashboardRequestTranscriptComponent } from './../../transcript-pages/dashboard/dashboard-request-transcript/dashboard-request-transcript.component';
import { TranscriptDashSidebarComponent } from './../../shared/component/transcript-dash-sidebar/transcript-dash-sidebar.component';
import { TranscriptDashNavbarComponent } from './../../shared/component/transcript-dash-navbar/transcript-dash-navbar.component';
import { TranscriptDashboardComponent } from './transcript-dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { TranscriptDashFooterComponent } from 'src/app/shared/component/transcript-dash-footer/transcript-dash-footer.component';
import { DashboardHomeComponent } from 'src/app/transcript-pages/dashboard/dashboard-home/dashboard-home.component';
import { DashboardProfileComponent } from 'src/app/transcript-pages/dashboard/dashboard-profile/dashboard-profile.component';



@NgModule({
  declarations: [
    TranscriptDashboardComponent,
    TranscriptDashNavbarComponent,
    TranscriptDashSidebarComponent,
    TranscriptDashFooterComponent,
    DashboardRequestTranscriptComponent,
    DashboardHomeComponent,
    DashboardProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class TranscriptDashboardModule { }
