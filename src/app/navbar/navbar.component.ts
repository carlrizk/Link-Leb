import { Component, OnInit } from '@angular/core';

import { faHome, faInfoCircle, faUsers, faSignOutAlt, faSignInAlt, faLifeRing, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  signOutIcon = faSignOutAlt;
  signInIcon = faSignInAlt;
  requestsIcon = faLifeRing;
  profileIcon = faUserCircle;
  homeIcon = faHome;
  aboutUsIcon = faInfoCircle;
  partnersIcon = faUsers;
  barsIcon = faBars;



  constructor() { }

  loggedIn: boolean;

  ngOnInit(): void {
    this.loggedIn = true;
  }

  onSignOutClick(): void {
    this.loggedIn = false;
  }

  onSignInClick(): void {
    this.loggedIn = true;
  }

}
