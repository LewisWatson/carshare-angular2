import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarshareListComponent }   from '../carshare-list/carshare-list.component';
import { CarshareDetailComponent }   from '../carshare-detail/carshare-detail.component';
import { TripListComponent }   from '../trip-list/trip-list.component';
import { TripDetailComponent } from '../trip-detail/trip-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/carshares', pathMatch: 'full' },
  { path: 'carshares', component: CarshareListComponent },
  { path: 'carshare/new', component: CarshareDetailComponent },
  { path: 'carshare/:id/trips', component: TripListComponent },
  { path: 'carshare/:id/trip/new', component: TripDetailComponent },
  { path: 'carshare/:id/trip/:tripId', component: TripDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
