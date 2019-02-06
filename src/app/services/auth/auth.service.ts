import { CookieService } from 'ngx-cookie-service';
import { Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from "@angular/common";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static CHECK_READ_ENDPOINT :string = "isAuthenticatedForRead";
  static CHECK_WRITE_ENDPOINT :string = "isAuthenticatedForWrite";
  static LOGIN_ENDPOINT :string = "login";

  static COOKIE_KEY = "e1-token-cookie";

  static COOKIE_KEY_HAS_WRITE = "e1-may-write-cache";

  currentTokenCookieValue :string = undefined;


  constructor(private cookieService: CookieService,private http: HttpClient, private router: Router, private location: Location, @Inject(DOCUMENT) private document: Document) { }

  isAuthenticatedForWrite() :Promise<void>
  {
    const p = new Promise<void>((resolve, reject) => {
      if(this.getLocalHasWriteCache())
      {
        resolve();
        return;
      }
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.currentTokenCookieValue
      })
      return this.http
        .get<any>(environment.configuration.apiUrl + AuthService.CHECK_WRITE_ENDPOINT, { headers: headers })
        .subscribe((response :HttpResponse<any>) => {
          this.setLocalHasWriteCache(true);
          resolve();
        }, (response :HttpResponse<any>) => {
          console.log(response);
          this.setLocalHasWriteCache(false);
          reject();
        });
    });
    return p;
  }

  isAuthenticated() :Promise<void>
  {
    const p = new Promise<void>((resolve, reject) => {
      if(this.currentTokenCookieValue && this.currentTokenCookieValue.length > 0)
      {
        console.log("we have a cookie");
        this.checkCurrentTokenValue().then(_ => resolve()).catch(_ => {
          console.log("had token (" + this.currentTokenCookieValue + "), now resetting...");
          this.currentTokenCookieValue = undefined;
          return this.isAuthenticated();
        });
      }
      var theCookies = this.document.cookie.split(';');
      var aString = '';
      for (var i = 1 ; i <= theCookies.length; i++) {
          aString += i + ' ' + theCookies[i-1] + "\n";
      }
      console.log("COOKIES:");
      console.log(aString);
      console.log(this.document);
      console.log(this.document.cookie);
      let tokenCookieValue = this.cookieService.get(AuthService.COOKIE_KEY);
      if(!tokenCookieValue || tokenCookieValue.length <= 0)
      {
        console.log("no cookie!");
        reject();
        return;
      }

      //TokenCookieValueIsSet
      this.currentTokenCookieValue = tokenCookieValue;
      this.checkCurrentTokenValue().then(_ => resolve()).catch(e => {
        reject(e);
      });
    });
    return p;
  }

  checkCurrentTokenValue() :Promise<boolean>
  {
    const p = new Promise<boolean>((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + this.currentTokenCookieValue
      })
      return this.http
        .get<any>(environment.configuration.apiUrl + AuthService.CHECK_READ_ENDPOINT, { headers: headers })
        .subscribe((response :HttpResponse<any>) => {
          resolve(true);
        }, (response :HttpResponse<any>) => {
          console.log(response);
          reject(response);
        });
    });
    return p;
  }

  loginWithCredentials(username: string, password: string) :Promise<boolean>
  {
    const p = new Promise<boolean>((resolve, reject) => {
      var fullUrl = environment.configuration.apiUrl + AuthService.LOGIN_ENDPOINT;

      var data = {
        username: username,
        password: password
      };
      const options = {headers: {'Content-Type': 'application/json'}};
      
      return this.http
      .post(fullUrl, JSON.stringify(data), options)
      .subscribe((response :any) => {
        console.log(response);
        if(response.token)
        {
          this.setToken(response.token);
          resolve(true);
        }else
        {
          reject();
        }
      },
      (err) => {
        reject()
      } 
      );
    });
    return p;
  }

  setToken(token :string)
  {
    this.currentTokenCookieValue = token;
    this.cookieService.set(AuthService.COOKIE_KEY, token, 1, '/');
  }

  getToken() :string
  {
    if(this.currentTokenCookieValue) return this.currentTokenCookieValue;

    return this.cookieService.get(AuthService.COOKIE_KEY);
  }

  setLocalHasWriteCache(val :boolean)
  {
    this.cookieService.set(AuthService.COOKIE_KEY_HAS_WRITE, val.toString());
  }

  getLocalHasWriteCache() :boolean
  {
    return this.cookieService.get(AuthService.COOKIE_KEY_HAS_WRITE) === "true";
  }

  redirectToLoginAndReset()
  {
    this.location.replaceState('/');
    this.router.navigateByUrl('auth');
    this.setToken("");
  }
}
