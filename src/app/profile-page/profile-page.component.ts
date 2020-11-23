import { Component, Input, OnInit } from '@angular/core';
import { User } from '../common/models/user.model';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {}

}
