import { Component } from '@angular/core';
import { SocialMedia } from './common/models/social-media.model';
import { User } from './common/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Link-Leb';

  socialMedias: SocialMedia[] = [
    {
      type: {
        name: 'Website',
        icon: {
          prefix: 'fas',
          iconName: 'globe'
        }
      },
      label: 'Link-Leb',
      url: '#'
    },
    {
      type: {
        name: 'Facebook',
        icon: {
          prefix: 'fab',
          iconName: 'facebook'
        }
      },
      label: 'Link-Leb',
      url: '#'
    },
    {
      type: {
        name: 'Twitter',
        icon: {
          prefix: 'fab',
          iconName: 'twitter'
        }
      },
      label: 'LinkLebOfficial',
      url: '#'
    }
  ];

  user: User = {
    displayName: 'Link-Leb',
    description: 'Platform that helps NGOs',
    avatar: 'assets/logo.png',
    socialMedias: this.socialMedias
  };
}
