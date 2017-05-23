---
title: Angular4 and AngularFire2 OAuth
description: An easy way to add secure user friendly authentication to Angular
date: 2017-05-23
layout: Post
---

# The tutorial I wish I had when starting my Angular app

In the never ending quest to keep up with the rapdily evolving JS framework hellscape, I've been learning Angular, one of the most popular and powerful frameworks on the market. One of the first things one needs to think about when starting any web app of complexity is how to add secure user accounts for users to act through.

After lots of searching with little but outdated tutorials and spotty documentation, I've compiled all the knowledge I've gained about how to create an extremely user friendly, secure, and simple authentication service (the google way)using the latest versions of Angular, AngularFire2, and Material2.

# NOTICE: Sections are still under construction


# Step 1: Create Firebase App and Activate OAuth Providers

# Step 2: Install AngularFire2 and Generate Components

# Step 3: Creating the Backend Authentication Service
#### auth.service.ts
```typescript
import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router:Router) {

            this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });
          }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) { return 'Guest' }
    else { return this.authState['displayName'] || 'User without a Name' }
  }

  //// Social Auth ////

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) =>  {
          this.authState = credential.user
          this.updateUserData()
      })
      .catch(error => console.log(error));
  }

  //// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/'])
  }

  //// Helpers ////

  private updateUserData(): void {
  // Writes user name and email to realtime db
  // useful if your app displays information about users or for admin features

    let path = `users/${this.currentUserId}`; // Endpoint on firebase
    let data = {
                  email: this.authState.email,
                  name: this.authState.displayName
                }

    this.db.object(path).update(data)
    .catch(error => console.log(error));
  }
}
```

# Step 4: Creating the User Login Component
#### users/login/login.component.ts
```typescript
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app'
import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService,
              private router: Router) { }

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.router.navigate(['/profile']);
  }

  signInWithGithub(): void {
    this.auth.githubLogin()
    .then(() => this.afterSignIn());
  }
  signInWithGoogle(): void {
    this.auth.googleLogin()
      .then(() => this.afterSignIn());
  }
  signInWithFacebook(): void {
    this.auth.facebookLogin()
      .then(() => this.afterSignIn());
  }

  ngOnInit() { }
}
```

#### users/login/login.component.html
```html
<h1>Login Providers:</h1>
<div id="signin-buttons">
  <span class="error" *ngIf="error">{{ error }}</span>
  <div *ngIf="!auth.currentUser; else alreadyLoggedIn">
  <button md-raised-button (click)="signInWithFacebook()" class="login" color="primary"><fa [name]="'facebook'"></fa> Login With Facebook</button>
  <button md-raised-button (click)="signInWithGoogle()" class="login" color="primary"><fa [name]="'google'"></fa> Login With Google</button>
  <button md-raised-button (click)="signInWithGithub()" class="login" color="primary"><fa [name]="'github'"></fa> Login With Github</button>
</div>

<ng-template #alreadyLoggedIn>
    already logged in!
</ng-template>
```


# Step 5: Creating the User Profile Component
#### users/profile/profile.component.ts
```typescript
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  logout() {
    this.auth.signOut();
  }

  ngOnInit() {
  }

}
```

#### users/profile/profile.component.html
```html
  <!-- User logged in -->
  <div *ngIf="auth.currentUser">
    <h3>Hi there, {{ auth.currentUserDisplayName }}</h3>
    <img [src]="auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'" id="account-img" class="img-circle">
    <br>
    <button md-raised-button color="primary" (click)="logout()"> Logout</button>
 </div>
  <!-- User NOT logged in -->
  <div *ngIf="!auth.currentUser">
    <h3>Hi there, {{ auth.currentUserDisplayName }}</h3>
    <p>Login to get started...</p>
    <button md-raised-button color="primary" routerLink="/login">Login</button>
  </div>
```

# Step 6: Guarding Authorized Routes
#### auth.guard.ts
```typescript
import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> | boolean {
      if (this.auth.authenticated) { return true; }

      return this.auth.currentUserObservable
         .take(1)
         .map(user => !!user)
         .do(loggedIn => {
           if (!loggedIn) {
             console.log("access denied")
             this.router.navigate(['/login']);
           }
         })

  }
}
```