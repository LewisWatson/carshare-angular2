import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthGuard } from './auth/guards/unauth-guard.service';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/carshares', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
