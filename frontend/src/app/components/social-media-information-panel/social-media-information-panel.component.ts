import { Component, Input, OnInit } from '@angular/core';
import { SocialMedia } from 'src/app/models/social-media.model';

@Component({
  selector: 'app-social-media-information-panel',
  templateUrl: './social-media-information-panel.component.html',
  styleUrls: ['./social-media-information-panel.component.scss']
})
export class SocialMediaInformationPanelComponent implements OnInit {

  @Input() socialMedias: SocialMedia[] = [];

  ngOnInit(): void { }

}
