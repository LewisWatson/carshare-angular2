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

import { ToolbarComponent } from './toolbar/toolbar.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

import 'hammerjs';
import { CarshareListComponent } from './carshare-list/carshare-list.component';
import { CarshareDetailComponent } from './carshare-detail/carshare-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TripListComponent,
    TripDetailComponent,
    CarshareListComponent,
    CarshareDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [CarShareService, TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }
