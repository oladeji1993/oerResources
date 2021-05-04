import { AppModule } from './../app.module';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptHeaderComponent } from './component/transcript-header/transcript-header.component';
import { TranscriptFooterComponent } from './component/transcript-footer/transcript-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MainFooterComponent } from './component/main-footer/main-footer.component';
import { MainHeaderComponent } from './component/main-header/main-header.component';
import { TranscriptDashFooterComponent } from './component/transcript-dash-footer/transcript-dash-footer.component';
import { TranscriptDashNavbarComponent } from './component/transcript-dash-navbar/transcript-dash-navbar.component';
import { TranscriptDashSidebarComponent } from './component/transcript-dash-sidebar/transcript-dash-sidebar.component';
import { OerFooterComponent } from './component/oer-footer/oer-footer.component';
import { OerHeaderComponent } from './component/oer-header/oer-header.component';




@NgModule({
  declarations: [
    TranscriptHeaderComponent,
    TranscriptFooterComponent,
    MainFooterComponent,
    MainHeaderComponent,
    TranscriptDashFooterComponent,
    TranscriptDashNavbarComponent,
    TranscriptDashSidebarComponent,
    OerFooterComponent,
    OerHeaderComponent
  ],
  imports: [
    
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(), 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  exports: [
    TranscriptHeaderComponent,
    TranscriptFooterComponent,
    MainFooterComponent,
    MainHeaderComponent,
    TranscriptDashSidebarComponent,
    TranscriptDashNavbarComponent,
    TranscriptDashFooterComponent,
    OerFooterComponent,
    OerHeaderComponent
  ]
})
export class SharedModule { }
