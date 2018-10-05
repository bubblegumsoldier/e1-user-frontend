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

   getGuidelinesBySearch(queryString: string) : Observable<Guideline[]>
   {
       console.log(queryString + "logging query string");
       return this.http.get<Guideline[]>('http://localhost:3000/api/SearchByString?queryString={queryString}');
               
    }

    getAllMedicalGuidelines() : Observable<Guideline[]>
    {
      return this.http.get<Guideline[]>('http://localhost:3000/api/AllMedicalGuidelines');
               
    }

    getDummyGuideline()
    {
      return dummyGuideline;
    }
}
