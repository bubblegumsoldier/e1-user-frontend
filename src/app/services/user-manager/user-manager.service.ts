import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessUnit } from '../../model/AccessUnit';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  constructor(private http: HttpClient) { }

  getAllUsers() : Observable<User[]>
  {
    return this.http.get<User[]>(environment.configuration.apiUrl + '/users');
  }

  getUser(id :string) :Observable<User>
  {
    return this.http.get<User>(environment.configuration.apiUrl + '/users/' + id);
  }

  saveUser(id :string, user :User) :Observable<void>
  {
    if(!user.password || user.password.length <= 0) user.password = undefined;
    return this.http.put<void>(environment.configuration.apiUrl + '/users/' + id, user);
  }

  createUser(user :User) :Observable<User>
  {
    return this.http.post<User>(environment.configuration.apiUrl + '/users/', user);
  }
}
