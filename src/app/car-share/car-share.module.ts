import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { CarShareRoutingModule } from './car-share-routing.module';
import { CarShareListComponent } from './list/list.component';
import { CarShareDetailComponent } from './detail/detail.component';
import { TripListComponent} from './trip-list/trip-list.component';
import { TripDetailComponent} from './trip-detail/trip-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CarShareRoutingModule,
    ReactiveFormsModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    CarShareListComponent,
    CarShareDetailComponent,
    TripListComponent,
    TripDetailComponent
  ]
})
export class CarShareModule { }
