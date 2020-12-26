import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import UserDto from '../../../../shared/dto/user.dto';
import { User } from '../common/models/user.model';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
    private spinnerService: SpinnerService
  ) { }

  login(username: string, password: string): Observable<User> {
    const body = {
      username,
      password
    };
    this.spinnerService.show();
    return this.httpClient.post<UserDto>('api/auth/login', body).pipe(
      map(userDto => {
        return User.Nil;
      }),
      finalize(() => {
        this.spinnerService.hide();
      })
    );
  }
}
