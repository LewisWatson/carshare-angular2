import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { JsonApiModule } from 'angular2-jsonapi';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { DataStoreService} from './data-store.service';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

import 'hammerjs';
import { CarshareListComponent } from './carshare-list/carshare-list.component';
import { CarshareDetailComponent } from './carshare-detail/carshare-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TripListComponent,
    TripDetailComponent,
    CarshareListComponent,
    CarshareDetailComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule,
    JsonApiModule
  ],
  providers: [DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
