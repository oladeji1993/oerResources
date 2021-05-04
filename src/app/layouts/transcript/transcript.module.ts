import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './../../transcript-pages/login/login.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptComponent } from './transcript.component';
import { HomeComponent } from 'src/app/transcript-pages/home/home.component';
import { RegisterComponent } from 'src/app/transcript-pages/register/register.component';
import { TranscriptHeaderComponent } from 'src/app/shared/component/transcript-header/transcript-header.component';
import { TranscriptFooterComponent } from 'src/app/shared/component/transcript-footer/transcript-footer.component';
import { MDBBootstrapModule, MDBRootModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    TranscriptComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TranscriptHeaderComponent,
    TranscriptFooterComponent,   
    
  ],
  imports: [
    BrowserModule,
    
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class TranscriptModule { }
