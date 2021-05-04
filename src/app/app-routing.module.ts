import { ClearanceComponent } from './transcript-pages/dashboard/clearance/clearance.component';
import { TrackApplicationComponent } from './transcript-pages/dashboard/track-application/track-application.component';
import { RequestTranscriptComponent } from './transcript-pages/dashboard/request-transcript/request-transcript.component';
import { OerLoginComponent } from './oer/oer-login/oer-login.component';
import { OnlineBookStoreSingleComponent } from './oer/online-book-store-single/online-book-store-single.component';
import { OnlineBookStoreComponent } from './oer/online-book-store/online-book-store.component';
import { OerResourcesSingleComponent } from './oer/oer-resources-single/oer-resources-single.component';
import { OerResourcesComponent } from './oer/oer-resources/oer-resources.component';
import { OerHomeComponent } from './oer/oer-home/oer-home.component';
import { OerComponent } from './layouts/oer/oer.component';
import { GuestGuard } from './Middleware/guest.guard';
import { AuthGuard } from './Middleware/auth.guard';
import { HostelClearanceComponent } from './student-portal/clearance/hostel-clearance/hostel-clearance.component';
import { ClearanceAvailableComponent } from './student-portal/clearance/clearance-available/clearance-available.component';
import { ClearanceApplicationComponent } from './student-portal/clearance/clearance-application/clearance-application.component';
import { ResultRequestComponent } from './student-portal/results/result-request/result-request.component';
import { HostelFormComponent } from './student-portal/hostel/hostel-form/hostel-form.component';
import { HostelApplicationComponent } from './student-portal/hostel/hostel-application/hostel-application.component';
import { HostelFeePaymentComponent } from './student-portal/hostel/hostel-fee-payment/hostel-fee-payment.component';
import { HostelPreviewComponent } from './student-portal/hostel/hostel-preview/hostel-preview.component';
import { CoursesSelectedComponent } from './student-portal/course-registration/courses-selected/courses-selected.component';
import { CourseFormComponent } from './student-portal/course-registration/course-form/course-form.component';
import { ApplicationUploadComponent } from './student-portal/application/application-upload/application-upload.component';
import { SchoolFeePaymentComponent } from './student-portal/fee-payment/school-fee-payment/school-fee-payment.component';
import { DashboardRequestTranscriptComponent } from './transcript-pages/dashboard/dashboard-request-transcript/dashboard-request-transcript.component';
import { DashboardProfileComponent } from './transcript-pages/dashboard/dashboard-profile/dashboard-profile.component';
import { DashboardHomeComponent } from './transcript-pages/dashboard/dashboard-home/dashboard-home.component';
import { TranscriptDashboardComponent } from './layouts/transcript-dashboard/transcript-dashboard.component';
import { MissionComponent } from './main-pages/about/mission/mission.component';
import { CoreValueComponent } from './main-pages/about/core-value/core-value.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { TranscriptComponent } from './layouts/transcript/transcript.component';
import { HistoryComponent } from './main-pages/about/history/history.component';
import { HomepageComponent } from './main-pages/home/homepage.component';

import { HomeComponent } from './transcript-pages/home/home.component';
import { LoginComponent } from './transcript-pages/login/login.component';
import { RegisterComponent } from './transcript-pages/register/register.component';
import { VisionComponent } from './main-pages/about/vision/vision.component';
import { UndergraduateComponent } from './main-pages/academic-programme/undergraduate/undergraduate.component';
import { PostgraduateComponent } from './main-pages/academic-programme/postgraduate/postgraduate.component';
import { AdminpageComponent } from './main-pages/administration/adminpage/adminpage.component';

import { PortalComponent } from './student-portal/portal/portal.component';
import { PortalloginComponent } from './student-portal/portallogin/portallogin.component';
import { OerRegisterComponent } from './oer/oer-register/oer-register.component';
import { RequestCertificateComponent } from './transcript-pages/dashboard/request-certificate/request-certificate.component';

import { StudentProfileComponent } from './student-portal/student-profile/student-profile.component';
import { ScreeningComponent } from './student-portal/application/screening/screening.component';
import { ApplicationFormComponent } from './student-portal/application/application-form/application-form.component';
import { CourseRegistrationComponent } from './student-portal/course-registration/course-registration/course-registration.component';
import { HostelPrintoutComponent } from './student-portal/hostel/hostel-printout/hostel-printout.component';
import { DisplayResultsComponent } from './student-portal/results/display-results/display-results.component';

