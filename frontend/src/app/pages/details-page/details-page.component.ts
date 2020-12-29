import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Request } from '../../models/request.model';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})

export class DetailsPageComponent implements OnInit, OnDestroy {

  request: Request;

  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.data.subscribe(res => this.request = res.request);
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
