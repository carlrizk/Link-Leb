import { Component, OnInit } from '@angular/core';

import { faHome, faInfoCircle, faUsers, faSignOutAlt, faSignInAlt, faLifeRing, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faSignInAlt = faSignInAlt;
  faLifeRing = faLifeRing;
  faUserCircle = faUserCircle;
  faHome = faHome;
  faInfoCircle = faInfoCircle;
  faUsers = faUsers;

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
