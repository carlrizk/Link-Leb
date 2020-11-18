import { Component, Input, OnInit } from '@angular/core';
import { User } from '../common/models/user.model';

@Component({
  selector: 'app-profile-information-panel',
  templateUrl: './profile-information-panel.component.html',
  styleUrls: ['./profile-information-panel.component.scss']
})
export class ProfileInformationPanelComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
