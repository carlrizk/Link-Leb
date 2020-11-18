import { Component, Input, OnInit } from '@angular/core';
import { SocialMedia } from '../common/models/social-media.model';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-media-information-panel',
  templateUrl: './social-media-information-panel.component.html',
  styleUrls: ['./social-media-information-panel.component.scss']
})
export class SocialMediaInformationPanelComponent implements OnInit {

  @Input() socialMedias: SocialMedia[];

  constructor(library: FaIconLibrary) {
    library.addIcons(faGlobe, faFacebook, faTwitter);
  }

  ngOnInit(): void { }

}
