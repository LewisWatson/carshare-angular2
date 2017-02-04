import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/guards/auth-guard.service';
import { UnauthGuardService } from '../auth/guards/unauth-guard.service';
import { CarshareListComponent }   from '../carshare-list/carshare-list.component';
import { CarshareDetailComponent }   from '../carshare-detail/carshare-detail.component';
import { TripListComponent }   from '../trip-list/trip-list.component';
import { TripDetailComponent } from '../trip-detail/trip-detail.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { SignInComponent } from '../auth/components/sign-in/sign-in.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'carshares', component: CarshareListComponent, canActivate: [AuthGuardService] },
  { path: 'carshare/new', component: CarshareDetailComponent, canActivate: [AuthGuardService] },
  { path: 'carshare/:id/trips', component: TripListComponent, canActivate: [AuthGuardService] },
  { path: 'carshare/:id/trip/new', component: TripDetailComponent, canActivate: [AuthGuardService] },
  { path: 'carshare/:id/trip/:tripId', component: TripDetailComponent, canActivate: [AuthGuardService] },
  { path: 'carshare/:id/trip/:tripId/passenger/new', component: UserDetailComponent, canActivate: [AuthGuardService] },
  { path: '', component: SignInComponent, canActivate: [UnauthGuardService]},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
