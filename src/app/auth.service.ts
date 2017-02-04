import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
loggedIn: boolean = false;

  constructor(
    public af: AngularFire,
    public router: Router) {
        af.auth.subscribe(
            user => {
                if(user) {
                    console.log("logged in");
                    this.loggedIn = true;
                } else {
                    console.log("not logged in");
                    this.loggedIn = false;
                }
            }
        );
    }
    public login() {
        this.af.auth.login();
    }
}