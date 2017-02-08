import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private titleService: Title,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle("Sign In");
  }

  signInAnonymously(): void {
    this.auth.signInAnonymously()
      .then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {

    if (this.auth.authenticated) {

      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/carshares';

      // Set our navigation extras object
      // that passes on our global query params and fragment
      let navigationExtras: NavigationExtras = {
        preserveQueryParams: true,
        preserveFragment: true
      };

      // Redirect the user
      this.router.navigate([redirect], navigationExtras);
    } else {
      console.log("login failed");
    }
  }
}
