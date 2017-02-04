import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { TripService } from './trip.service';
import { CarShareService } from './car-share.service';
import { UserService } from './user.service';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

import 'hammerjs';
import { CarshareListComponent } from './carshare-list/carshare-list.component';
import { CarshareDetailComponent } from './carshare-detail/carshare-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { LoginComponent } from './login/login.component';

import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { AuthGuardService } from './auth/guards/auth-guard.service';
import { UnauthGuardService } from './auth/guards/unauth-guard.service';
import { AuthService } from './auth/services/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const firebaseConfig = {
  apiKey: "AIzaSyCf8me1ihwXzJU3GJTxI4TtF1uo_gfmStU",
  authDomain: "ridesharelogger.firebaseapp.com",
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
    TripListComponent,
    TripDetailComponent,
    CarshareListComponent,
    CarshareDetailComponent,
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
    AppRoutingModule
  ],
  providers: [CarShareService, TripService, UserService, AuthService, AuthGuardService, UnauthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
