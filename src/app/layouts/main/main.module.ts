import { AppModule } from './../../app.module';
import { MainComponent } from './main.component';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomepageComponent } from 'src/app/main-pages/home/homepage.component';
import { MainHeaderComponent } from 'src/app/shared/component/main-header/main-header.component';
import { MainFooterComponent } from 'src/app/shared/component/main-footer/main-footer.component';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    MainComponent,
    HomepageComponent,
    MainHeaderComponent,
    MainFooterComponent,
  
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
export class MainModule { }
