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

  private currentUser: User = User.Nil;
  private params: HttpParams;

  public onLogin = new BehaviorSubject<User>(User.Nil);
  public onLogout = new BehaviorSubject<User>(User.Nil);

  constructor(
    private httpClient: HttpClient,
    private spinnerService: SpinnerService
  ) { }

  getUser(id: string = this.currentUser.id): Observable<User> {
    return this.httpClient.get<UserDto>('/api/users/' + id).pipe(
      map(userDto => Mapper.UserDto_User(userDto))
    );
  }

  isLoggedIn(): boolean {
    return this.currentUser !== User.Nil;
  }

  login(username: string, password: string): Observable<User> {

    const credentialsParams: HttpParams = new HttpParams().set('username', username).set('password', password);

    this.spinnerService.show();
    return this.httpClient.post<UserDto>('api/auth/login', undefined, { params: credentialsParams }).pipe(
      map(userDto => {
        this.currentUser = Mapper.UserDto_User(userDto);
        this.params = credentialsParams;
        this.onLogin.next(this.currentUser);
        return this.currentUser;
      }),
      finalize(() => {
        this.spinnerService.hide();
      })
    );
  }

  logout(): Observable<User> {
    if (this.currentUser !== User.Nil) {
      const oldUser = this.currentUser;
      this.currentUser = User.Nil;
      this.onLogout.next(oldUser);
      return of(oldUser);
    }
    return of(User.Nil);
  }

  addCredentials(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({params: this.params});
  }
}
