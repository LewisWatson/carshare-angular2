import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth-guard.service';

import { CarShareListComponent }    from './list/list.component';
import { CarShareDetailComponent }  from './detail/detail.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

const carShareRoutes: Routes = [
  { 
    path: 'carshares',  
    component: CarShareListComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'carshare/:carShareID', 
    canActivate: [AuthGuard],
    children: [
      { path: 'trips', component: TripListComponent },
      { path: 'trip/:tripID', component: TripDetailComponent },
      { path: '', component: CarShareDetailComponent}
    ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(carShareRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarShareRoutingModule { }
