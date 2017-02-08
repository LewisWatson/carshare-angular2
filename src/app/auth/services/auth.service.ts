import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Headers } from '@angular/http';
import { AuthProviders, AuthMethods, AngularFire, FirebaseAuthState } from 'angularfire2';
import { DataStoreService } from '../../data-store.service';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public af: AngularFire, private router: Router, private dataStore: DataStoreService) {
    af.auth.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
      state.auth.getToken().then(
        function(token) {
          console.log("token "+token);
          localStorage.setItem("authToken", token);
          this.dataStore.updateAuthToken();
        }.bind(this)
      ).catch(
        function(error) {
          console.log(error);
        }
      );
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({ provider })
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInAnonymously(): firebase.Promise<FirebaseAuthState> {
    
    var promise = this.af.auth.login({
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
    })
      .catch(error => console.log('ERROR @ AuthService#signInAnonymously() :', error));

    return promise;
  }

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github);
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Facebook);
  }

  signOut(): void {
    this.af.auth.logout().then(
      () => this.router.navigate(['/login'])
    )
      .catch(error => console.log('ERROR @ AuthService#signOut() :', error));
  }
}
