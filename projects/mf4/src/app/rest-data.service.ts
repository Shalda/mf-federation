import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Chart} from "../../../lib-shared/src/lib/lib-shared.model";

@Injectable({
  providedIn: 'root',
})
export class RestDataService {
  constructor(private _http: HttpClient) {}
  getChartsData(): Observable<Chart[]> {
    return this._http.get<Chart[]>('http://localhost:3000/charts');
  }
}
