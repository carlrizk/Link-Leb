import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Request } from '../models/request.model';
import { RequestService } from '../services/request.service';

@Injectable({
  providedIn: 'root'
})

export class RequestResolver implements Resolve<Request> {
  constructor(private requestService: RequestService) { }

  resolve(): Observable<Request> {
    return this.requestService.getRequest();
  }
  }

