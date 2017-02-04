import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';


@Injectable()
export class UnauthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.auth.af.auth
      .take(1)
      .map(authState => !authState)
      .do(unauthenticated => {
        if (!unauthenticated) {
          this.router.navigate(['/carshares']);
        }
      });
  }
}
