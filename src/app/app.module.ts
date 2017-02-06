import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TripService } from './trip.service';
import { CarShareService } from './car-share.service';
import { UserService } from './user.service';

import { ToolbarComponent } from './toolbar/toolbar.component';

import 'hammerjs';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { LoginComponent } from './login/login.component';

import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { AuthService } from './auth/services/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CarShareModule } from './car-share/car-share.module';

import { AuthGuard } from './auth/guards/auth-guard.service';
import { UnauthGuard } from './auth/guards/unauth-guard.service';

const firebaseConfig = {
  apiKey: "AIzaSyCf8me1ihwXzJU3GJTxI4TtF1uo_gfmStU",
  authDomain: "ridesharelogger.com",
  databaseURL: "https://ridesharelogger.firebaseio.com",
  storageBucket: "ridesharelogger.appspot.com",
  messagingSenderId: "549212301269"
};

const firebaseAuthConfig = {
  method: AuthMethods.Redirect,
  remember: 'default'
};


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    UserDetailComponent,
    LoginComponent,
    SignInComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    CarShareModule,
    AppRoutingModule
  ],
  providers: [CarShareService, TripService, UserService, AuthService, AuthGuard, UnauthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
