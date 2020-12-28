import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { SocialMedia } from 'src/app/common/models/social-media.model';

@Component({
  selector: 'app-social-media-information-panel',
  templateUrl: './social-media-information-panel.component.html',
  styleUrls: ['./social-media-information-panel.component.scss']
})
export class SocialMediaInformationPanelComponent implements OnInit {

  @Input() socialMedias: SocialMedia[] = [SocialMedia.Nil];

  constructor(library: FaIconLibrary) {
    library.addIcons(faGlobe, faFacebook, faTwitter, faExclamationTriangle);
  }

  ngOnInit(): void { }

}
