import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { faHome, faInfoCircle, faUsers, faSignOutAlt, faSignInAlt, faLifeRing, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  signOutIcon = faSignOutAlt;
  signInIcon = faSignInAlt;
  requestsIcon = faLifeRing;
  profileIcon = faUserCircle;
  homeIcon = faHome;
  aboutUsIcon = faInfoCircle;
  partnersIcon = faUsers;
  barsIcon = faBars;

  private loginSubscription: Subscription;
  private logoutSubscription: Subscription;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  loggedIn = false;

  ngOnInit(): void {

    this.loginSubscription = this.userService.onLogin.subscribe(user => {
      if (user !== null) {
        this.loggedIn = true;
      }
    });

    this.logoutSubscription = this.userService.onLogout.subscribe(user => {
      if (user !== null) {
        this.loggedIn = false;
      }
    });
  }

  signOutClick(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
    this.logoutSubscription.unsubscribe();
  }

}
