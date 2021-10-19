import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from '../model/charts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestDataService {
  constructor(private _http: HttpClient) {}
  getChartsData(): Observable<Chart[]> {
    return this._http.get<Chart[]>('http://localhost:3000/charts');
  }
}
