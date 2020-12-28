import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { SocialMediaDto, SocialMediaTypeDto } from '../../../../shared/dto/user.dto';
import { SocialMedia, SocialMediaType } from '../models/social-media.model';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor(private httpClient: HttpClient) { }

  private socialMediaTypes: Map<string, SocialMediaType> = new Map();

  getSocialMediaTypes(): Observable<Map<string, SocialMediaType>> {
    if (this.socialMediaTypes.size !== 0) {
      return of(this.socialMediaTypes);
    } else {
      return this.httpClient.get<SocialMediaTypeDto[]>('/api/socials').pipe(
        map(dtos => {
          dtos.forEach(dto => {
            const socialMediaType: SocialMediaType = this.SocialMediaTypeDto2SocialMediaType(dto);
            this.socialMediaTypes.set(socialMediaType.id, socialMediaType);
          });
          return this.socialMediaTypes;
        })
      );
    }
  }

  SocialMediaDto_SocialMedia(dto: SocialMediaDto): SocialMedia {
    return {
      url: dto.url,
      type: this.socialMediaTypes.get(dto.type)
    };
  }

  SocialMediaTypeDto2SocialMediaType(dto: SocialMediaTypeDto): SocialMediaType {
    return {
      id: dto.id,
      name: dto.name,
      icon: dto.icon as IconProp
    };
  }
}
