import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Request } from '../../models/request.model';

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.scss']
})
export class RequestsPageComponent implements OnInit, OnDestroy {

  requests: Request[] = [];

  private requestsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.requestsSubscription = this.route.data.subscribe(res => this.requests = res.requests);
  }

  ngOnDestroy(): void {
    this.requestsSubscription.unsubscribe();
  }

}