const routes: Routes = [
  
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
      path: 'home',
      component: HomepageComponent,
      },
      {
      
      path: 'history',
      component: HistoryComponent,
     },
     {
      
      path: 'core-value',
      component: CoreValueComponent,
     },
     {
      
      path: 'mission',
      component: MissionComponent,
     },
     {
      
      path: 'vision',
      component: VisionComponent,
     },
     {
      
      path: 'undergraduate',
      component: UndergraduateComponent,
     },
     {
      
      path: 'postgraduate',
      component: PostgraduateComponent,
     },
     {
      
      path: 'administration',
      component: AdminpageComponent,
     },
     
    
  ]
  },

  //transcript
  {
    path: 'transcript',
    component: TranscriptComponent,
    canActivate: [GuestGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      
      {
      
      path: 'home',
      component: HomeComponent,
      
     },
     
    {
      path: 'login',
      component: LoginComponent,
      
    },
    {
      path: 'register',
      component: RegisterComponent,
      
    },

  ]
  },
  {
    path: 'dashboard-transcript',
    component: TranscriptDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      
      {
      
      path: 'home',
      component: DashboardHomeComponent,
     },
     
    {
      path: 'profile',
      component: DashboardProfileComponent,
      
    },
    {
      path: 'request',
      component: DashboardRequestTranscriptComponent
    },
    {
      path: 'request-transcript',
      component: RequestTranscriptComponent
    },

    {
      path: 'track-application',
      component: TrackApplicationComponent
    },

    {
      path: 'request-certificate',
      component: RequestCertificateComponent
    },
    {
      path: 'clearance',
      component: ClearanceComponent
    },


  ]
  },
// OER
  
  {
    path: 'oer',
    component: OerComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      
      {
      
      path: 'home',
      component: OerHomeComponent,
     },
     
    {
      path: 'resources',
      component: OerResourcesComponent,
      
    },
    {
      path: 'resources-single',
      component: OerResourcesSingleComponent
    },
    {
      path: 'online-book-store',
      component: OnlineBookStoreComponent
    },
    {
      path: 'online-book-store-single',
      component: OnlineBookStoreSingleComponent
    },
    {
      path: 'register',
      component: OerRegisterComponent
    },
    {
      path: 'login',
      component: OerLoginComponent
    },

  ]
  },

  
  // Students Portal
  {
    path: 'portal',
    component: PortalComponent,
  },
  {
    path: 'portal-login',
    component: PortalloginComponent,
  },
  {
    path: 'student-profile',
    component: StudentProfileComponent,
  },
  {
    path: 'school-fees-payment',
    component: SchoolFeePaymentComponent,
  },
  {
    path: 'screening',
    component: ScreeningComponent,
  },
  {
    path: 'application-form',
    component: ApplicationFormComponent,
  },
  {
    path: 'upload-credentials',
    component: ApplicationUploadComponent,
  },
  {
    path: 'course-registration',
    component: CourseRegistrationComponent,
  },
  {
    path: 'select-courses',
    component: CourseFormComponent,
  },
  {
    path: 'course-registration-preview',
    component: CoursesSelectedComponent,
  },
  {
    path: 'hostel-application-form',
    component: HostelFormComponent,
  },
  {
    path: 'hostel-application',
    component: HostelApplicationComponent,
  },
  {
    path: 'hostel-fee-payment',
    component: HostelFeePaymentComponent,
  },
  {
    path: 'hostel-application-preview',
    component: HostelPreviewComponent,
  },
  {
    path: 'hostel-application-printout',
    component: HostelPrintoutComponent,
  },
  {
    path: 'check-results',
    component: ResultRequestComponent,
  },
  {
    path: 'display-results',
    component: DisplayResultsComponent,
  },
  {
    path: 'clearance-application',
    component: ClearanceApplicationComponent,
  },
  {
    path: 'clearance-available',
    component: ClearanceAvailableComponent,
  },
  {
    path: 'hostel-clearance',
    component: HostelClearanceComponent,
  }
];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: false
    })],
  //   RouterModule.forRoot(routes)],
    // exports: [RouterModule]
    //     useHash: false
    // }),
  //   RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
