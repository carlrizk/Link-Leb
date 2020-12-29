import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
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

  resolve(): Observable<Request> {
    return this.requestService.getRequest(this.request.id);
  }
}

