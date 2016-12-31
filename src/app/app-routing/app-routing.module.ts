import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent }   from '../trip-list/trip-list.component';
import { TripDetailComponent } from '../trip-detail/trip-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/trips', pathMatch: 'full' },
  { path: 'trips', component: TripListComponent },
  { path: 'trip', component: TripDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
