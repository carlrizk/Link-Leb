import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Link-Leb';

  showSpinner = false;
  private spinnerSubscription: Subscription;
  private routerSubscription: Subscription;

  constructor(
    private spinnerService: SpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.spinnerSubscription = this.spinnerService.updateSpinner.subscribe((shouldShow: boolean) => {
      this.showSpinner = shouldShow;
    });

    this.routerSubscription = this.router.events
      .subscribe(event => {
        if (event instanceof NavigationStart) {
          this.spinnerService.show();
        } else if (event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel) {
          this.spinnerService.hide();
        }
      });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.spinnerSubscription.unsubscribe();
  }

}
