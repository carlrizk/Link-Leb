import { Component } from '@angular/core';
import { User } from './common/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Link-Leb';

  user: User = {
    displayName: 'Link-Leb',
    description: 'A platform that helps NGO\'s ',
    avatar: 'assets/logo.png',
    socialMedias: [
      {
        type: {
          name: 'Facebook',
          icon: ['fab', 'facebook']
        },
        label: 'Facebook',
        url: 'localhost'
      },
      {
        type: {
          name: 'Twitter',
          icon: ['fab', 'twitter']
        },
        label: 'Twitter',
        url: 'localhost'
      }
    ]
  };

}
