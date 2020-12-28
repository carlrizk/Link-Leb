import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { NeedTypeIconConfig } from '../config/need-type-icon.config';

@Injectable({
  providedIn: 'root'
})
export class NeedTypeIconResolver implements Resolve<void> {

  constructor(private library: FaIconLibrary) { }

  resolve(): void {

    NeedTypeIconConfig.forEach(icon => {
      this.library.addIcons(icon);
    });

  }
}
