import { OerLoginComponent } from './oer/oer-login/oer-login.component';
import { OnlineBookStoreSingleComponent } from './oer/online-book-store-single/online-book-store-single.component';
import { OnlineBookStoreComponent } from './oer/online-book-store/online-book-store.component';
import { OerResourcesSingleComponent } from './oer/oer-resources-single/oer-resources-single.component';
import { OerResourcesComponent } from './oer/oer-resources/oer-resources.component';
import { OerHomeComponent } from './oer/oer-home/oer-home.component';
import { OerComponent } from './layouts/oer/oer.component';
import { GuestGuard } from './Middleware/guest.guard';
import { AuthGuard } from './Middleware/auth.guard';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { OerRegisterComponent } from './oer/oer-register/oer-register.component';
import { DashboardComponent } from './oer/dashboard/dashboard.component';

const routes: Routes = [
  
 
// OER
  
  {
    path: '',
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
    {
      path: 'dashboard',
      component: DashboardComponent,  canActivate: [AuthGuard]
    },

  ]
  },

  
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
