import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {

  currentUser = {
    user : {username: '', password: ''}
};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('User: ', this.currentUser.user);
  }
}
