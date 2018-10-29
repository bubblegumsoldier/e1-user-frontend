import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Guideline } from '../../model/Guideline';
import { dummyGuideline } from '../../model/dummyGuideline';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})

export class SearchHandlerService {

  constructor(private http: HttpClient) {

    
   }

   getSearchResultsFor(queryString: string) : Observable<Guideline[]>
   {
      // return this.http.get('/api/Search' + '/' + 'queryString')
      //  .toPromise()
      // .then(Response => response.json() as Guideline)
      //console.log(queryString + "tttt");
      //const params = new HttpParams().set('queryString', queryString);
      //queryString=cancer
      
      return this.http.get<Guideline[]>(environment.configuration.apiUrl + 'guidelines');
      
      //, {data: queryString}
   
    }

    getGuidelineFor(id :String) : Observable<Guideline>
    {
      console.log("Executing this");
      console.log(environment.configuration.apiUrl + 'guidelines/'+id);
      return this.http.get<Guideline>(environment.configuration.apiUrl + 'guidelines/'+id);
    }

    getDummyGuideline()
    {
      return dummyGuideline;
    }
}
