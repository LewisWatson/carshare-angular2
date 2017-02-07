import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { JsonApiModule } from 'angular2-jsonapi';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DataStoreService} from './data-store.service';

import { ToolbarComponent } from './toolbar/toolbar.component';

import 'hammerjs';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AuthService } from './auth/services/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CarShareModule } from './car-share/car-share.module';
import { AuthModule } from './auth/auth.module';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    JsonApiModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    AuthModule,
    CarShareModule,
    AppRoutingModule
  ],
  providers: [DataStoreService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
