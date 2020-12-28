import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { SocialMediaIconConfig } from '../config/social-media-icon.config';

@Injectable({
  providedIn: 'root'
})

export class SocialMediaIconsResolver implements Resolve<void> {

  constructor(private library: FaIconLibrary) { }

  resolve(): void {

    SocialMediaIconConfig.forEach(icon => {
      this.library.addIcons(icon);
    });

  }
}
