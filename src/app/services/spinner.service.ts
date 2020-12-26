import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  updateSpinner = new BehaviorSubject<boolean>(false);

  private count = 0;

  constructor() { }

  show(): void {
    if (this.count === 0) {
      this.updateSpinner.next(true);
    }
    this.count++;
  }

  hide(): void {
    this.count--;
    if (this.count === 0) {
      this.updateSpinner.next(false);
    }
  }
}
