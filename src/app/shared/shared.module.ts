import { AppModule } from './../app.module';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OerFooterComponent } from './component/oer-footer/oer-footer.component';
import { OerHeaderComponent } from './component/oer-header/oer-header.component';




@NgModule({
  declarations: [
   
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
    
    OerFooterComponent,
    OerHeaderComponent
  ]
})
export class SharedModule { }
