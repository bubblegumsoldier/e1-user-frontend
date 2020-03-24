import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Guideline } from '../../model/Guideline';
import { dummyGuideline } from '../../model/dummyGuideline';
import {AuthService} from "../../services/auth/auth.service";
import { environment } from '../../../environments/environment';
import covid0 from './covid0.json';
import covid1 from './covid0.json';
import covid2 from './covid0.json';
import covid3 from './covid0.json';
import { Observer } from 'rx';

const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})

export class SearchHandlerService {

  allGuidelines :any = {
    "0": <any>covid0,
    "1": <any>covid1,
    "2": <any>covid2,
    "3": <any>covid3
  };

  allGuidelinesList :any[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {
      for(var property in this.allGuidelines)
      {
        this.allGuidelines[property]._id = property;
        this.allGuidelinesList.push(this.allGuidelines[property]);
      }
   }

   getSearchResultsFor(queryString: string) : Observable<Guideline[]>
   {
      // return this.http.get('/api/Search' + '/' + 'queryString')
      //  .toPromise()
      // .then(Response => response.json() as Guideline)
      //console.log(queryString + "tttt");
      //const params = new HttpParams().set('queryString', queryString);
      //queryString=cancer
      return Observable.create(observer => {
        // Yield a single value and complete
        observer.next(this.allGuidelinesList);
        observer.complete();
        // Any cleanup logic might go here
        return () => console.log('disposed')
      })
      // return this.http.get<Guideline[]>(environment.configuration.apiUrl + '/services/search/' + encodeURI(queryString));
      
      //, {data: queryString}
   
    }

    getGuidelineFor(id :string) : Observable<Guideline>
    {
      let returnVal = this.allGuidelines[id];
      return Observable.create((observer :Observer<Guideline>) => {
        // Yield a single value and complete
        observer.next(returnVal);
        observer.complete();
        // Any cleanup logic might go here
        return () => console.log('disposed')
      })
      // return this.http.get<Guideline>(environment.configuration.apiUrl + '/guidelines/'+id);
    }

    getAllGuidelines(includePrivate :boolean = false) : Observable<Guideline[]>
    {
      if(includePrivate)
      {
        return this.http.get<Guideline[]>(environment.configuration.apiUrl + '/guidelines/');
      }
      return this.getSearchResultsFor("");
    }

    getDummyGuideline()
    {
      return dummyGuideline;
    }
}
