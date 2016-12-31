import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent }   from '../trip-list/trip-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/trip-list', pathMatch: 'full' },
  { path: 'trip-list',  component: TripListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
