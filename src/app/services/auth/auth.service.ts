import { CookieService } from 'ngx-cookie-service';
import { Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from "@angular/common";
import { Injectable } from '@angular/core';

import { Parse } from 'parse';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { UserCapability } from '../../model/capabilities/UserCapability';
import { User } from '../../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static CAPABILITIES_ENDPOINT :string = "capabilities";

  static LOCAL_STORAGE_FULL_USER :string = "e1/user";
  static LOCAL_STORAGE_SESSION_TEMP :string = "e1/sessionId";

  userCapability :UserCapability = null;

  getLSCapabilityPromise :Promise<any> = null;
  
  constructor(private cookieService: CookieService,private http: HttpClient, private router: Router, private location: Location, protected asyncLocalStorage: LocalStorage) {
    Parse.setAsyncStorage(asyncLocalStorage);
    Parse.initialize("e1");
    Parse.serverURL = 'https://dev.evid.one/api/backend/parse';
  }

  getFullUser()
  {
    let raw :string = localStorage.getItem(AuthService.LOCAL_STORAGE_FULL_USER);
    console.log(raw);
    return JSON.parse(raw);
  }

  private setFullUser(fullUser)
  {
    localStorage.setItem(AuthService.LOCAL_STORAGE_FULL_USER, JSON.stringify(fullUser));
  }

  logOut()
  {
    this.userCapability = null;
    this.setFullUser(null);
    this.setSessionToken(null);
    Parse.User.logOut();
  }

  isLoggedIn()
  {
    return Parse.User.current() !== null;
  }

  isAdmin() :boolean
  {
    if(!this.isLoggedIn())
    {
      return false
    }

    return this.getFullUser().ACL["*"].write === true;
  }

  hasAnyWriteCapability() : boolean
  {
    if(!this.isLoggedIn())
    {
      return false
    }

    return this.getFullUser().ACL["*"].write === true || this.getFullUser().rights.write.length > 0;
  }

  getSessionToken() :string
  {
    return localStorage.getItem(AuthService.LOCAL_STORAGE_SESSION_TEMP);
  }

  private setSessionToken(sessionToken :string)
  {
    localStorage.setItem(AuthService.LOCAL_STORAGE_SESSION_TEMP, sessionToken);
  }

  initializeSession() :Promise<any>
  {
    return new Promise<boolean>((resolve, reject) => {
      Parse.Session.current().then((session) => {
        this.setSessionToken(session.getSessionToken());
        resolve();
      });
    });
  }

  loginWithCredentials(username: string, password: string) :Promise<boolean>
  {
    return new Promise<boolean>((resolve, reject) => {
      Parse.User.logIn(username, password).then(_ => {
        console.log("logged in with parse");
          this.initializeSession().then(_ => {
            console.log("initialized session");
            this.receiveNewFullUser().then(fullUser => {
              console.log("received full user");
              this.setFullUser(fullUser);
              resolve();
            }).catch(e => {
              this.logOut();
              reject(e);
            });
          }).catch(e => {
            this.logOut();
            reject(e);
          });
        }).catch(e => {
          this.logOut();
          reject(e);
        });
    });
  }

  receiveNewFullUser() :Promise<User>
  {
    return new Promise<User>((resolve, reject) => {
      let user :User;
      this.http.get(environment.configuration.apiUrl + '/users/me').subscribe((result :User) => {
        user = result;
        resolve(user);
      }, e => {
        console.log(e);
        reject(e);
      });
    });
  }

  redirectToLoginAndReset()
  {
    this.location.replaceState('/');
    this.router.navigateByUrl('auth');
  }
}
