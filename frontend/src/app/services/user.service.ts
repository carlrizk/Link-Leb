import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { UserDto } from '../../../../shared/dto/user.dto';
import { User } from '../common/models/user.model';
import Mapper from '../helpers/mappers';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = User.Nil;
  private params: HttpParams;

  public onLogin = new BehaviorSubject<User>(User.Nil);
  public onLogout = new BehaviorSubject<User>(User.Nil);

  constructor(
    private httpClient: HttpClient,
    private spinnerService: SpinnerService
  ) { }

  isLoggedIn(): boolean {
    return this.user !== User.Nil;
  }

  login(username: string, password: string): Observable<User> {

    const params: HttpParams = new HttpParams();
    params.append("username", username);
    params.append("password", password);

    this.spinnerService.show();
    return this.httpClient.post<UserDto>('api/auth/login', undefined, { params: params }).pipe(
      map(userDto => {
        this.user = Mapper.UserDto_User(userDto);
        this.params = params;
        this.onLogin.next(this.user);
        return this.user;
      }),
      finalize(() => {
        this.spinnerService.hide();
      })
    );
  }

  logout(): Observable<User> {
    if (this.user !== User.Nil) {
      const oldUser = this.user;
      this.user = User.Nil;
      this.onLogout.next(oldUser);
      return of(oldUser);
    }
    return of(User.Nil);
  }

  addCredentials(request: HttpRequest<unknown>): void {
    this.params.keys().forEach(key => {
      request.params.append(key, this.params.get(key));
    });
  }
}
