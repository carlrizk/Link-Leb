import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserDto } from '../../../../shared/dto/user.dto';
import { User } from '../models/user.model';
import { SocialMediaService } from './social-media.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User = null;
  private params: HttpParams;

  public onLogin = new BehaviorSubject<User>(null);
  public onLogout = new BehaviorSubject<User>(null);

  constructor(
    private httpClient: HttpClient,
    private socialMediaService: SocialMediaService
  ) { }

  getUser(id: string = this.currentUser.id): Observable<User> {
    return this.socialMediaService.getSocialMediaTypes().pipe(
      switchMap(_ => this.httpClient.get<UserDto>('/api/users/' + id).pipe(
        map(userDto => this.userDto2User(userDto))
      ))
    );
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  login(username: string, password: string): Observable<User> {
    return this.socialMediaService.getSocialMediaTypes().pipe(
      switchMap(_ => {
        const credentialsParams: HttpParams = new HttpParams().set('username', username).set('password', password);
        return this.httpClient.post<UserDto>('api/auth/login', undefined, { params: credentialsParams }).pipe(
          map(userDto => {
            this.currentUser = this.userDto2User(userDto);
            this.params = credentialsParams;
            this.onLogin.next(this.currentUser);
            return this.currentUser;
          })
        );
      })
    );
  }

  logout(): Observable<User> {
    if (this.currentUser !== null) {
      const oldUser = this.currentUser;
      this.currentUser = null;
      this.onLogout.next(oldUser);
      return of(oldUser);
    }
    return of(null);
  }

  addCredentials(request: HttpRequest<unknown>): HttpRequest<unknown> {
    return request.clone({ params: this.params });
  }

  userDto2User(dto: UserDto): User {
    return {
      id: dto.id,
      username: dto.username,
      description: dto.description,
      displayName: dto.displayName,
      avatar: dto.avatar,
      socialMedias: dto.socialMedias.map(sm => this.socialMediaService.SocialMediaDto_SocialMedia(sm))
    };
  }
}
