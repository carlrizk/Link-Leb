import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  Array = Array;

  user: User;

  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe(res => this.user = res.user);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
