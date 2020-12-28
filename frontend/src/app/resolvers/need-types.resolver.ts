import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { NeedType } from '../models/need.model';
import { NeedService } from '../services/need.service';

@Injectable({
  providedIn: 'root'
})
export class NeedTypesResolver implements Resolve<Map<string, NeedType>> {

  constructor(private needSerivce: NeedService) { }

  resolve(): Observable<Map<string, NeedType>> {
    return this.needSerivce.getNeedTypes();
  }

}
