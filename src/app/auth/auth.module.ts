import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
 
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    SignInComponent
  ]
})
export class AuthModule { }
