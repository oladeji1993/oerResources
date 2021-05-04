
import { GuestGuard } from './Middleware/guest.guard';
import { AuthGuard } from './Middleware/auth.guard';
import { AuthService } from './shared/services/auth/auth.service';

import {NgxsModule} from '@ngxs/store';
import { NgxsStoragePluginModule} from '@ngxs/storage-plugin'
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';


import { TranscriptDashboardModule } from './layouts/transcript-dashboard/transcript-dashboard.module';
import { TranscriptModule } from './layouts/transcript/transcript.module';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
// import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { MainModule } from './layouts/main/main.module';
import { HistoryComponent } from './main-pages/about/history/history.component';
import { CoreValueComponent } from './main-pages/about/core-value/core-value.component';
import { MissionComponent } from './main-pages/about/mission/mission.component';
import { VisionComponent } from './main-pages/about/vision/vision.component';
import { UndergraduateComponent } from './main-pages/academic-programme/undergraduate/undergraduate.component';
import { PostgraduateComponent } from './main-pages/academic-programme/postgraduate/postgraduate.component';
import { AdminpageComponent } from './main-pages/administration/adminpage/adminpage.component';

import { PortalComponent } from './student-portal/portal/portal.component';
import { LayoutComponent } from './student-portal/layout/layout.component';
import { PortalheaderComponent } from './student-portal/include/portalheader/portalheader.component';
import { PortalfooterComponent } from './student-portal/include/portalfooter/portalfooter.component';
import { PortalsidenavComponent } from './student-portal/include/portalsidenav/portalsidenav.component';
import { PortalsubheaderComponent } from './student-portal/include/portalsubheader/portalsubheader.component';
import { PortalloginComponent } from './student-portal/portallogin/portallogin.component';
import { TokenInterceptorService } from './shared/services/auth/token-interceptor.service';
import { AuthState } from './shared/state/auth.state';
import { OerModule } from './layouts/oer/oer.module';
import { RequestTranscriptComponent } from './transcript-pages/dashboard/request-transcript/request-transcript.component';
import { RequestCertificateComponent } from './transcript-pages/dashboard/request-certificate/request-certificate.component';
import { TrackApplicationComponent } from './transcript-pages/dashboard/track-application/track-application.component';
import { ClearanceComponent } from './transcript-pages/dashboard/clearance/clearance.component';


import { StudentProfileComponent } from './student-portal/student-profile/student-profile.component';
import { SchoolFeePaymentComponent } from './student-portal/fee-payment/school-fee-payment/school-fee-payment.component';
import { ScreeningComponent } from './student-portal/application/screening/screening.component';
import { ScreeningPaymentComponent } from './student-portal/application/screening-payment/screening-payment.component';
import { ApplicationFormComponent } from './student-portal/application/application-form/application-form.component';
import { ApplicationUploadComponent } from './student-portal/application/application-upload/application-upload.component';
import { CourseFormComponent } from './student-portal/course-registration/course-form/course-form.component';
import { CourseRegistrationComponent } from './student-portal/course-registration/course-registration/course-registration.component';
import { CoursesSelectedComponent } from './student-portal/course-registration/courses-selected/courses-selected.component';
import { HostelFormComponent } from './student-portal/hostel/hostel-form/hostel-form.component';
import { HostelApplicationComponent } from './student-portal/hostel/hostel-application/hostel-application.component';
import { HostelFeePaymentComponent } from './student-portal/hostel/hostel-fee-payment/hostel-fee-payment.component';
import { HostelPreviewComponent } from './student-portal/hostel/hostel-preview/hostel-preview.component';
import { HostelPrintoutComponent } from './student-portal/hostel/hostel-printout/hostel-printout.component';
import { ResultRequestComponent } from './student-portal/results/result-request/result-request.component';
import { DisplayResultsComponent } from './student-portal/results/display-results/display-results.component';
import { PaymentDialogComponent } from './student-portal/fee-payment/payment-dialog/payment-dialog.component';
import { ClearanceApplicationComponent } from './student-portal/clearance/clearance-application/clearance-application.component';
import { ClearanceAvailableComponent } from './student-portal/clearance/clearance-available/clearance-available.component';
import { ClearanceDialogComponent } from './student-portal/clearance/clearance-dialog/clearance-dialog.component';
import { HostelClearanceComponent } from './student-portal/clearance/hostel-clearance/hostel-clearance.component';


@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    LayoutComponent,    
    HistoryComponent,
    CoreValueComponent,
    MissionComponent,
    VisionComponent,
    UndergraduateComponent,
    PostgraduateComponent,
    AdminpageComponent,
   
    PortalComponent,
    LayoutComponent,
    PortalheaderComponent,
    PortalsubheaderComponent,
    PortalsidenavComponent,
    PortalfooterComponent,
    PortalloginComponent,
    RequestTranscriptComponent,
    RequestCertificateComponent,
    TrackApplicationComponent,
    ClearanceComponent,
    
    StudentProfileComponent,
    SchoolFeePaymentComponent,
    ScreeningComponent,
    ScreeningPaymentComponent,
    ApplicationFormComponent,
    ApplicationUploadComponent,
    CourseFormComponent,
    CourseRegistrationComponent,
    CoursesSelectedComponent,
    HostelFormComponent,
    HostelApplicationComponent,
    HostelFeePaymentComponent,
    HostelPreviewComponent,
    HostelPrintoutComponent,
    ResultRequestComponent,
    DisplayResultsComponent,
    PaymentDialogComponent,
    ClearanceApplicationComponent,
    ClearanceAvailableComponent,
    ClearanceDialogComponent,
    HostelClearanceComponent, 
  
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AuthState]),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    HttpClientModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    TranscriptModule,
    MainModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    HttpClientModule,

  ],
  providers: [
    FormsModule,
    ReactiveFormsModule,
    TranscriptDashboardModule,
    OerModule,
    AuthService,
    AuthGuard, 
    GuestGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }     
  ],
  
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
