import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Response } from '@angular/http';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static CHECK_ENDPOINT :string = "isAuthenticatedForRead";
  static LOGIN_ENDPOINT :string = "login";

  static COOKIE_KEY = "e1-token-cookie"

  currentTokenCookieValue :string = undefined;


  constructor(private cookieService: CookieService,private http: HttpClient) { }

  isAuthenticated() :Promise<void>
  {
    const p = new Promise<void>((resolve, reject) => {
      if(this.currentTokenCookieValue && this.currentTokenCookieValue.length > 0)
      {
        this.checkCurrentTokenValue().then(_ => resolve()).catch(_ => {
          console.log("had token (" + this.currentTokenCookieValue + "), now resetting...");
          this.currentTokenCookieValue = undefined;
          return this.isAuthenticated();
        });
      }

      let tokenCookieValue = this.cookieService.get(AuthService.COOKIE_KEY);
      if(!tokenCookieValue || tokenCookieValue.length <= 0)
      {
        reject();
        return;
      }

      //TokenCookieValueIsSet
      this.currentTokenCookieValue = tokenCookieValue;
      this.checkCurrentTokenValue().then(_ => resolve()).catch(_ => {
        reject();
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
        .get<any>(environment.configuration.apiUrl + AuthService.CHECK_ENDPOINT, { headers: headers })
        .subscribe((response :HttpResponse<any>) => {
          if(response.status == 200)
          {
            resolve(true);
          }else
          {
            resolve(false);
          }
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
    this.cookieService.set(AuthService.COOKIE_KEY, token);
  }

  getToken() :string
  {
    if(this.currentTokenCookieValue) return this.currentTokenCookieValue;

    return this.cookieService.get(AuthService.COOKIE_KEY);
  }
}
