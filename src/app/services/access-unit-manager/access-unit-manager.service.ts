import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccessUnit } from '../../model/AccessUnit';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccessUnitManagerService {

  constructor(private http: HttpClient) { }

  getAllAccessUnits() : Observable<AccessUnit[]>
  {
    return this.http.get<AccessUnit[]>(environment.configuration.apiUrl + '/accessUnits');
  }

  getAccessUnit(id :string) :Observable<AccessUnit>
  {
    return this.http.get<AccessUnit>(environment.configuration.apiUrl + '/accessUnits/' + id);
  }

  saveAccessUnit(id :string, accessUnit :AccessUnit) :Observable<void>
  {
    return this.http.put<void>(environment.configuration.apiUrl + '/accessUnits/' + id, accessUnit);
  }

  createAccessUnit(accessUnit :AccessUnit) :Observable<AccessUnit>
  {
    return this.http.post<AccessUnit>(environment.configuration.apiUrl + '/accessUnits/', accessUnit);
  }

  deleteAccessUnit(id :string) :Observable<void>
  {
    return this.http.delete<void>(environment.configuration.apiUrl + '/accessUnits/' + id);
  }
}
