import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    const username = this.formGroup.get('username').value;
    const password = this.formGroup.get('password').value;

    this.userService.login(username, password).subscribe(res => {
      console.log(res);
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });

  }

}
