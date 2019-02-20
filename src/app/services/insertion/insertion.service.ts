import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Guideline } from '../../model/Guideline';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertionService {

  constructor(private http: HttpClient) { }

  public createNewGuideline(guideline :any) :Promise<any>
  {
    const p :Promise<any> = new Promise<any>((resolve, reject) => {
      this.http.post(environment.configuration.apiUrl + '/guidelines', guideline).subscribe(guideline => {
        resolve(guideline);
      }, e => {
        console.log(e);
        reject(e);
      });
    });
    return p;
  }

  public updateGuideline(guideline :any) :Promise<void>
  {
    const p :Promise<void> = new Promise<void>((resolve, reject) => {
      this.http.put(environment.configuration.apiUrl + '/guidelines/' + guideline._id, guideline).subscribe(_ => {
        resolve();
      }, e => {
        console.log(e);
        reject(e);
      });
    });
    return p;
  }

  public deleteGuideline(guidelineId :string) :Observable<void>
  {
    return this.http.delete<void>(environment.configuration.apiUrl + '/guidelines/' + guidelineId);
  }
}
