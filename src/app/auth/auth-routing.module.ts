import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth-guard.service';
import { UnauthGuard } from './guards/unauth-guard.service';

import { SignInComponent } from './components/sign-in/sign-in.component';

const authRoutes: Routes = [
  { 
    path: 'login',  
    component: SignInComponent,
    canActivate: [UnauthGuard] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    UnauthGuard
  ]
})
export class AuthRoutingModule { }
