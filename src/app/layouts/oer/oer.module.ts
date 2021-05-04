import { OerHeaderComponent } from './../../shared/component/oer-header/oer-header.component';
import { OerFooterComponent } from './../../shared/component/oer-footer/oer-footer.component';
import { OnlineBookStoreSingleComponent } from './../../oer/online-book-store-single/online-book-store-single.component';
import { OerResourcesSingleComponent } from './../../oer/oer-resources-single/oer-resources-single.component';
import { OerLoginComponent } from './../../oer/oer-login/oer-login.component';
import { OerHomeComponent } from './../../oer/oer-home/oer-home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';
import { OerComponent } from './oer.component';
import { OerRegisterComponent } from 'src/app/oer/oer-register/oer-register.component';
import { OerResourcesComponent } from 'src/app/oer/oer-resources/oer-resources.component';
import { OnlineBookStoreComponent } from 'src/app/oer/online-book-store/online-book-store.component';



@NgModule({
  declarations: [
    OerComponent,
    OerHomeComponent,
    OerLoginComponent,
    OerRegisterComponent,
    OerResourcesComponent,
    OerResourcesSingleComponent,
    OnlineBookStoreComponent,
    OnlineBookStoreSingleComponent,
    OerFooterComponent,
    OerHeaderComponent



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
export class OerModule { }
