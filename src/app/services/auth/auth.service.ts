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

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static CAPABILITIES_ENDPOINT :string = "capabilities";

  static LOCAL_STORAGE_USER_CAPABILITY :string = "userCapability";
  static LOCAL_STORAGE_SESSION_TEMP :string = "sessionId";

  userCapability :UserCapability = null;

  getLSCapabilityPromise :Promise<any> = null;

  tempSessionToken :string = null;
  
  constructor(private cookieService: CookieService,private http: HttpClient, private router: Router, private location: Location, protected asyncLocalStorage: LocalStorage) {
    Parse.setAsyncStorage(asyncLocalStorage);
    Parse.initialize("e1");
    Parse.serverURL = environment.configuration.apiUrl + '/backend/parse';
    if(this.isLoggedIn())
    {
      this.initializeUserCapabilityFromLS();
    }
  }

  private initializeUserCapabilityFromLS()
  {
    let raw :string = localStorage.getItem(AuthService.LOCAL_STORAGE_USER_CAPABILITY);
    console.log(raw);
    this.userCapability = JSON.parse(raw);
  }

  private saveUserCapability()
  {
    localStorage.setItem(AuthService.LOCAL_STORAGE_USER_CAPABILITY, JSON.stringify(this.userCapability));
  }

  logOut()
  {
    this.userCapability = null;
    localStorage.setItem(AuthService.LOCAL_STORAGE_USER_CAPABILITY, null);
    Parse.User.logOut();
  }

  isLoggedIn()
  {
    return Parse.User.current() !== null;
  }

  hasAnyWriteCapability() : boolean
  {
    if(!this.isLoggedIn() || this.userCapability === null || this.userCapability.writeTags === undefined)
    {
      return false
    }

    return this.userCapability.writeTags.length > 0;
  }

  initializeSession() :Promise<any>
  {
    return new Promise<boolean>((resolve, reject) => {
      Parse.Session.current().then((session) => {
        this.tempSessionToken = session.getSessionToken();
        this.saveTempSession();
        resolve();
      });
    });
  }

  saveTempSession() :void
  {
    localStorage.setItem(AuthService.LOCAL_STORAGE_SESSION_TEMP, this.tempSessionToken);
  }

  initializeTempSessionFromLS() :void
  {
    this.tempSessionToken = localStorage.getItem(AuthService.LOCAL_STORAGE_SESSION_TEMP);
  }

  loginWithCredentials(username: string, password: string) :Promise<boolean>
  {
    return new Promise<boolean>((resolve, reject) => {
      Parse.User.logIn(username, password).then(_ => {
          this.initializeSession().then(_ => {
            this.receiveNewCapabilities().then(userCapability => {
              this.userCapability = userCapability;
              console.log(JSON.stringify(this.userCapability));
              this.saveUserCapability();
              resolve();
            }).catch(reject);
          });
        }).catch(reject);
    });
  }

  getToken() :string
  {
    return this.tempSessionToken;
  }

  receiveNewCapabilities() :Promise<UserCapability>
  {
    return new Promise<UserCapability>((resolve, reject) => {
      let dummyCapability = new UserCapability();
      dummyCapability.writeTags = ["public"];
      dummyCapability.readTags = ["public"];
      let userCapability = dummyCapability;
      resolve(userCapability);
    });
  }

  redirectToLoginAndReset()
  {
    this.location.replaceState('/');
    this.router.navigateByUrl('auth');
  }
}
