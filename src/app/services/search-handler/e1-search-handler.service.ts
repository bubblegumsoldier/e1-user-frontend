import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpParams,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Guideline } from '../../model/Guideline';
import { Http, Response } from '@angular/http';

const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})

export class SearchHandler {

  constructor(private http: HttpClient) {

    
      console.log("inside the search service");
   }

   getSearchResultsFor(queryString: string) : Observable<Guideline[]>
   {
      // return this.http.get('/api/Search' + '/' + 'queryString')
      //  .toPromise()
      // .then(Response => response.json() as Guideline)
      //console.log(queryString + "tttt");
      //const params = new HttpParams().set('queryString', queryString);
      //queryString=cancer
      return this.http.post<Guideline[]>('http://localhost:3000/api/Search', {data: queryString});
   
    }


}
