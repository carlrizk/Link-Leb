import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NeedDto, NeedTypeDto } from '../../../../shared/dto/request.dto';
import { Need, NeedType } from '../models/need.model';

@Injectable({
  providedIn: 'root'
})
export class NeedService {

  constructor(private httpClient: HttpClient) { }

  private needTypes: Map<string, NeedType> = new Map();

  getNeedTypes(): Observable<Map<string, NeedType>> {
    if (this.needTypes.size !== 0) {
      return of(this.needTypes);
    } else {
      return this.httpClient.get<NeedTypeDto[]>('/api/needs').pipe(
        map(dtos => {
          dtos.forEach(dto => {
            const needType: NeedType = this.needTypeDto2NeedType(dto);
            this.needTypes.set(needType.id, needType);
          });
          return this.needTypes;
        })
      );
    }
  }

  needDto2Need(dto: NeedDto): Need {
    return {
      comment: dto.comment,
      type: this.needTypes.get(dto.type)
    };
  }

  needTypeDto2NeedType(dto: NeedTypeDto): NeedType {
    return {
      id: dto.id,
      name: dto.name,
      icon: dto.icon as IconProp
    };
  }
}
