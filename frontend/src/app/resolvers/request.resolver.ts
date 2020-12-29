import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Request } from '../models/request.model';
import { RequestService } from '../services/request.service';

@Injectable({
  providedIn: 'root'
})

export class RequestResolver implements Resolve<Request> {

  constructor(
    private requestService: RequestService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Request> {
    return this.requestService.getRequest(route.params.id);
  }
}

